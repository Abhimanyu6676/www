import { graphql, useStaticQuery } from "gatsby"
import React, { useEffect, useState } from "react"
import Img from "gatsby-image"
import globalStyles from "../../../styles/globalStyles"
import appColors from "../../../styles/appColors"

type Props = {}
const AppDownload = (props: Props) => {
  const getPlatform = () => {
    //@ts-ignore
    let userAgent = navigator.platform
    if (userAgent && typeof userAgent === typeof "") {
      userAgent = userAgent.toLowerCase()
      if (
        userAgent.includes("mac") ||
        userAgent.includes("iphone") ||
        userAgent.includes("ipad") ||
        userAgent.includes("ipod")
      ) {
        return "ios"
      } else if (userAgent.includes("linux") || userAgent.includes("android")) {
        //return false
      }
    }
    return "android"
  }
  const isIos: boolean = getPlatform() == "ios"

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
    <div // main container
      style={{
        //backgroundColor: "red",
        height: "100%",
      }}
    >
      <div // upper text container
        style={{
          margin: "10vh 10vw 0px 10vw",
        }}
      >
        <h1 style={{ textAlign: "center" }}>HUElite App-3.0</h1>
        <p style={{ textAlign: "center" }}>
          Download the app with respective store
        </p>
      </div>
      <div //image section
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <div // image container
          style={{
            width: 200,
            height: 200,
            borderRadius: 30,
            overflow: "hidden",
            backgroundColor: "#ffffff",
            ...globalStyles.shadowLight,
            margin: "50px 0px",
          }}
        >
          <Img fluid={data.icon.childImageSharp.fluid} style={{ width: 200 }} />
        </div>
        <div // button
          style={{
            backgroundColor: appColors.primaryHighlight,
            borderRadius: 10,
            width: 150,
            height: 40,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h4
            style={{
              textAlign: "center",
              color: "#ffffff",
            }}
          >
            {isIos ? "Visit App Store" : "Visit Play Store"}
          </h4>
        </div>
      </div>
      <div // bottom section
        style={{
          marginTop: 100,
          backgroundColor: "#eee",
          padding: "20px 10vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div // image container
          style={{
            width: 60,
            height: 60,
            borderRadius: 10,
            overflow: "hidden",
            backgroundColor: "#ffffff",
            //...globalStyles.shadowLight,
          }}
        >
          <Img fluid={data.icon.childImageSharp.fluid} style={{}} />
        </div>
        <div // textSection
          style={{ marginLeft: 20 }}
        >
          <p style={{ margin: 0 }}>
            Or perhaps download from {isIos ? "Play Store" : "App Store"}
          </p>
          <p
            style={{
              margin: 0,
              marginTop: 10,
              fontSize: 15,
              fontWeight: "bold",
              color: appColors.primaryHighlight,
            }}
          >
            {isIos ? "Visit Play Store" : "Visit App Store"}
          </p>
        </div>
      </div>
    </div>
  )
}

export default AppDownload
