module.exports = {
    siteMetadata: {
      title: `web`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
      "gatsby-plugin-material-ui",
      "gatsby-plugin-sharp",
      "gatsby-transformer-sharp",
      "gatsby-plugin-use-query-params",
      `gatsby-plugin-react-helmet`,
    /* "gatsby-plugin-image", */
      { //gatsby-plugin-mdx
        resolve: `gatsby-plugin-mdx`,
        options: {
          extensions: [`.mdx`, `.md`],
           gatsbyRemarkPlugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 1024,
              },
            },
          ], 
        },
      },
      { //gatsby-source-filesystem
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `blog`,
          path: `${__dirname}/blog`,
        },
      },
      { //gatsby-source-filesystem
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images`,
        },
      },
      { //gatsby-plugin-google-fonts
        resolve: `gatsby-plugin-google-fonts`,
        options: {
          fonts: [
            `Ubuntu\:300,400,400i,500,700,700i`,
            `Inter\:300,400,400i,500,700,700i`,
            `Nunito Sans\:300,400,400i,600,700,700i`,
          ],
          display: 'swap'
        }
      }
    ]
}