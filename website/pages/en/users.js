/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;

const Showcase = require(`${process.cwd()}/core/Showcase.js`);

class Users extends React.Component {
  render() {
    const {config: siteConfig} = this.props;
    if ((siteConfig.users || []).length === 0) {
      return null;
    }

    const editUrl = `${siteConfig.repoUrl}/edit/master/website/data/users.json`;

    const membersToShowcase = siteConfig.users.filter(
      user => user.isMember,
    );
    const othersToShowcase = siteConfig.users.filter(user => !user.isMember);

    const showcase = siteConfig.users.map(user => (
      <a href={user.infoLink} key={user.infoLink}>
        <img src={user.image} alt={user.caption} title={user.caption} />
      </a>
    ));

    return (
      <div className="mainContainer">
        <Container>
          <div className="showcaseSection">
            <div className="prose">
              <h1>Who is Using PURE/Alloy?</h1>
              <p>PURE/Alloy has several industry-leading <a href="https://www.finos.org/become-a-member">member participants.</a></p>
            </div>
            <Showcase users={membersToShowcase} />
            <div className="prose paddingTop">
              <p>PURE/Alloy is also used by financial organizations of all sizes.</p>
            </div>
            <Showcase users={othersToShowcase} />
            <p>Are you using PURE/Alloy?</p>
            <a href={editUrl} className="button">
              Add your company
            </a>
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Users;
