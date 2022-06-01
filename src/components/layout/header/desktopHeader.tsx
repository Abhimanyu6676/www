import React from "react"
//@ts-ignore
import * as styles from "./desktopHeader.module.css"
import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { primartMenu } from "."

type Props = {}
export const DesktopHeader = (props: Props) => {
  const data = useStaticQuery(graphql`
    query {
      icon: file(relativePath: { eq: "icon/icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className={styles.main}>
      <Img fluid={data.icon.childImageSharp.fluid} style={{ width: 100 }} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          //backgroundColor: "green",
          //paddingBottom: 10,
        }}
      >
        {primartMenu.map((item, index) => {
          return (
            <Link
              key={index + "_"}
              to={item.link}
              style={{
                textDecoration: "none",
                //backgroundColor: "red",
                margin: "0px 15px",
                marginTop: 15,
              }}
            >
              <h5
                style={{
                  margin: 0,
                  fontWeight: "normal",
                  color: "#777",
                }}
              >
                {item.text}
              </h5>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
