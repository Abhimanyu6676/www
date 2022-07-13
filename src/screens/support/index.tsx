import { Grid } from "@mui/material"
import { graphql, navigate, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { Subscribe } from "../../components/common/subscribe"
import globalStyles from "../../styles/globalStyles"
import * as styles from "./index.module.css"

interface article_i {
  heading: string
  img: any
  link: string
}

type Props = {}
export default (props: Props) => {
  const images = useStaticQuery(graphql`
    {
      articleImg1: file(relativePath: { eq: "support/shuttle.png" }) {
        childImageSharp {
          gatsbyImageData(width: 256, quality: 100, layout: CONSTRAINED)
        }
      }
      articleImg2: file(relativePath: { eq: "support/mobile.png" }) {
        childImageSharp {
          gatsbyImageData(width: 256, quality: 100, layout: CONSTRAINED)
        }
      }
      articleImg3: file(relativePath: { eq: "support/integrations.png" }) {
        childImageSharp {
          gatsbyImageData(width: 256, quality: 100, layout: CONSTRAINED)
        }
      }
      articleImg4: file(relativePath: { eq: "support/help.png" }) {
        childImageSharp {
          gatsbyImageData(width: 256, quality: 100, layout: CONSTRAINED)
        }
      }
      mobileBlogMain: file(relativePath: { eq: "common/blogMain_mobile.png" }) {
        childImageSharp {
          gatsbyImageData(width: 479, quality: 100, layout: CONSTRAINED)
        }
      }
      tabletBlogMain: file(relativePath: { eq: "common/blogMain_tablet.png" }) {
        childImageSharp {
          gatsbyImageData(width: 767, quality: 100, layout: CONSTRAINED)
        }
      }
      desktopBlogMain: file(
        relativePath: { eq: "common/blogMain_desktop.png" }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
    }
  `)

  const sources = [
    images.mobileBlogMain.childImageSharp.gatsbyImageData,
    {
      ...images.desktopBlogMain.childImageSharp.gatsbyImageData,
      media: `(min-width: 767px)`,
    },
    {
      ...images.tabletBlogMain.childImageSharp.gatsbyImageData,
      media: `(min-width:469px)`,
    },
  ]

  const articles: article_i[] = [
    {
      heading: "Getting Setup",
      img: images.articleImg1.childImageSharp.gatsbyImageData,
      link: "/support/getstarted",
    },
    {
      heading: "Exploring HUElite App",
      img: images.articleImg2.childImageSharp.gatsbyImageData,
      link: "/",
    },
    {
      heading: "Link with other products",
      img: images.articleImg3.childImageSharp.gatsbyImageData,
      link: "/",
    },
    {
      heading: "FAQ, troubleshoot, enquiry",
      img: images.articleImg4.childImageSharp.gatsbyImageData,
      link: "/",
    },
  ]

  return (
    <div style={{ marginBottom: 30 }}>
      <div //top image section
        style={{}}
      >
        <GatsbyImage
          image={images.desktopBlogMain.childImageSharp.gatsbyImageDataources}
          style={{ zIndex: 1 }}
          alt="HUElite"
        />
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
      <Subscribe style={{ marginTop: 50 }} />
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
        <GatsbyImage
          image={props.item.img}
          style={{ width: 60 }}
          alt="HUElite"
        />
      </div>
      <div>
        <h5 style={{ textAlign: "center" }}>{props.item.heading}</h5>
      </div>
    </button>
  )
}
