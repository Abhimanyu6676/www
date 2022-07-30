import { graphql, useStaticQuery } from "gatsby"
import React, { useState } from "react"
import { GatsbyImageTransition } from "../../../components/common/imageTransition"
import globalStyles from "../../../styles/globalStyles"
import * as styles from "./switchSection.module.scss"

interface slide_i {
  heading: string
  text: string
  buttonText: string
  styleClass: any
}

const slides: slide_i[] = [
  {
    heading: "Create your own colorful",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolore sapiente voluptatem unde sequi porro!",
    buttonText: "Ocean Mode",
    styleClass: styles.button0,
  },
  {
    heading: "Lighting experience",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolore sapiente voluptatem unde sequi porro!",
    buttonText: "Romantic Mode",
    styleClass: styles.button1,
  },
  {
    heading: "Lorem ipsum heading!",
    text: "Let smart strip bring you to any scene experience that beyond your imagination.",
    buttonText: "Forest Mode",
    styleClass: styles.button2,
  },
]

interface Props {
  containerStyles?: React.CSSProperties
}
export const SwitchSection = (props: Props) => {
  const [currSlideIndex, setCurrSlideIndex] = useState(0)
  const imgData = useStaticQuery(graphql`
    query {
      switch1: allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
          dir: {
            eq: "/Users/abhimanyu/Documents/HUElite/web/src/screens/products/spectrumStrip/images/switchSection"
          }
        }
        sort: { fields: name }
      ) {
        edges {
          node {
            id
            childImageSharp {
              gatsbyImageData(width: 2000, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  `)
  return (
    <div
      className={styles.switchSectionContainer}
      style={{ ...props.containerStyles }}
    >
      <GatsbyImageTransition
        imgArray={imgData.switch1.edges}
        index={currSlideIndex}
        setIndex={setCurrSlideIndex}
        //skipFirstTransition={true} // cannot use that as button 1 will set the index to 0 always
      />
      <div // content container
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          padding: "1em",
          color: "#ffffff",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          /*  display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center", */
        }}
      >
        <div // heading container
          style={{
            marginTop: "2rem",
          }}
        >
          <h1>Create your own colorful Lighting experience</h1>
          <p
            style={{
              marginTop: "1rem",
            }}
          >
            Let smart strip bring you to any scene experience that beyond your
            imagination.
          </p>
        </div>
        <div // button grid container
          className={styles.buttonContainer}
          style={{
            display: "grid",
            marginBottom: "2rem",
          }}
        >
          {slides.map((button, buttonIndex) => {
            return (
              <button
                className={button.styleClass}
                style={{
                  backgroundColor: "#99999977",
                  borderRadius: 50,
                  padding: "10px 30px",
                  ...globalStyles.shadowLight,
                }}
                onClick={() => {
                  setCurrSlideIndex(buttonIndex)
                }}
              >
                <h6 style={{ color: "#ffffff" }}>{button.buttonText}</h6>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
