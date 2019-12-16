/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Showcase = require(`${process.cwd()}/core/Showcase.js`);

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl, repoUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {/*siteConfig.title*/}
        <small>{siteConfig.tagline}</small>
      </h2>
      
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
            <div className="inner">
              {/* TODO - set logo here */}
              {/* <img src="img/purealloy-logo-2019.png"></img> */}
              <ProjectTitle siteConfig={siteConfig} />
              <PromoSection>
                <Button href={docUrl('user-guide')}>Get Started</Button>
                <Button href={repoUrl}>GitHub</Button>
              </PromoSection>
            </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {docsUrl, baseUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${docsPart}${langPart}${doc}`;


    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const Features = () => (
      <Block background="white" layout="fourColumn">
        {/* TODO - define features block, see https://github.com/finos/FDC3/blob/master/website/pages/en/index.js#L108 as example */}
        {/* {[ ]} */}
      </Block>
    );

    const SurveyBanner = () => (
      <div className="surveyBanner">
        <div className="CTA-image">
          <a href="https://www.finos.org/pure-alloy" target="_blank">
            {/* TODO - create logo for pilot */}
            {/* <img style={{width:'150px',height:'150px'}} id="purealloy-pilot" src={`${baseUrl}docs/assets/purealloy-pilot.jpeg`} height='300px' alt="PURE/Alloy pilot" title="PURE/Alloy pilot"/> */}
            <p>PURE/Alloy pilot</p>
            </a>
          
        </div>
        <div class="CTA-text">
          <p>Apply to join the PURE/Alloy pilot phase today! You will get access to a "sandbox" instance of Alloy to build shared modeling</p>
          <h3><a href="https://www.finos.org/pure-alloy" target="_blank">Apply Here!</a></h3>
        </div>
      </div>
    );

    const FeatureCallout = () => (
      <div  className="featureShowcaseSection  paddingBottom" style={{textAlign: 'center'}}>
        <h2>Use Cases</h2>
        <MarkdownBlock>{`Document business [use cases](${docUrl('use-cases')}) that drive PURE/Alloy initiative.`}</MarkdownBlock>
      </div>
    );

    const UserShowcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const pinnedUsers = siteConfig.users.filter(user => user.pinned);

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="userShowcase productShowcaseSection paddingTop paddingBottom">
          <h2>Who is Using PURE/Alloy?</h2>
          <p>See below which financial institutions have already joined the PURE/Alloy initiative!</p>
          <Showcase users={pinnedUsers} />
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <SurveyBanner />
        <div className="mainContainer">
          <Features />
          <FeatureCallout />
          <UserShowcase />
        </div>
      </div>
    );
  }
}

module.exports = Index;

 //<FinosBanner />