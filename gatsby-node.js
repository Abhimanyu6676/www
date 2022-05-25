const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {

    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve("src/templates/generalBlogPost.tsx")
  //console.log("onCreatePage :: " + JSON.stringify(actions))

  return graphql(`
    {
      support: allMdx(
        filter: { frontmatter: { mdxTemplateType: { eq: "support" } } }
      ) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
            banner_img
            uuid
            related_uuid
            auther
            auther_link
            date
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const blogPosts = result.data.support.nodes

    // create page for each support md file
    blogPosts.forEach(post => {
      console.log("()()-------------()()" + JSON.stringify(post))
      createPage({
        path: post.fields.slug,
        component: blogPostTemplate,
        context: {
          slug: post.fields.slug,
          banner_img: post.frontmatter.banner_img,
          banner_img_mob: post.frontmatter.banner_img_mob
            ? post.frontmatter.banner_img_mob
            : post.frontmatter.banner_img,
          uuid: post.frontmatter.uuid,
          related_uuid: post.frontmatter.related_uuid,
          title: post.frontmatter.title,
          date: post.frontmatter.date,
          auther: post.frontmatter.auther,
          auther_link: post.frontmatter.auther_link,
          relatedTopics:
            post.frontmatter &&
            post.frontmatter.related_uuid &&
            post.frontmatter.related_uuid.length > 0
              ? post.frontmatter.related_uuid.split("/")
              : [""],
        },
      })
    })
  })
}
