const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: `Bootpack Digital, LLC`,
    description: `Bootpack Digital is a custom web and software developer in Salt Lake, UT`,
    author: `@bootpack`,
    siteUrl: `https://bootpackdigital.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bootpack Digital`,
        short_name: `Bootpack`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4299E1`,
        display: `minimal-ui`,
        icon: `src/images/bootpack-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: `GTM-KCZ4PZC`,
        includeInDevelopment: false,
        defaultDataLayer: { platform: `gatsby` },
      },
    },
    {
      resolve: `gatsby-plugin-preconnect`,
      options: {
        domains: [
          `https://www.google-analytics.com`,
          `https://www.googletagmanager.com`,
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/style.css`],
      },
    },
    `gatsby-plugin-offline`,
  ],
};
