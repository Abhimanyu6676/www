import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import * as styles from "./secondaryFeatureGrid.module.scss"

type Props = {}
export const SecondaryFeatureGrid = (props: Props) => {
  const imageData = useStaticQuery(graphql`
    query {
      cct: file(
        relativePath: { eq: "products/spectrumStrip/images/cct.jpeg" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 578, placeholder: BLURRED)
        }
      }
    }
  `)

  return (
    <div className="--container">
      <div
        className={styles.wrapper}
        style={{
          marginBottom: "5rem",
        }}
      >
        <ContainerType1
          containerClassName={styles.item1}
          backgroundImg={imageData.cct}
          backgroundConfig={{ radius: 10 }}
        >
          <div style={{ margin: "1rem", color: "#fff" }}>
            <h3>Circadian Lighting</h3>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis,
              praesentium est perferendis.
            </p>
          </div>
        </ContainerType1>
        <ContainerType1
          containerClassName={styles.item2}
          backgroundImg={imageData.cct}
          backgroundConfig={{ radius: 10 }}
          contentContainerStyle={{
            marginLeft: "40%",
          }}
        >
          <div style={{ margin: "1rem", color: "#fff" }}>
            <h3>Item 2</h3>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis,
              praesentium est perferendis.
            </p>
          </div>
        </ContainerType1>
        <ContainerType1
          containerClassName={styles.item3}
          backgroundImg={imageData.cct}
          backgroundConfig={{ radius: 10 }}
          contentContainerStyle={{}}
          contentConfig={
            {
              //yAlign: "bottom",
              //xAlign: "right",
            }
          }
        >
          <div style={{ margin: "1rem", color: "#fff" }}>
            <h3>Item 3</h3>
            <p className="mt-2">Lorem ipsum</p>
          </div>
        </ContainerType1>
        <ContainerType1
          containerClassName={styles.item4}
          backgroundImg={imageData.cct}
          backgroundConfig={{ radius: 10 }}
          contentContainerStyle={{
            marginRight: "30%",
          }}
        >
          <div style={{ margin: "1rem", color: "#fff" }}>
            <h3>Item 4</h3>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis,
              praesentium est perferendis.
            </p>
          </div>
        </ContainerType1>
        <ContainerType1
          containerClassName={styles.item5}
          backgroundImg={imageData.cct}
          backgroundConfig={{ radius: 10 }}
          contentConfig={{
            yAlign: "bottom",
          }}
        >
          <div style={{ margin: "1rem", color: "#fff" }}>
            <h3>Item 5</h3>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis,
              praesentium est perferendis.
            </p>
          </div>
        </ContainerType1>
      </div>
    </div>
  )
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
  contentConfig?: {
    /** @default top */
    yAlign?: "top" | "bottom"
    /** @default left */
    xAlign?: "right" | "left"
  }
}
const ContainerType1 = (props: ContainerType1_props) => {
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
      <div // content container
        style={{
          position: "absolute",
          top: props.contentConfig?.yAlign == "bottom" ? "unset" : 0,
          bottom: props.contentConfig?.yAlign == "bottom" ? 0 : "unset",
          left: props.contentConfig?.xAlign == "right" ? "unset" : 0,
          right: props.contentConfig?.xAlign == "right" ? 0 : "unset",
          zIndex: 1,
          //backgroundColor: "red",
          borderRadius: props.backgroundConfig?.radius,
          ...props.contentContainerStyle,
        }}
      >
        {props.children}
      </div>
    </div>
  )
}
