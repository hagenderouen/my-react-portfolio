module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `downloads`,
        path: `${__dirname}/src/downloads/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hagen DeRouen Portfolio`,
        short_name: `Hagen Portfolio`,
        start_url: `/`,
        background_color: `#120f17`,
        theme_color: `#fc4a1a`,
        display: `standalone`,
        icon: 'src/images/favicon.png',
      },
    },
  ],
};
