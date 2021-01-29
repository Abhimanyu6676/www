import React, { useEffect, useState } from 'react'
import Img from "gatsby-image"
import { graphql, useStaticQuery } from 'gatsby'
import styles from "./index.module.scss"

interface Props {

}

export default (props: Props) => {
    const data = useStaticQuery(graphql`
        query {
            mobileImage: file(relativePath: { eq: "develop/section1/main-mobile.png" }) {
            childImageSharp {
                fluid(maxWidth: 700, quality: 100) {
                ...GatsbyImageSharpFluid
                }
            }
            }
            desktopImage: file(
            relativePath: { eq: "develop/section1/main.png" }
            ) {
            childImageSharp {
                fluid(maxWidth: 2000, quality: 100) {
                ...GatsbyImageSharpFluid
                }
            }
            }
        }       
        `)
    const sources = [
        data.mobileImage.childImageSharp.fluid,
        {
            ...data.desktopImage.childImageSharp.fluid,
            media: `(min-width: 576px)`,
        },
    ]



    return (
        <div /** /// section 1 */ style={{ position: "relative" }}>
            <SvgContainer />
            <div className={styles.textContainer}>
                <h1 >Build your own smart lighting business</h1>
                <h4 className={styles.subText}>We incorporate with brands, manufactuers, integrators & merchants to deliver industry leading smart solution with cutting edge technology</h4>
            </div>
            <Img fluid={sources} />
        </div>
    )
}



const SvgContainer = () => {
    const [featherIndex, setFeatherIndex] = useState(0)
    const colors = ["#ff0000", "#0000ff", "#a80dd2", "#ffffff"]
    useEffect(() => {
        const interval = setInterval(() => {
            if (featherIndex < colors.length - 1)
                setFeatherIndex(featherIndex + 1)
            else
                setFeatherIndex(0)
        }, 5000);
        return () => { clearInterval(interval) }
    }, [featherIndex])


    return (
        <div /** svg container section */ className={styles._container}>
            <svg /** right bottom layer svg */ width="300" height="10" style={{ position: "absolute", zIndex: 2, top: "60%", mixBlendMode: "color-dodge" }} filter="blur(10px)">
                <rect width="100%" height="100%" style={{ fill: "#A80DD2" }} />
            </svg>

            <svg /**lamp luminus white highlight svg */ width="100%" height="100%" className={styles.lampSvgBase + " " + styles.lampHighlight}>
                <ellipse className={styles.Eclipse} />
            </svg>

            <svg /** lamp light spread */ width="100%" height="100%" className={styles.lampSvgBase + " " + styles.lampFeather}>
                <ellipse className={styles.Eclipse} style={{ fill: colors[featherIndex], transition: "fill 5s" }} />
            </svg>
        </div>
    )
}