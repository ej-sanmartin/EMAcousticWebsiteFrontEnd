import React from "react";

import Layout from '../components/layout';

import { StaticImage } from 'gatsby-plugin-image';

const Home = () => {
  return (
    <Layout>
      <StaticImage
        src='../assets/images/work_makes_better_futures.jpg'
        alt='Dramatic Construction Worker'
      />
    </Layout>
  );
}

export default Home;