import { navigate, Link, graphql, useStaticQuery } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
//@ts-ignore
import { MDXProvider } from "@mdx-js/react"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/layouts/HeaderFooterCover"
import { ContactUs } from "../components/common/contactUs"
import { NoteBox } from "../components/common/NoteBox"

const generalBlogPostTemplate = ({ data }) => {
  const { frontmatter, body } = data.mdx

  const sources = [
    data.mobileBlogImage.childImageSharp.gatsbyImageData,
    {
      ...data.desktopBlogImage.childImageSharp.gatsbyImageData,
      media: `(min-width: 576px)`,
    },
  ]

  return (
    <Layout>
      <div style={{ width: "100%", margin: 0, padding: 0 }}>
        <div // hero image container
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <GatsbyImage
            image={data.desktopBlogImage.childImageSharp.gatsbyImageData}
            style={{ width: "100%" }}
            alt="HUElite"
          />
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
            <h5 style={{ margin: 0, color: "#ffffff" }}>
              {frontmatter.auther}
            </h5>
            <h6 style={{ margin: 0, color: "#ffffff" }}>{frontmatter.date}</h6>
          </div>
        </div>

        <div // content contaienr
          style={{ margin: "0px 3vw" }}
        >
          <div // blog title
          >
            <h1 style={{ margin: "30px 0px" }}>{frontmatter.title}</h1>
          </div>

          <div // mdx container
          >
            <MDXProvider
              components={{
                step: (props: any) => (
                  <strong
                    style={{
                      fontSize: "1.1em",
                      fontWeight: "bold",
                      textDecoration: "underline",
                    }}
                    {...props}
                  />
                ),
                glink: (props: { children?: any; link?: string }) => {
                  return (
                    <button
                      {...props}
                      onClick={() => {
                        if (props.link) navigate(props.link)
                      }}
                    />
                  )
                },
                Link,
                NoteBox,
              }}
            >
              <MDXRenderer>{body}</MDXRenderer>
            </MDXProvider>
          </div>
        </div>
      </div>
      <ContactUs style={{ marginBottom: 50 }} />
    </Layout>
  )
}

export default generalBlogPostTemplate

export const query = graphql`
  query PostsBySlug(
    $slug: String!
    $banner_img: String!
    $banner_img_mob: String
    $relatedTopics: [String]
  ) {
    mdx(slug: { eq: $slug }) {
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
        gatsbyImageData(width: 700, quality: 100, layout: CONSTRAINED)
      }
    }
    desktopBlogImage: file(relativePath: { eq: $banner_img }) {
      childImageSharp {
        gatsbyImageData(quality: 100, layout: FULL_WIDTH)
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
