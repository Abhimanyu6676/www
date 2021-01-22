import React, { Attributes } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

interface props {
    imgTitle?: string
    style?: any
    imgData?: any
}
const Image = ({
    imgTitle = "icon.png",
    style = {},
    imgData = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "icon/icon.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }`) }: props) => {


    if (!imgData?.placeholderImage?.childImageSharp?.fluid) {
        return <div>Picture not found</div>
    }

    return <Img style={{ width: 100, height: "auto", ...style }} fluid={imgData.placeholderImage.childImageSharp.fluid} />
}

export default Image
