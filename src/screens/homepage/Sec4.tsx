import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import SectionType1 from "../../components/common/sectionType1"
import appColors from "../../styles/appColors"

export const Sec4 = () => {
  const { heroImg, smallHeroImg } = useStaticQuery(graphql`
    query {
      heroImg: file(relativePath: { eq: "homepage/sec4/homepage_sec4.png" }) {
        childImageSharp {
          gatsbyImageData(width: 1024, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      smallHeroImg: file(
        relativePath: { eq: "homepage/sec4/homepage_sec4_sm.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 600, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  `)
  return (
    <SectionType1
      srcSetImgs={{
        img: heroImg,
        img_sm: smallHeroImg,
      }}
      contentChild={() => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <h1 style={{ margin: 0 }}>Sit back and relax.</h1>
            <h4
              style={{
                margin: 0,
                backgroundColor: appColors.backgrounds.greyHard,
                padding: "3px 10px",
                borderRadius: 50,
              }}
            >
              perfect TV lightning
            </h4>
            <p style={{ marginTop: 20 }}>
              HUElite lights are perfect for an evening in with a marathon
              session of Stranger Things.
            </p>
            <p style={{ marginTop: 15 }}>
              It's all about personal oasis, and voice control for the lazy.
            </p>
            {/*  <Link
              to="/pages/tv-lighting"
              style={{
                backgroundColor: appColors.black_1,
                height: 50,
                width: 200,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "0px 10px",
                marginTop: 30,
              }}
            >
              <h3 style={{ color: "#fff" }}>Learn More</h3>
            </Link> */}
          </div>
        )
      }}
    />
  )
}
