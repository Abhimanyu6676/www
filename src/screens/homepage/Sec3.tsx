import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SectionType1 from "../../components/common/sectionType1"

export const Sec3 = () => {
  const { heroImg, smallHeroImg } = useStaticQuery(graphql`
    query {
      heroImg: file(
        relativePath: { eq: "homepage/newSec3/homepage_sec3.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 1024, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      smallHeroImg: file(
        relativePath: { eq: "homepage/newSec3/homepage_sec3_sm.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 600, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  `)
  return (
    <SectionType1
      config={{
        desktopRightAligned: true,
      }}
      srcSetImgs={{
        img: heroImg,
        img_sm: smallHeroImg,
      }}
      content={{
        heading: "Working from home?",
        text: "Set up Schedules to help keep a routine throughout the day,",
        text2:
          "or connect your lights to apps and receive light notifications when a meeting is coming up, when the weather changes, and more.",
        /*  button: {
          text: "Learn More",
          link: "/pages/work-from-home",
        }, */
      }}
    />
  )
}
