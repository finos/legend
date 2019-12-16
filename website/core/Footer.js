/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language = '') {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${langPart}${doc}`;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">     
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl('user-guide')}>
              Getting Started
            </a>
            <a href={this.docUrl('why-purealloy')}>
              Why PURE/Alloy
            </a>
            <a href={this.docUrl('use-cases')}>
              Use Cases
            </a>
          </div>
          <div>
            <h5>Community</h5>
            <a
              href="https://www.finos.org/"
              target="_blank"
              rel="noreferrer noopener">
              FINOS
            </a>
            <a
              href="https://www.finos.org/press/goldman-announces-pure-alloy-contribution"
              target="_blank"
              rel="noreferrer noopener">
              PURE/Alloy press release
            </a>
            <a
              href="https://www.finos.org/pure-alloy"
              target="_blank"
              rel="noreferrer noopener">
              Join the PURE/Alloy pilot
            </a>
          </div>
          <div>
            <h5>More</h5>
            <div className="social">
              <a
                className="github-button" // part of the https://buttons.github.io/buttons.js script in siteConfig.js
                href={this.props.config.repoUrl}
                data-count-href={`${this.props.config.repoUrl}/stargazers`}
                data-show-count="true"
                data-count-aria-label="# stargazers on GitHub"
                aria-label="Star this project on GitHub">
                {this.props.config.projectName}
              </a>
            </div>
            {this.props.config.twitterUsername && (
              <div className="social">
                <a
                  href={`https://twitter.com/${this.props.config.twitterUsername}`}
                  className="twitter-follow-button">
                  Follow @{this.props.config.twitterUsername}
                </a>
              </div>
            )}
          </div>
        </section>
        <section className="finos finosBanner">
          <a href="https://www.finos.org">
            <img id="finosicon" src={`https://purealloy.finos.org/img/finos_wordmark.svg`} height='75px' alt="FINOS" title="FINOS"/>
            <h2 id="proud">Proud member of the Fintech Open Source Foundation</h2>
          </a>

        </section>
        
        <section className="copyright">{this.props.config.copyright}</section>

      </footer>
    );
  }
}



module.exports = Footer;
