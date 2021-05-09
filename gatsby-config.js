module.exports = {
  siteMetadata: {
    title: 'R.C. Acoustics',
    author: 'Edgar J San Martin',
    description: 'Your go to solution for all your acoustical problems. 20 Years of excellence. We take pride in our impact.',
    // url: ''
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-remove-serviceworker`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `R.C. Acoustics`,
        short_name: `R.C. Acoustics`,
        start_url: `/`,
        icon: `src/assets/images/rcLogoFavicon.png`
      },
    },
  ],
}
