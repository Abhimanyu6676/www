import { graphql, useStaticQuery } from "gatsby"
import React, { useState } from "react"
import { GatsbyImageTransition } from "../../../components/common/imageTransition"
import * as styles from "./switchSection.module.scss"

export const SwitchSection = () => {
  const [currImgIndex, setCurrImgIndex] = useState(0)
  const buttons = [styles.button0, styles.button1, styles.button2]
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
    <div className={styles.switchSectionContainer}>
      <GatsbyImageTransition
        imgArray={imgData.switch1.edges}
        index={currImgIndex}
        setIndex={setCurrImgIndex}
        //skipFirstTransition={true}
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
          marginTop: "10%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          /*  display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center", */
        }}
      >
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p
          style={{
            marginTop: "0.5em",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni culpa
          rerum repellat alias
        </p>
        <div // button container
          className={styles.buttonContainer}
          style={{
            display: "grid",
            marginTop: "2rem",
          }}
        >
          {buttons.map((buttonStyles, buttonIndex) => {
            return (
              <button
                className={buttonStyles}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: 50,
                  padding: "10px 30px",
                }}
                onClick={() => {
                  setCurrImgIndex(buttonIndex)
                }}
              >
                <h6>button-{buttonIndex + 1}</h6>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
