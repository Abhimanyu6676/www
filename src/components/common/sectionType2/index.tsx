import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import appColors from "../../../styles/appColors"
import * as styles from "./index.module.css"

type Props = {
  config?: {
    roundedCornersOnImgAndButton?: boolean
  }
  /** image query data. [.childImageSharp.gatsbyImageData] is applied later */
  img: any
  /** Set flex direction as row-reverse. default is row */
  reverseDesktopOrientation?: boolean
}
export default (props: Props) => {
  return (
    <div
      className={`
        ${styles.container}
        ${props.reverseDesktopOrientation ? styles.containerReverse : " "}
      `}
    >
      <div //imageContainer
        className={styles.imgContainer}
      >
        {props.img && (
          <GatsbyImage
            image={props.img.childImageSharp.gatsbyImageData}
            style={{ width: "100%", height: "100%" }}
            imgStyle={{
              borderRadius: props?.config?.roundedCornersOnImgAndButton
                ? 20
                : 0,
              width: "100%",
              height: "100%",
            }}
            alt="HUElite"
          />
        )}
      </div>
      <div // contentContainer
        className={styles.contentContainer}
      >
        <div className={styles.contentContainerInner}>
          <h1>Modes/Presets</h1>
          <h5>More than just static lighting</h5>
          <p
            style={{
              marginTop: 30,
              fontSize: 17,
              color: "#333",
            }}
          >
            HUElite strips can shift through tones during bedtime story,
            invigorate you for your daily workout, emulate a warm candle flicker
            when you’re settled in for the night.
          </p>
          <button
            style={{
              backgroundColor: appColors.black_1,
              height: 50,
              borderRadius: props.config?.roundedCornersOnImgAndButton ? 50 : 0,
              overflow: "hidden",
              marginTop: 40,
            }}
          >
            <h3
              style={{
                textAlign: "center",
                color: "#ffffff",
                margin: "0px 20px",
              }}
            >
              Learn More
            </h3>
          </button>
        </div>
      </div>
    </div>
  )
}
