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
      <div className={homeStyles.contentContainer}>
        <p>WE ARE HERE TO SERVE</p>
        <h3>Dry Wall, Acoustical Ceiling, Hardware and General Carpentry Services</h3>
        <div>
          <p>We, at R.C. Acousticals, have spent over two decades in the construction industry in Connecticut in both small and large scale projects delivering high quality services. We are a reliable, professional crew filled with experts in all facets of carpentry, dealing with wood, acoustical, and metal.</p>
        </div>
        <div>
          <p>R.C. Acousticals ensures that you are getting the highest quality product, service, and professionalism.  </p>
        </div>
      </div>
      <div className={homeStyles.contentContainer}>
        <p>Services</p>
      </div>
      <div className={homeStyles.contentContainer}>
        <p>Portfolio</p>
      </div>
      <div className={homeStyles.contentContainer}>
        <p>Map</p>
      </div>
    </Layout>
  );
}

export default Home;