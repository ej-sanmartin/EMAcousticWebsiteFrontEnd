import React, { useEffect } from "react";
import { graphql, useStaticQuery, Link } from 'gatsby';
import { isMobile, isAndroid } from 'react-device-detect';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { createLinkProps } from '../utilities/helpers.js';
import sal from 'sal.js';
import Layout from '../components/layout';
import ContactForm from '../components/contactForm';
import ServiceCard from '../components/cards/serviceCard';
import PortfolioCard from '../components/cards/portfolioCard';
import { aboutBlurb, serviceCardEntries, messagesClassNames } from '../assets/content/text.js';
import * as homeStyles from '../styles/home.module.scss';

const Home = () => {
  let iterator = 0;

  useEffect(() => {
    document.querySelector('body').scrollTo(0, 0);

    if(isMobile) sal({ disabled: true });

    // in case background image goes blank, just make the text not white
    if(isAndroid && messagesClassNames){
      let targetElement = document.querySelector("div").querySelector("div").querySelector("div").querySelector("div");
      let openingRemarks = targetElement.querySelectorAll(".home-module--opening-message-container--2NAu_");
      openingRemarks.forEach((message) => {
        message.querySelector(`.${messagesClassNames[iterator]}`).style.color = "gray";
        iterator++;
        message.querySelector(`.${messagesClassNames[iterator]}`).style.color = "gray";
      });

      targetElement.querySelector(".home-module--parallax--2Mgdj").style.backgroundAttachment = "scroll";
      iterator = 0;
    } else { console.log("messageClassNames is most likely not set . Developers, get your act together!"); }
  }, []);

  const data = useStaticQuery(graphql`
    query {
      allContentfulPortfolioProfile ( sort: { fields: projectData, order: DESC } ) {
        edges {
          node {
            projectName
            location
            slug
            projectHeaderPhoto {
              fluid(maxWidth: 400) {
                src
              }
              title
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <div className={`${homeStyles.openingImage} ${homeStyles.parallax}`}></div>
      <div className={homeStyles.openingMessageContainer}>
        <h2 className={homeStyles.firstOpeningPhrase}>Over 20 years of excellence</h2>
        <h2 className={homeStyles.secondOpeningPhrase}>We take pride in our impact</h2>
        <a className={homeStyles.ctaButton} onClick={() => scrollTo('#contact')}>
          <Link
            as="a"
            to={createLinkProps('/#contact')}
          >
          Let's Get Started
          </Link>
        </a>
      </div>
      <div id="about"></div>
      <div
        data-sal="slide-up"
        data-sal-duration="600"
        data-sal-easing="ease"
        className={`${homeStyles.aboutContainer} ${homeStyles.blurbLayout}`}
      >
        <div className={homeStyles.subHeadingTextStyles}>
          <h4>WE ARE HERE TO SERVE</h4>
          <h3>Acoustical Ceiling, Hardware, and General Carpentry Services</h3>
          <hr className={homeStyles.decorativeLine}/>
        </div>
        <div>
          <p>{aboutBlurb[0]}</p>
        </div>
        <div>
          <p className={homeStyles.motto}>{aboutBlurb[1]}</p>
        </div>
      </div>
      <div
        data-sal="slide-up"
        data-sal-duration="600"
        data-sal-easing="ease"
        className={homeStyles.servicesContainer}
      >
        <div className={homeStyles.serviceCardsLayout}>
          {serviceCardEntries.map((service) => { return (
              <ServiceCard service={service} />
            );
          })}
        </div>
      </div>
      <div id="portfolio"></div>
      <div
        data-sal="slide-up"
        data-sal-duration="600"
        data-sal-easing="ease-out"
      >
        <div className={homeStyles.portfolioHeadingContainer}>
          <div>
            <h3>Portfolio</h3>
            <hr />
            <p>Recent Works</p> 
          </div>
        </div>
        <div className={homeStyles.portfolioGallery}>
        {data.allContentfulPortfolioProfile.edges.map((edge) => {
          return (
            <PortfolioCard edge={edge} />
          );
        })}
        </div>
      </div>
      <div id="contact"></div>
      <div
        data-sal="slide-up"
        data-sal-duration="400"
        data-sal-easing="ease-out"
      >
        <div className={homeStyles.headingContainer}>
          <h3 className={homeStyles.heading}>WHERE TO FIND US</h3>
        </div>
        <div className={homeStyles.contentContainer}>
          <ContactForm className={homeStyles.formPlacement} />
          <iframe 
            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GATSBY_GOOGLE_MAPS_EMBED_API_TOKEN}&q=${process.env.GATSBY_GOOGLE_MAPS_PLACE_ID}&center=41.73408,-72.62559&zoom=18`}
            title='Google Maps Location'
            width='1000'
            height='400'
            loading="lazy"
            allowFullScreen
            className={homeStyles.map}>
          </iframe>
        </div>
      </div>
    </Layout>
  );
}

export default Home;