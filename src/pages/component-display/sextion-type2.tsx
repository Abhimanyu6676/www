import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import SectionType2 from "../../components/common/sectionType2"

type Props = {}

export default (props: Props) => {
  const imageData = useStaticQuery(graphql`
    query {
      modes: file(relativePath: { eq: "homepage/featuresSection/modes.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 1024, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  `)

  return (
    <>
      <SectionType2
        img={imageData.integration}
        config={{ roundedCornersOnImgAndButton: true }}
        content={{
          heading: "Music Sync",
          text: "Recreate the dance floor ambiance right in your house with the Huelite smart led strip. This led strip syncs with music and adds that extra element to your party making it the most-happening home party in your neighborhood.",
          button: { text: "Learn More" },
        }}
      />
    </>
  )
}
