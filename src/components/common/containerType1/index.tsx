import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

export interface contentConfig_i {
  /** @default top */
  yAlign?: "top" | "bottom" | "center"
  /** @default left */
  xAlign?: "right" | "left" | "center"
}

interface ContainerType1_props {
  containerStyle?: React.CSSProperties
  containerClassName?: any
  backgroundImg?: any
  imgStyle?: React.CSSProperties
  imgInnerStyle?: React.CSSProperties
  children?: any
  backgroundConfig?: {
    radius?: number
  }
  contentContainerStyle?: React.CSSProperties
  contentContainerClassName?: any
  contentConfig?: contentConfig_i
}
/**
 *
 * @important parent is required to set the outer layout dimensions
 *
 * @default containerStyle={{
 *      width: "100%",
 *      height: "100%",
 *      overflow: "hidden",
 *      position: "relative",
 *  }}
 */
export const ContainerType1 = (props: ContainerType1_props) => {
  return (
    <div
      className={props.containerClassName}
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        position: "relative",
        borderRadius: props.backgroundConfig?.radius,
        ...props.containerStyle,
      }}
    >
      {props.backgroundImg && (
        <GatsbyImage
          image={props.backgroundImg.childImageSharp.gatsbyImageData}
          style={{
            width: "100%",
            height: "100%",
            ...props.imgStyle,
            borderRadius: props.backgroundConfig?.radius,
          }}
          imgStyle={{
            ...props.imgInnerStyle,
            borderRadius: props.backgroundConfig?.radius,
          }}
          alt=""
        />
      )}
      <div // content container
        style={{
          position: props.backgroundImg ? "absolute" : "relative",
          top:
            props.contentConfig?.yAlign == "center"
              ? "unset"
              : props.contentConfig?.yAlign == "top" ||
                !props.contentConfig?.yAlign
              ? 0
              : "unset",
          bottom:
            props.contentConfig?.yAlign == "center"
              ? "unset"
              : props.contentConfig?.yAlign == "bottom"
              ? 0
              : "unset",
          left:
            props.contentConfig?.xAlign == "center"
              ? "unset"
              : props.contentConfig?.xAlign == "left" ||
                !props.contentConfig?.xAlign
              ? 0
              : "unset",
          right:
            props.contentConfig?.xAlign == "center"
              ? "unset"
              : props.contentConfig?.xAlign == "right"
              ? 0
              : "unset",
          zIndex: 1,
          width: props.contentConfig?.xAlign == "center" ? "100%" : "unset",
          height: props.contentConfig?.yAlign == "center" ? "100%" : "unset",
          display: "flex",
          flexDirection: "column",
          justifyContent:
            props.contentConfig?.yAlign == "center" ? "center" : "unset",
          alignItems:
            props.contentConfig?.xAlign == "center" ? "center" : "unset",
          //backgroundColor: "red",
          borderRadius: props.backgroundConfig?.radius,
          ...props.contentContainerStyle,
        }}
        className={props.contentContainerClassName}
      >
        {props.children}
      </div>
    </div>
  )
}
