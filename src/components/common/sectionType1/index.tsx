import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import {
  GatsbyImage,
  getImage,
  StaticImage,
  withArtDirection,
} from "gatsby-plugin-image"
import globalStyles from "../../../styles/globalStyles"
import * as styles from "./index.module.scss"

type Props = {
  config?: {
    /** set content on the left side on desktop */
    desktopContentOnLeft?: boolean
    roundedContentContainer?: boolean
  }
  /** takes 2 images [small-(max-width:600px)  & a full size image may be 16:9 for greater screen sizes ] */
  srcSetImgs?: {
    /** full size image for greater than 600px screenSize. close to 16:9 aspect ratio */
    img: any
    /** small image max screenSize 600px. aspect ratio 1:1 fixed */
    img_sm: any
  }
  content?: {
    heading: string
    subHeading?: string
    text: string
    text2?: string
    button?: {
      link: string
      text: string
    }
  }
  children?: any
}
/**
 * @defaults Content container is aligned at left on desktop|tablet. use `config.desktopRightAligned` boolean to make it rightAligned
 */
export default (props: Props) => {
  const images = props.srcSetImgs
    ? withArtDirection(getImage(props.srcSetImgs.img), [
        {
          media: "(max-width: 600px)",
          image: getImage(props.srcSetImgs.img_sm),
        },
      ])
    : undefined

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div className={styles.imageContainer}>
        {props.srcSetImgs && (
          <GatsbyImage
            image={images}
            style={{ width: "100%", height: "100%" }}
            alt="HUElite"
          />
        )}
      </div>
      <div // content container
        style={{
          backgroundColor: "#ffffff",
          padding: "30px 15px",
          overflow: "hidden",
          borderRadius: props?.config?.roundedContentContainer ? 20 : 0,
          ...globalStyles.shadowLight,
        }}
        className={[
          styles.contentContainer,
          props.config?.desktopContentOnLeft
            ? styles.contentContainer_left
            : styles.contentContainer_right,
        ].join(" ")}
      >
        {props.content ? (
          //default container
          <>
            <h1 style={{}}>{props.content?.heading}</h1>
            {props.content.subHeading && <h5>{props.content.subHeading}</h5>}
            <p style={{ fontWeight: "normal", marginTop: 15 }}>
              {props.content?.text}
            </p>
            <p
              style={{
                fontWeight: "normal",
                marginTop: 15,
              }}
            >
              {props.content?.text2}
            </p>
            {props.content?.button && (
              <Link
                to={props.content.button.link}
                style={{
                  backgroundColor: "#2d2f30",
                  height: 50,
                  width: 180,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 30,
                }}
              >
                <h3 style={{ color: "#fff" }}>{props.content.button.text}</h3>
              </Link>
            )}
          </>
        ) : (
          props.children
        )}
      </div>
    </div>
  )
}
