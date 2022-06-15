import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import SectionType2 from "../../components/common/sectionType2"

type Props = {}

export const Sec5 = (props: Props) => {
  const imageData = useStaticQuery(graphql`
    query {
      main: file(relativePath: { eq: "homepage/sec5/main.jpeg" }) {
        childImageSharp {
          gatsbyImageData(width: 1024, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  `)

  return (
    <div className="--my-50--xs--gt">
      <SectionType2
        img={imageData.main}
        config={{ roundedCornersOnImgAndButton: true }}
      />
    </div>
  )
}
