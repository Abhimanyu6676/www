module.exports = {
    siteMetadata: {
      title: `HUElite`,
      siteUrl: `https://www.huelite.in/`,
    },
    plugins: [
      "gatsby-plugin-use-query-params",
      "gatsby-plugin-react-helmet",
      { /* gatsby-plugin-sharp */
        resolve: `gatsby-plugin-sharp`,
        options: {
          defaults: {
            formats: [`auto`, `webp`],
            backgroundColor: `transparent`,
            placeholder: `none`,
          }
        }
      },
      "gatsby-transformer-sharp",
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
      "gatsby-plugin-image",
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
      },
      "gatsby-plugin-sass",
      { /* gatsby-plugin-purgecss */
        resolve: "gatsby-plugin-purgecss",
        options: {
          printRejected: true, // Print removed selectors and processed file names
          // develop: true, // Enable while using `gatsby develop`
          // tailwind: true, // Enable tailwindcss support
          // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
          // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
          purgeCSSOptions: {
            // https://purgecss.com/configuration.html#options
            // safelist: ['safelist'], // Don't remove this selector
          },
          // More options defined here https://purgecss.com/configuration.html#options
        },
      },
      "gatsby-plugin-material-ui",
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
    ]
}