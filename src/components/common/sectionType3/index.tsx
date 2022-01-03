import React from "react"
import { FadeInSection } from "../FadeInSection"
import Img from "gatsby-image"
//@ts-ignore
import styles from "./index.module.scss"

interface Props {
  children?: any
  sources: any
  style?: React.CSSProperties
}
export default (props: Props) => {
  return (
    <div style={{ backgroundColor: "#f3f3f3", ...props.style }}>
      <Img fluid={props.sources} />
      <div /// content section
        style={{
          backgroundColor: "#fff",
          position: "relative",
          zIndex: 2,
          top: -15,
          width: "95vw",
          margin: "0px 2.5vw",
          paddingBottom: 30,
        }}
      >
        <FadeInSection>{props.children}</FadeInSection>
      </div>
    </div>
  )
}
