import React from "react";
import { graphql, useStaticQuery, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import ContactForm from '../components/contactForm';

import { aboutBlurb, serviceCardEntries } from '../assets/content/text.js';

import * as homeStyles from '../styles/home.module.scss';

const Home = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPortfolioProfile ( sort: { fields: projectData, order: DESC } ) {
        edges {
          node {
            projectName
            location
            slug
            projectHeaderPhoto {
              gatsbyImageData(
                width: 400
                placeholder: BLURRED
                formats: [AUTO, PNG, WEBP]
              )
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
      <div id="top" className={homeStyles.openingMessageContainer}>
        <h2 className={homeStyles.firstOpeningPhrase}>Over 20 years of excellence</h2>
        <h2 className={homeStyles.secondOpeningPhrase}>We take pride in our impact</h2>
      </div>
      <div id="about" className={`${homeStyles.aboutContainer} ${homeStyles.blurbLayout}`}>
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
      <div className={homeStyles.servicesContainer}>
        <div className={homeStyles.serviceCardsLayout}>

          {serviceCardEntries.map((service) => {
            return (
              <div className={homeStyles.serviceCard}>
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className={homeStyles.serviceCardImage}
                />
                <h5>{service.service}</h5>
                <p>{service.description}</p>
              </div>
            );
          })}

        </div>
      </div>
      <div id="portfolio" className={homeStyles.portfolioHeadingContainer}>
        <div>
          <h3>Portfolio</h3>
          <hr />
          <p>Recent Works</p> 
        </div>
      </div>
      <div className={homeStyles.portfolioGallery}>

      {data.allContentfulPortfolioProfile.edges.map((edge) => {
        let image = getImage(edge.node.projectHeaderPhoto.gatsbyImageData);

        return (
          <Link className={homeStyles.portfolioItem} to={`/portfolio/${edge.node.slug}`}>
            <GatsbyImage
              image={image}
              className={homeStyles.portfolioItemImage}
              alt={edge.node.projectHeaderPhoto.title}
            />
            <div className={homeStyles.portfolioItemImageOverlay}>
              <h4 className={homeStyles.portfolioItemTitle}>{edge.node.projectName}</h4>
              <p className={homeStyles.portfolioItemLocation}>{edge.node.location}</p>
            </div>
          </Link>
        );
      })}

      </div>
      <div id="contact" className={homeStyles.headingContainer}>
        <h3 className={homeStyles.heading}>Where To Find Us</h3>
      </div>
      <ContactForm />
      <div className={homeStyles.contentContainer}>
        <iframe 
          src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAPS_EMBED_API_TOKEN}&q=${process.env.GOOGLE_MAPS_PLACE_ID}&center=41.73408,-72.62559&zoom=18`}
          title='Google Maps Location'
          width='1000'
          height='800'
          loading="lazy"
          allowFullScreen
          className={homeStyles.map}>
        </iframe>
      </div>
    </Layout>
  );
}

export default Home;