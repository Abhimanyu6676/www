const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

const devPages = [
  {
    path: `/component-display/section-type1`,
    component: require.resolve(
      `./src/components/componentDisplay/section-type1.tsx`
    ),
  },
  {
    path: `/component-display/section-type2`,
    component: require.resolve(
      `./src/components/componentDisplay/section-type2.tsx`
    ),
  },
]

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve("src/templates/generalBlogPost.tsx")
  console.log("onCreatePage environment :: " + process.env.NODE_ENV)

  if (process.env.NODE_ENV == "development") {
    devPages.forEach(({ path, component }) => {
      createPage({ path, component })
    })
  }
  createPage({
    path: `/server-test`,
    component: require.resolve(`./src/screens/serverTest.tsx`),
  })

  return graphql(`
    {
      support: allMdx(
        filter: { frontmatter: { mdxTemplateType: { eq: "support" } } }
      ) {
        nodes {
          frontmatter {
            title
            banner_img
            uuid
            related_uuid
            auther
            auther_link
            date
          }
          slug
        }
      }

      screenPages: allFile(filter: { base: { regex: "/(.page)/g" } }) {
        nodes {
          name
          absolutePath
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }
    console.log(
      "########################## creating pages now ##########################"
    )

    console.log("\n")
    console.log("\n")

    // #region [color1]
    const screenPages = result.data.screenPages.nodes
    screenPages.forEach(page => {
      let ti = page.name.indexOf(".page") + 6
      let _p = page.name.substring(ti)

      if (_p.length && _p.length > 0) {
        if (_p == "homepage") _p = "/"
        else _p = "/" + _p
        _p = _p.replaceAll(".", "/")
        console.log("#### creating screePage - ", _p)
        createPage({
          path: _p,
          component: require.resolve(page.absolutePath),
        })
      }
    })
    //#endregion

    console.log("\n")
    console.log("\n")
    console.log("\n")
    console.log("\n")

    // #region [color2]
    // create page for each support md file
    const blogPosts = result.data.support.nodes
    blogPosts.forEach(post => {
      console.log("####---- creating blogPage " + post.slug)
      createPage({
        path: post.slug,
        component: blogPostTemplate,
        context: {
          slug: post.slug,
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
    //#endregion

    console.log("\n")
    console.log("\n")
  })
}
