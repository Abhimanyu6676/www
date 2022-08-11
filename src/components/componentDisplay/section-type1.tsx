import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import SectionType1 from "../common/sectionType1"
import { FullScreen } from "../layouts/FullScreen"

type Props = {}

export default (props: Props) => {
  const imgData = useStaticQuery(graphql`
    query {
      gaming: file(
        relativePath: { eq: "homepage/audienceSection/gaming.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 1024, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      gaming_sm: file(
        relativePath: { eq: "homepage/audienceSection/gaming.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 600, layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  `)

  return (
    <FullScreen
      style={{
        backgroundColor: "#00ffff33",
      }}
    >
      <div
        style={{
          margin: "100px 10%",
          backgroundColor: "#ffffff",
        }}
      >
        <SectionType1
          srcSetImgs={{
            img: imgData.gaming,
            img_sm: imgData.gaming_sm,
          }}
          content={{
            heading: "Working from home?",
            text: "Set up Schedules to help keep a routine throughout the day,",
            text2:
              "or connect your lights to apps and receive light notifications when a meeting is coming up, when the weather changes, and more.",
            button: {
              text: "Learn More",
              link: "/pages/work-from-home",
            },
          }}
        />
      </div>
    </FullScreen>
  )
}
