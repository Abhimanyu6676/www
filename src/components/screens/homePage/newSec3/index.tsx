import React from "react"
import SectionType3 from "../../../common/sectionType3"
import { graphql, Link, useStaticQuery } from "gatsby"
//@ts-ignore
import styles from "./index.module.scss"

interface Props {}
export default (props: Props) => {
  const data = useStaticQuery(graphql`
    query {
      newSec3Img1: file(relativePath: { eq: "homepage/newSec3/img1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <SectionType3
      sources={data.newSec3Img1.childImageSharp.fluid}
      style={{ marginTop: 30 }}
    >
      <div
        style={{
          paddingLeft: 30,
          paddingRight: 30,
        }}
      >
        <h1 style={{ paddingTop: 30 }}>Working from home?</h1>
        <h4 style={{ fontWeight: "normal", marginTop: 15 }}>
          Set up Schedules to help keep a routine throughout the day,
        </h4>
        <h4 style={{ fontWeight: "normal", marginTop: 15 }}>
          or connect your lights to apps and receive light notifications when a
          meeting is coming up, when the weather changes, and more.
        </h4>
        <Link
          to="/pages/work-from-home"
          style={{
            backgroundColor: "#2d2f30",
            height: 50,
            width: 200,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "0px 10px",
            marginTop: 30,
          }}
        >
          <h3 style={{ color: "#fff" }}>Learn More</h3>
        </Link>
      </div>
    </SectionType3>
  )
}
