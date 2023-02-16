import React from "react";
import { useThemeConfig } from "@docusaurus/theme-common";
function Footer() {
  const { footer } = useThemeConfig();
  if (!footer) {
    return null;
  }
  const { copyright, links, logo, style } = footer;
  return (
    <footer className="nav-footer" id="footer">
      <section className="sitemap">
        <a href={logo.href} className="nav-home">
          <img src={logo.src} alt={logo.alt} />
        </a>
      </section>
      <section className="finos finosBanner">
        <a href="https://www.finos.org">
          <img
            id="finosicon"
            src={`https://legend.finos.org/img/finos_wordmark.svg`}
            height="75px"
            alt="FINOS"
            title="FINOS"
          />
        </a>
      </section>
      <section className="privacy finosBanner">
        <a href="https://www.finos.org/privacy-policy" target="_blank">
          Privacy Policy
        </a>
      </section>
    </footer>
  );
}
export default React.memo(Footer);
