const { useStaticQuery } = require("gatsby");
const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve('src/templates/generalBlogPost.tsx');
  const announcementTemplate = path.resolve('src/templates/announcement.template.tsx');


  return graphql(`
    {
      faq: allMdx(filter: {frontmatter: {mdxTemplateType: {eq: "faq"}}}) {
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
      
      support:  allMdx(filter: {frontmatter: {mdxTemplateType: {eq: "support"}}}) {
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
      throw result.errors;
    }

    const blogPosts = result.data.support.nodes;
    const faqPosts = result.data.faq.nodes;

    // create page for each support md file
    blogPosts.forEach(post => {
      console.log("()()-------------()()" + JSON.stringify(post))
      createPage({
        path: post.fields.slug,
        component: blogPostTemplate,
        context: {
          slug: post.fields.slug,
          banner_img: post.frontmatter.banner_img,
          banner_img_mob: post.frontmatter.banner_img_mob ? post.frontmatter.banner_img_mob : post.frontmatter.banner_img,
          uuid: post.frontmatter.uuid,
          related_uuid: post.frontmatter.related_uuid,
          title: post.frontmatter.title,
          date: post.frontmatter.date,
          auther: post.frontmatter.auther,
          auther_link: post.frontmatter.auther_link,
          relatedTopics: (post.frontmatter && post.frontmatter.related_uuid && post.frontmatter.related_uuid.length > 0) ? post.frontmatter.related_uuid.split("/") : [""]
        },
      })
    });

    // create page for each faq md file
    faqPosts.forEach(post => {
      createPage({
        path: post.fields.slug,
        component: announcementTemplate,
        context: {
          slug: post.fields.slug,
          banner_img: post.frontmatter.banner_img,
          banner_img_mob: post.frontmatter.banner_img_mob ? post.frontmatter.banner_img_mob : post.frontmatter.banner_img,
          uuid: post.frontmatter.uuid,
          related_uuid: post.frontmatter.related_uuid,
          title: post.frontmatter.title,
          date: post.frontmatter.date,
          auther: post.frontmatter.auther,
          auther_link: post.frontmatter.auther_link,
          relatedTopics: (post.frontmatter && post.frontmatter.related_uuid && post.frontmatter.related_uuid.length > 0) ? post.frontmatter.related_uuid.split("/") : [""]
        },
      })
    });



  });


};

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
};