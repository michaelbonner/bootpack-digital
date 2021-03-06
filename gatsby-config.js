const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: `Bootpack Digital, LLC`,
    description: `We build websites, mobile applications, and web software. We want to help you turn your ideas into realities. We understand how to build quality software, and we understand what it takes for a business to succeed.`,
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
        theme_color: `#005D8F`,
        display: `minimal-ui`,
        icon: `src/images/bootpack-icon.png`,
        icon_options: {
          purpose: `any maskable`,
        },
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
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /animated-images/,
        },
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
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-postcss`,
  ],
};
