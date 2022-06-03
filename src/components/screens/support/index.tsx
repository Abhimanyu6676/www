import { graphql, navigate, useStaticQuery } from "gatsby"
import React from "react"
import Img from "gatsby-image"
//@ts-ignore
import * as styles from "./index.module.css"
import globalStyles from "../../../styles/globalStyles"
import { Grid } from "@mui/material"
import { textAlign } from "@mui/system"
import { Subscrible } from "../../common/subscrible"

interface article_i {
  heading: string
  img: any
  link: string
}

type Props = {}
export default (props: Props) => {
  const images = useStaticQuery(graphql`
    query {
      articleImg1: file(relativePath: { eq: "support/shuttle.png" }) {
        childImageSharp {
          fluid(maxWidth: 256, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      articleImg2: file(relativePath: { eq: "support/mobile.png" }) {
        childImageSharp {
          fluid(maxWidth: 256, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      articleImg3: file(relativePath: { eq: "support/integrations.png" }) {
        childImageSharp {
          fluid(maxWidth: 256, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      articleImg4: file(relativePath: { eq: "support/help.png" }) {
        childImageSharp {
          fluid(maxWidth: 256, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      mobileBlogMain: file(relativePath: { eq: "common/blogMain_mobile.png" }) {
        childImageSharp {
          fluid(maxWidth: 479, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      tabletBlogMain: file(relativePath: { eq: "common/blogMain_tablet.png" }) {
        childImageSharp {
          fluid(maxWidth: 767, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      desktopBlogMain: file(
        relativePath: { eq: "common/blogMain_desktop.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1600, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const sources = [
    images.mobileBlogMain.childImageSharp.fluid,
    {
      ...images.desktopBlogMain.childImageSharp.fluid,
      media: `(min-width: 767px)`,
    },
    {
      ...images.tabletBlogMain.childImageSharp.fluid,
      media: `(min-width:469px)`,
    },
  ]

  const articles: article_i[] = [
    {
      heading: "Getting Setup",
      img: images.articleImg1.childImageSharp.fluid,
      link: "/support/getstarted",
    },
    {
      heading: "Exploring HUElite App",
      img: images.articleImg2.childImageSharp.fluid,
      link: "/",
    },
    {
      heading: "Link with other products",
      img: images.articleImg3.childImageSharp.fluid,
      link: "/",
    },
    {
      heading: "FAQ, troubleshoot, enquiry",
      img: images.articleImg4.childImageSharp.fluid,
      link: "/",
    },
  ]

  return (
    <div style={{ marginBottom: 30 }}>
      <div //top image section
        style={{}}
      >
        <Img fluid={sources} style={{ zIndex: 1 }} />
      </div>
      <div // articles Section
      >
        <div //text section
          className={styles.textSection}
        >
          <h1 style={{ textAlign: "center" }}>Find articles by category</h1>
          <p style={{ textAlign: "center" }}>
            Browse manual & guides for getting set up, truobleshoot or report an
            issue, submit requests, or learn tips & tricks on how to use HUElite
            app features
          </p>
        </div>

        <div //articles container
          className={styles.articlesContainer}
          style={{
            position: "relative",
            marginTop: 50,
          }}
        >
          <Grid
            container
            rowSpacing={5}
            columnSpacing={5}
            style={{
              //backgroundColor: "red",
              padding: 0,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {articles.map((item, index) => {
              return (
                <Grid
                  item
                  xs={10}
                  sm={4}
                  style={{
                    //backgroundColor: "green",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <ArticleComp item={item} key={index + "_"} />
                </Grid>
              )
            })}
          </Grid>
        </div>
      </div>
      <Subscrible style={{ marginTop: 50 }} />
    </div>
  )
}

const ArticleComp = (props: { item: article_i }) => {
  return (
    <button
      onClick={() => {
        navigate(props.item.link)
      }}
      style={{
        width: 200,
        height: 200,
        borderRadius: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        ...globalStyles.shadowLight,
      }}
    >
      <div
        style={{
          //backgroundColor: "red",
          //flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 30,
        }}
      >
        <Img fluid={props.item.img} style={{ width: 60 }} />
      </div>
      <div>
        <h5 style={{ textAlign: "center" }}>{props.item.heading}</h5>
      </div>
    </button>
  )
}
