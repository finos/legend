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
        </section>
        <section className="finos finosBanner">
          <div>
            <img id="finosicon" src={`https://alloy.finos.org/img/finos_wordmark.svg`} height='75px' alt="FINOS" title="FINOS"/>
            <div>
              <a class="nav-home" href="/">Alloy Documentation</a><br/>
              <a class="nav-home" href="https://www.finos.org" target="_blank">FINOS website</a><br/>
              <a class="nav-home" href="https://www.finos.org/privacy-policy" target="_blank">FINOS Privacy Policy</a><br/>
            </div>
          </div>
        </section>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
