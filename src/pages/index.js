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
    </Layout>
  );
}

export default Home;