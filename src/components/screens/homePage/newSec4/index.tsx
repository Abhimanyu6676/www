import React from "react"
import SectionType3 from "../../../common/sectionType3"
import { graphql, useStaticQuery, Link } from "gatsby"
//@ts-ignore
import styles from "./index.module.scss"

interface Props {}
export default (props: Props) => {
  const data = useStaticQuery(graphql`
    query {
      newSec4Img1: file(relativePath: { eq: "homepage/newSec4/img1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <SectionType3 sources={data.newSec4Img1.childImageSharp.fluid}>
      <div
        style={{
          paddingLeft: 30,
          paddingRight: 30,
        }}
      >
        <h1 style={{ paddingTop: 30 }}>Sit back and relax.</h1>
        <h4 style={{ paddingTop: 0 }}>perfect TV lightning</h4>
        <h4 style={{ fontWeight: "normal", marginTop: 15 }}>
          HUElite lights are perfect for an evening in with a marathon session
          of Stranger Things.
        </h4>
        <h4 style={{ fontWeight: "normal", marginTop: 15 }}>
          It's all about personal oasis, and voice control for the lazy.
        </h4>
        <Link
          to="/pages/tv-lighting"
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
