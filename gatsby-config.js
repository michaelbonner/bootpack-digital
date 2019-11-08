module.exports = {
  siteMetadata: {
    title: `Bootpack Digital, LLC`,
    description: `Bootpack Digital provides quality experience for PEOPLE`,
    author: `@bootpack`,
    siteUrl: `https://bootpackdigital.com`
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
        icon: `src/images/bootpack-icon.png`
      }
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: `GTM-KCZ4PZC`,
        includeInDevelopment: false,
        defaultDataLayer: { platform: `gatsby` }
      }
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/style.css`]
      }
    },
    `gatsby-plugin-offline`
  ]
};
