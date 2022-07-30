import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SectionType1 from "../../../components/common/sectionType1"
import appColors from "../../../styles/appColors"

type Props = {}

export const AudienceSection = (props: Props) => {
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
      interior: file(
        relativePath: { eq: "homepage/audienceSection/interior.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 1024, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      interior_sm: file(
        relativePath: { eq: "homepage/audienceSection/interior.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 600, layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  `)
  return (
    <div
      style={{
        marginTop: "5rem",
      }}
    >
      <SectionType1
        srcSetImgs={{
          img: imgData.gaming,
          img_sm: imgData.gaming_sm,
        }}
        content={{
          heading: "Lighting that suits every game",
          text: "Enhance your gameplay, with lighting that lets your skills thrive. Bold hues to match the game you’re currently into will help you create the fully immersive experience you’ve been waiting for",
          /*  button: {
          text: "Learn More",
          link: "/pages/work-from-home",
        }, */
        }}
      />

      <SectionType1
        config={{
          desktopContentOnLeft: true,
        }}
        srcSetImgs={{
          img: imgData.interior,
          img_sm: imgData.interior_sm,
        }}
        content={{
          heading: "Full color ambience for every occasion",
          text: "Bright your dull space to life by placing a Huelite Lightstrip underneath your couch to create a floating effect. Fill your space with your choice of vibrant colors",
        }}
      />
    </div>
  )
}
