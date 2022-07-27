import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import * as styles from "./secondaryFeatureGrid.module.scss"

type Props = {}
export const SecondaryFeatureGrid = (props: Props) => {
  const imageData = useStaticQuery(graphql`
    query {
      controlFromAnywhere: file(
        relativePath: {
          eq: "products/spectrumStrip/images/secondaryFeatures/controlFromAnywhere.png"
        }
      ) {
        childImageSharp {
          gatsbyImageData(width: 578, placeholder: BLURRED)
        }
      }
      customModes: file(
        relativePath: {
          eq: "products/spectrumStrip/images/secondaryFeatures/customModes.png"
        }
      ) {
        childImageSharp {
          gatsbyImageData(width: 578, placeholder: BLURRED)
        }
      }
      scheduler: file(
        relativePath: {
          eq: "products/spectrumStrip/images/secondaryFeatures/scheduler.png"
        }
      ) {
        childImageSharp {
          gatsbyImageData(width: 578, placeholder: BLURRED)
        }
      }
      colors: file(
        relativePath: {
          eq: "products/spectrumStrip/images/secondaryFeatures/colors.png"
        }
      ) {
        childImageSharp {
          gatsbyImageData(width: 578, placeholder: BLURRED)
        }
      }
      flexibility: file(
        relativePath: {
          eq: "products/spectrumStrip/images/secondaryFeatures/flexibility.png"
        }
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
        <ContainerType1 //control-from-anywhere
          containerClassName={styles.item1}
          backgroundImg={imageData.controlFromAnywhere}
          backgroundConfig={{ radius: 10 }}
        >
          <div style={{ margin: "1rem", color: "#fff" }}>
            <h3>Control from Anywhere</h3>
            <p className="mt-2">
              Control your lights from anywhere you want & simulate someone
              being at home to frighten away, unwanted visitors.
            </p>
          </div>
        </ContainerType1>
        <ContainerType1 // custom-modes
          containerClassName={styles.item2}
          backgroundImg={imageData.customModes}
          backgroundConfig={{ radius: 10 }}
          contentContainerStyle={{
            marginRight: "10%",
          }}
        >
          <div style={{ margin: "1rem", color: "#fff" }}>
            <h3>DIY Custom Modes</h3>
            <p className="mt-2">
              Now you can run your imagination freely, with mode creation &
              customization by users so you can switch to your desired ambient
              lighting with one tap.
            </p>
          </div>
        </ContainerType1>
        <ContainerType1 // scheduler
          containerClassName={styles.item3}
          containerStyle={{
            border: "0.5px solid #cccccc",
          }}
          backgroundImg={imageData.scheduler}
          backgroundConfig={{ radius: 10 }}
          contentContainerStyle={{}}
          contentConfig={
            {
              //yAlign: "bottom",
              //xAlign: "right",
            }
          }
        >
          <div style={{ margin: "1rem", color: "#000" }}>
            <h3>Customised Schedules</h3>
            <p className="mt-2">
              Automate your lights to turn on/off on specific days and times to
              make your daily routines a little easier. All scheduling can be
              set using Amazon Alexa app, Google Home app.
            </p>
          </div>
        </ContainerType1>
        <ContainerType1 // 16M colors
          containerClassName={styles.item4}
          backgroundImg={imageData.colors}
          backgroundConfig={{ radius: 10 }}
          contentContainerStyle={{
            marginRight: "15%",
          }}
        >
          <div style={{ margin: "1rem", color: "#fff" }}>
            <h3>16M+ Colors</h3>
            <p className="mt-2">
              Virtually limitless color options. Choose your favourite vibrant
              color or create color-changing scenes for the perfect ambience.
            </p>
          </div>
        </ContainerType1>
        <ContainerType1 // flexibility
          containerClassName={styles.item5}
          backgroundImg={imageData.flexibility}
          backgroundConfig={{ radius: 10 }}
          contentConfig={{
            yAlign: "bottom",
          }}
        >
          <div style={{ margin: "1rem", color: "#fff" }}>
            <h3>Trimmable & Flexible</h3>
            <p className="mt-2">
              Cut it to whatever length you want and with IP20 you can easily
              bend it around corners to fit your customized needs.
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
