import React from "react";

import Layout from '../components/layout';

import { StaticImage } from 'gatsby-plugin-image';

import * as homeStyles from '../styles/home.module.scss';

const Home = () => {
  return (
    <Layout>
      <StaticImage
        src='../assets/images/work_makes_better_futures.jpg'
        alt='Dramatic Construction Worker'
        className={homeStyles.openingImage}
      />
      <div className={homeStyles.openingMessageContainer}>
        <h2 className={homeStyles.firstOpeningPhrase}>Over 20 years of excellence</h2>
        <h2 className={homeStyles.secondOpeningPhrase}>We take pride in our impact</h2>
      </div>
      <div className={`${homeStyles.aboutContainer} ${homeStyles.blurbLayout}`}>
        <div className={homeStyles.subHeadingTextStyles}>
          <h4>WE ARE HERE TO SERVE</h4>
          <h3>Acoustical Ceiling, Hardware, and General Carpentry Services</h3>
          <hr className={homeStyles.decorativeLine}/>
        </div>
        <div>
          <p>We, at R.C. Acousticals, have spent over two decades in the construction industry in Connecticut in both small and large scale projects delivering high quality services. We are a reliable, professional crew filled with experts in all facets of carpentry, dealing with wood, acoustical, and metal.</p>
        </div>
        <div>
          <p className={homeStyles.motto}>R.C. Acousticals ensures that you are getting the highest quality product, service, and professionalism.</p>
        </div>
      </div>
      <div className={homeStyles.servicesContainer}>
        <div className={homeStyles.serviceCardsLayout}>
          <div className={homeStyles.serviceCard}>
            <StaticImage />
            <h5>Name</h5>
            <p>Description</p>
          </div>
        </div>
      </div>
      <div className={homeStyles.portfolioHeadingContainer}>
        <div>
          <h3>Portfolio</h3>
          <hr />
          <p>Recent Works</p> 
        </div>
      </div>
      <div className={homeStyles.portfolioGallery}>
        <div className={homeStyles.portfolioItem}>
          <p>Item 1</p>
        </div>
        <div className={homeStyles.portfolioItemTwo}>
          <p>Item 2</p>
        </div>
        <div className={homeStyles.portfolioItem}>
          <p>Item 1</p>
        </div>
        <div className={homeStyles.portfolioItemTwo}>
          <p>Item 2</p>
        </div>
        <div className={homeStyles.portfolioItem}>
          <p>Item 1</p>
        </div>
        <div className={homeStyles.portfolioItemTwo}>
          <p>Item 2</p>
        </div>
      </div>
      <div className={homeStyles.headingContainer}>
        <h3 className={homeStyles.heading}>Where To Find Us</h3>
      </div>
      <div className={homeStyles.contentContainer}>
        <iframe 
          src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAPS_EMBED_API_TOKEN}&q=${process.env.GOOGLE_MAPS_PLACE_ID}&center=41.73408,-72.62559&zoom=18`}
          title='Google Maps Location'
          width='1000'
          height='600'
          loading="lazy"
          allowFullScreen
          className={homeStyles.map}>
        </iframe>
      </div>
    </Layout>
  );
}

export default Home;