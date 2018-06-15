module.exports = {
  siteMetadata: {
    title: `RE64`,
    siteUrl: `https://www.re64.sh`,
    description: `Stuff and things`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `${__dirname}/../docs/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `packages`,
        path: `${__dirname}/../packages/`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-documentationjs`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 786,
              backgroundColor: `#ffffff`
            }
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-smartypants`
        ]
      }
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`
  ]
}
