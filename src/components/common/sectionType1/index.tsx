import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import {
  GatsbyImage,
  getImage,
  StaticImage,
  withArtDirection,
} from "gatsby-plugin-image"
import globalStyles from "../../../styles/globalStyles"
import * as styles from "./index.module.css"

type Props = {
  /** takes 2 images [small-(max-width:600px)  & a full size image may be 16:9 for greater screen sizes ] */
  srcSetImgs?: {
    /** full size image for greater than 600px screenSize. close to 16:9 aspect ratio */
    img: any
    /** small image max screenSize 600px. aspect ratio 1:1 fixed */
    img_sm: any
  }
  content?: {
    heading: string
    text?: string
    text2: string
    button?: {
      link: string
      text: string
    }
  }
  contentChild?: any
}

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
    <div>
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
          margin: "0px 5vw",
          padding: "30px 15px",
          position: "relative",
          top: -70,
          ...globalStyles.shadowLight,
        }}
      >
        {props.contentChild ? (
          <props.contentChild />
        ) : (
          <>
            <h1 style={{ marginTop: 0 }}>{props.content?.heading}</h1>
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
        )}
      </div>
    </div>
  )
}
