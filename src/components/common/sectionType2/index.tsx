import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import appColors from "../../../styles/appColors"
import * as styles from "./index.module.scss"

type Props = {
  config?: {
    /** Set flex direction as row-reverse. default is row [Image on left] & [Content on left] */
    desktopContentOnLeft?: boolean
    roundedCornersOnImgAndButton?: boolean
  }
  /** image query data. [.childImageSharp.gatsbyImageData] is applied later */
  img: any
  /**
   * @param heading main heading
   * @param subHeading (optional) subheading
   * @param text text
   */
  content?: {
    heading: string
    subHeading?: string
    text: string
    button?: {
      text: string
      link?: string
    }
  }
  /** @description children will be rendered in content container section */
  children?: any
  imgContainerStyle?: React.CSSProperties
  imgStyle?: React.CSSProperties
}
/**
 * ## contentContainer
 *
 * #### styles xs
 * - marginTop:50
 */
export default (props: Props) => {
  return (
    <div
      className={`
        ${styles.container}
        ${props.config?.desktopContentOnLeft ? styles.containerReverse : " "}
      `}
      style={{
        position: "relative",
      }}
    >
      <div //imageContainer
        className={styles.imgContainer}
        style={props.imgContainerStyle}
      >
        {props.img && (
          <GatsbyImage
            image={props.img.childImageSharp.gatsbyImageData}
            style={{ width: "100%", height: "100%", ...props.imgStyle }}
            imgStyle={{
              borderRadius: props?.config?.roundedCornersOnImgAndButton
                ? 20
                : 0,
              width: "100%",
              height: "100%",
            }}
            alt=""
          />
        )}
      </div>
      <div // contentContainer
        className={`
        ${styles.contentContainer} 
        ${
          props.config?.desktopContentOnLeft
            ? styles.contentContainerLeft
            : styles.contentContainerRight
        }`}
      >
        {props.content ? (
          <div style={{ maxWidth: 350 }}>
            <h1>{props.content.heading}</h1>
            {props.content.subHeading && <h5>{props.content.subHeading}</h5>}
            <p
              style={{
                marginTop: "1rem",
              }}
            >
              {props.content.text}
            </p>
            {props.content.button && (
              <button
                style={{
                  backgroundColor: appColors.black_1,
                  height: 50,
                  borderRadius: props.config?.roundedCornersOnImgAndButton
                    ? 50
                    : 0,
                  overflow: "hidden",
                  marginTop: "2rem",
                }}
              >
                <h3
                  style={{
                    textAlign: "center",
                    color: "#ffffff",
                    margin: "0px 20px",
                  }}
                >
                  {props.content.button.text}
                </h3>
              </button>
            )}
          </div>
        ) : (
          props.children
        )}
      </div>
    </div>
  )
}
