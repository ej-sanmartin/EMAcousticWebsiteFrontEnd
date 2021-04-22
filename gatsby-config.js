module.exports = {
  siteMetadata: {
    title: 'R.C. Acoustics',
    author: 'Edgar J San Martin'
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
}
