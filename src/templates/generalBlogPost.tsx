import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import Img from "gatsby-image"
import React from "react"
//@ts-ignore
import * as styles from "./generalBlogPost.module.css"

const generalBlogPostTemplate = ({ data }) => {
  const { frontmatter, body } = data.mdx

  const sources = [
    data.mobileBlogImage.childImageSharp.fluid,
    {
      ...data.desktopBlogImage.childImageSharp.fluid,
      media: `(min-width: 576px)`,
    },
  ]

  return (
    <div style={{ width: "100%", margin: 0, padding: 0 }}>
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Img style={{ width: "100%" }} fluid={sources} />
        <div
          style={{
            position: "absolute",
            left: 0,
            bottom: 0,
            width: "94%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "0px 2%",
            zIndex: 2,
          }}
        >
          <h5 style={{ margin: 0, color: "#ffffff" }}>{frontmatter.auther}</h5>
          <h6 style={{ margin: 0, color: "#ffffff" }}>{frontmatter.date}</h6>
        </div>
      </div>

      <div style={{ padding: "0px 3%" }}>
        <h1 style={{}}>{frontmatter.title}</h1>
      </div>

      <div style={{ padding: "0px 3%" }}>
        <MDXProvider
          components={{
            step: props => (
              <strong
                style={{
                  fontSize: "1.1em",
                  fontWeight: "bold",
                  textDecoration: "underline",
                }}
                {...props}
              />
            ),
            "h4.inlineCode": props => (
              <code
                style={{
                  color: "#EC7063",
                  border: "solid 1px grey",
                }}
                {...props}
              />
            ),
            note: props => (
              <div
                style={{
                  backgroundColor: "#F7DC6F",
                  padding: "5px 5px",
                  borderRadius: 5,
                  margin: "5%",
                  borderLeftColor: "#F39C12",
                  borderLeftWidth: 5,
                  borderLeftStyle: "solid",
                }}
              >
                <p
                  style={{
                    margin: "0px 10px",
                    color: "#E74C3C",
                    marginBottom: 20,
                    fontFamily: "monospace",
                  }}
                  {...props}
                />
              </div>
            ),
          }}
        >
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      </div>
    </div>
  )
}

export default generalBlogPostTemplate

export const query = graphql`
  query PostsBySlug(
    $slug: String!
    $banner_img: String!
    $banner_img_mob: String!
    $relatedTopics: [String]
  ) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "YYYY MMMM DD")
        auther
        banner_img
        uuid
        absoluteHeading
        related_uuid
        warningText
      }
    }

    mobileBlogImage: file(relativePath: { eq: $banner_img_mob }) {
      childImageSharp {
        fluid(maxWidth: 700, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    desktopBlogImage: file(relativePath: { eq: $banner_img }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    relatedPost: allMdx(
      filter: { frontmatter: { uuid: { in: $relatedTopics } } }
    ) {
      nodes {
        frontmatter {
          date
          banner_img
          related_uuid
          uuid
          title
          auther_link
          auther
          main_img
        }
        excerpt(pruneLength: 50)
      }
    }
  }
`
