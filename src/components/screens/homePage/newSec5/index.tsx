import React from "react"
import SectionType3 from "../../../common/sectionType3"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
//@ts-ignore
import styles from "./index.module.scss"

interface Props {}
export default (props: Props) => {
  const data = useStaticQuery(graphql`
    query {
      newSec5Img1: file(relativePath: { eq: "homepage/newSec5/alexa1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div
      style={{ backgroundColor: "#f3f3f3", paddingTop: 20, paddingBottom: 30 }}
    >
      <h1 style={{ textAlign: "center" }}>INTEGRATIONS</h1>
      <div style={{ marginTop: 30 }}>
        <div
          style={{
            width: "80vw",
            maxWidth: 350,
            //height: 400,
            borderRadius: 5,
            margin: "0 10vw",
            overflow: "hidden",
            position: "relative",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
        >
          <Img
            //style={{ height: "100%" }}
            fluid={data.newSec5Img1.childImageSharp.fluid}
          />
          <div
            style={{
              position: "absolute",
              bottom: 30,
              left: 30,
              border: "1px solid #ffffff",
              zIndex: 2,
              padding: "10px 5px",
            }}
          >
            <h2 style={{ color: "#ffffff" }}>Know more</h2>
          </div>
          <div
            style={{
              position: "absolute",
              top: 30,
              left: 30,
              zIndex: 2,
              paddingRight: 30,
            }}
          >
            <h2 style={{ color: "#ffffff" }}>Works with Alexa</h2>
            <p style={{ color: "#ffffff", marginTop: 20 }}>
              Voice control for wet hands, full arms, juggling five things at
              once, or just lazy ones
            </p>
            <h4 style={{ color: "#ffffff", marginTop: 20 }}>
              Alexa, turn my lights 'ON'
            </h4>
            <h4 style={{ color: "#ffffff", marginTop: 20 }}>
              Alexa, set my lights to green
            </h4>
          </div>
        </div>
      </div>
    </div>
  )
}
