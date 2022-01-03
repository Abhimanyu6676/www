import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export default (props: { setConsentPass: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const user = "iamlive247@gmail.com"
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
    <div style={{ flex: 1 }}>
      <Img fluid={data.icon.childImageSharp.fluid} style={{ width: 80 }} />
      <div style={{ flex: 1, marginLeft: 15, marginRight: 15, marginTop: 50, fontSize: 24, fontWeight: "bold" }}>
        Link HUElite devices with Google
      </div>
      <div /// current user // change user button
        style={{
          paddingLeft: 15,
          paddingRight: 15,
          marginTop: 20,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <p style={{ fontSize: 15 }}>signed in as {user}</p>
        </div>
        <p style={{ color: "blue" }}>change Account</p>
      </div>
      <div /// data to be shared block
        style={{
          paddingLeft: 15,
          paddingRight: 15,
          marginTop: 20,
        }}
      >
        <p style={{ fontSize: 18, fontWeight: "bold" }}>Data to be shared with Google</p>
        <p style={{ marginTop: 10 }}>1. All your HUElite devices List linked with account {user} will be shared</p>
      </div>
      <div /// review privacy policy
        style={{
          paddingRight: 15,
          paddingLeft: 15,
          marginTop: 20,
        }}
      >
        <p>
          Review Google's <a href="http://policies.google.com/">privacy policy</a>
        </p>
        <p>
          You can unlink your account <a href="">here</a>
        </p>
      </div>
      <div style={{ marginTop: 40, display: "flex" }}>
        <div /// cancel button
          style={{
            margin: 10,
            height: 50,
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            fontSize: 15,
            overflow: "hidden",
            border: "0.5px #000000 solid",
            maxWidth: 200,
          }}
          onClick={() => {
            props.setConsentPass(true)
          }}
        >
          Cancel
        </div>
        <div /// agree button
          style={{
            margin: 10,
            backgroundColor: "#ffd24d",
            height: 50,
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            fontSize: 15,
            fontWeight: "bold",
            overflow: "hidden",
            border: "0.5px #000000 solid",
            maxWidth: 200,
          }}
          onClick={() => {
            props.setConsentPass(true)
          }}
        >
          AGREE & LINK
        </div>
      </div>
    </div>
  )
}
