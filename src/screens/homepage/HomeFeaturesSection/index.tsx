import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SectionType2 from "../../../components/common/sectionType2"
import * as styles from "./index.module.scss"

type Props = {}

export const HomeFeaturesSection = (props: Props) => {
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
    <div
      style={{
        padding: "100px 0px",
      }}
    >
      <div className={styles.marginHorizontal}>
        <SectionType2
          reverseDesktopOrientation
          img={imageData.main}
          config={{ roundedCornersOnImgAndButton: true }}
        />
      </div>

      <div className={`${styles.marginHorizontal} ${styles.marginVertical}`}>
        <SectionType2
          img={imageData.main}
          config={{ roundedCornersOnImgAndButton: true }}
        />
      </div>

      <div className={styles.marginHorizontal}>
        <SectionType2
          reverseDesktopOrientation
          img={imageData.main}
          config={{ roundedCornersOnImgAndButton: true }}
        />
      </div>
    </div>
  )
}
