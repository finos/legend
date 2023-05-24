/**
 * Copyright (c) 2020-present, Goldman Sachs
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as github from "@actions/github";
import * as githubActionCore from "@actions/core";
import chalk from "chalk";

const DEFAULT_BRANCH_NAME = "master";
const CHANGESET_PR_BRANCH_NAME = "bot/prepare-release";

const prepareNewStandardRelease = async () => {
  const octokit = github.getOctokit(process.env.GITHUB_TOKEN);

  const today = new Date();
  const defaultVersion =
    today.toLocaleString("default", { year: "numeric" }) +
    "-" +
    today.toLocaleString("default", { month: "2-digit" }) +
    "-" +
    today.toLocaleString("default", { day: "2-digit" });
  const newVersion = process.env.VERSION ?? defaultVersion;

  
  const changesetFilePath =
    bumpType === 'major'
      ? STANDARD_RELEASE_VERSION_BUMP_CHANGESET_SHORT_PATH
      : ITERATION_RELEASE_VERSION_BUMP_CHANGESET_SHORT_PATH;

  // Push release version bump changeset
  console.log(`Creating release version bump changeset PR...`);
  const packagesToBump = getPackagesToBumpVersion();
  const changesetInfo = generateVersionBumpChangeset(packagesToBump, bumpType);
  const newChangesetContent = Buffer.from(changesetInfo.content).toString(
    "base64"
  );

  try {
    let existingChangesetFile;
    try {
      existingChangesetFile = (
        await octokit.rest.repos.getContent({
          path: changesetFilePath,
          ...github.context.repo,
        })
      ).data;
    } catch (error) {
      existingChangesetFile = undefined;
    }
    // this means there are no changes needed to be committed, hence skip
    if (
      // NOTE: on Github, file's base64 encoded content are chunked into short lines
      // so we want to remove these line breaks for accurate comparison
      existingChangesetFile?.content?.replace(/\n/g, "") === newChangesetContent
    ) {
      githubActionCore.warning(
        `(skipped) Next release version bump changeset already existed`
      );
      return;
    }

    const defaultBranchRef = (
      await octokit.rest.git.getRef({
        ref: `heads/${DEFAULT_BRANCH_NAME}`,
        ...github.context.repo,
      })
    ).data;
    // clean the PR branch just in case
    try {
      await octokit.rest.git.deleteRef({
        ref: `heads/${CHANGESET_PR_BRANCH_NAME}`,
        ...github.context.repo,
      });
    } catch (e) {
      // do nothing
    }
    await octokit.rest.git.createRef({
      // NOTE: this must be the fully qualified reference (e.g. refs/heads/main)
      // See https://docs.github.com/en/rest/reference/git?query=delete+a+reference#create-a-reference
      ref: `refs/heads/${CHANGESET_PR_BRANCH_NAME}`,
      sha: defaultBranchRef.object.sha,
      ...github.context.repo,
    });
    await octokit.rest.repos.createOrUpdateFileContents({
      path: changesetFilePath,
      message: "prepare for new release",
      branch: CHANGESET_PR_BRANCH_NAME,
      content: newChangesetContent,
      // 'sha' is required when we update the file, i.e the changeset file exists but its content is stale
      // See https://docs.github.com/en/rest/reference/repos#create-or-update-file-contents
      sha: existingChangesetFile?.sha,
      ...github.context.repo,
    });
    const changesetPR = (
      await octokit.rest.pulls.create({
        title: `Prepare New ${
          bumpType === "major" ? "Release" : "Iteration Release"
        }`,
        head: CHANGESET_PR_BRANCH_NAME,
        base: DEFAULT_BRANCH_NAME,
        body: `## ⚠️ Merge this before creating another release!\nAdd changeset to bump version for the next release. Learn more about this process [here](https://github.com/finos/legend-studio/blob/master/docs/workflow/release-process.md#standard-releases).`,
        ...github.context.repo,
      })
    ).data;
    console.log(
      chalk.green(
        `\u2713 Created a PR to push release version bump changeset: ${changesetPR.html_url}`
      )
    );
  } catch (error) {
    githubActionCore.error(
      `Failed to create PR for next release version bump changeset. Error:\n${error.message}\n` +
        `Please run \`yarn release:bump major\` and manually commit this changeset.`
    );
    process.exit(1);
  }
};

prepareNewStandardRelease();
