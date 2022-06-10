import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"

type Props = {
  style?: React.CSSProperties
}

export default (props: Props) => {
  const { icon } = useStaticQuery(graphql`
    query {
      icon: file(relativePath: { eq: "icon/icon.png" }) {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED)
        }
      }
    }
  `)

  return (
    <GatsbyImage
      image={icon.childImageSharp.gatsbyImageData}
      style={{ ...props.style }}
      alt="HUElite"
    />
  )
}
