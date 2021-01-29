import Img from "gatsby-image"
import React from 'react'
//@ts-ignore
import styles from "./index.module.scss"

interface Props {
  sources: any
  heading1: string
  heading2?: string
  subText?: string
  position?: "right" | "left"
}
export default ({
  sources,
  heading1,
  heading2,
  subText,
  position
}: Props) => {

  return (
    <div style={{ position: "relative" }}>
      <Img fluid={sources} />
      <div className={styles.contentContainer + " " + (position == "right" ? styles.right_placed : styles.left_placed)}>
        <h1 style={{ color: "white", textAlign: position == "right" ? "right" : "left" }}>{heading1}</h1>
        {heading2 && <h1 style={{ color: "white", textAlign: position == "right" ? "right" : "left" }}>{heading2}</h1>}
        {subText && <h3 style={{ color: "white", marginTop: 15, fontWeight: "normal", textAlign: position == "right" ? "right" : "left" }}>{subText}</h3>}
      </div>
    </div >
  )
}
