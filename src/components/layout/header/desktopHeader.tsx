import React from "react"
//@ts-ignore
import * as styles from "./desktopHeader.module.css"
import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { primartMenu } from "."

type Props = {
  transparent?: boolean
}
export const DesktopHeader = (props: Props) => {
  const data = useStaticQuery(graphql`
    {
      icon: file(relativePath: { eq: "icon/icon.png" }) {
        childImageSharp {
          gatsbyImageData(width: 200, layout: CONSTRAINED)
        }
      }
    }
  `)

  return (
    <div className={styles.main}>
      <Link to="/">
        <GatsbyImage
          image={data.icon.childImageSharp.gatsbyImageData}
          style={{ width: 80 }}
          alt="HUElite"
        />
      </Link>
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
              <h3
                style={{
                  margin: 0,
                  //fontWeight: "normal",
                  fontFamily: "Inter",
                  color: props.transparent ? "#ffffff" : "#777777",
                }}
              >
                {item.text}
              </h3>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
