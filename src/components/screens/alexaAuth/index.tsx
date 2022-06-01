import React, { useState } from "react"
//import { View, Text, Animated, Dimensions } from "react-native"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import AlexaLoginScreen from "./alexaLogin"

//const { height, width } = Dimensions.get("window")

interface Props {}
export default (props: Props) => {
  const [policyAccepted, setPolicyAccepted] = useState<boolean>(false)

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexGrow: 1,
        position: "fixed",
        height: "100%",
        width: "100%",
        //backgroundColor: "#0000ff"
      }}
    >
      {!policyAccepted ? (
        <AlexaLoginScreen />
      ) : (
        <ConcentScreen setPolicyAccepted={setPolicyAccepted} />
      )}
    </div>
  )
}

interface concentScreenProps {
  setPolicyAccepted: React.Dispatch<React.SetStateAction<boolean>>
}
const ConcentScreen = ({ setPolicyAccepted }: concentScreenProps) => {
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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        //backgroundColor: "red",
        alignItems: "center",
      }}
    >
      {/*  <Animated.ScrollView */}
      <div
        //showsVerticalScrollIndicator={false}
        //showsHorizontalScrollIndicator={false}
        style={{ flex: 1 }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            //backgroundColor: "red",
            alignItems: "center",
            maxWidth: 500,
          }}
        >
          <Img
            fluid={data.icon.childImageSharp.fluid}
            style={{ width: 100, marginTop: "10vh" }}
          />
          <div
            style={{
              fontSize: 25,
              textAlign: "center",
              marginTop: 25,
              fontWeight: "bold",
              color: "#777777",
            }}
          >
            Confirm your choices
          </div>
          <div
            style={{
              marginTop: "10vh",
              textAlign: "left",
              width: "100%",
              //paddingHorizontal: 20,
              color: "#444444",
              fontSize: 16,
            }}
          >
            <div style={{}}>
              {"\u2022 "}associate your HUElite accout with Alexa service
            </div>
            <div style={{}}>
              {"\n\n\u2022 "}allow alexa to control your HUElite devices on your
              behalf
            </div>
            <div>
              {"\n\n\u2022 "}accept terms and conditions and privacy policies
            </div>
          </div>
          <div
            style={{
              color: "#444444",
              fontSize: 16,
              marginTop: 100,
              width: "100vw",
              //paddingHorizontal: 20,
              textAlign: "left",
              marginBottom: 100,
            }}
          >
            <div style={{ fontWeight: "bold" }}>
              Make sure you read the following
            </div>
            <div style={{ marginTop: 10, fontSize: 12 }}>
              {"\n"}if you choose to proceed than you agree with terms and
              conditions and privacy policy
            </div>
          </div>
        </div>
        {/*  </Animated.ScrollView> */}
      </div>
      <div>
        <div
          style={{
            width: "90vw",
            maxWidth: 400,
            height: 50,
            backgroundColor: "#FBB704",
            borderRadius: 5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => {
            setPolicyAccepted(true)
          }}
        >
          <div style={{ fontWeight: "bold", fontSize: 18, color: "#ffffff" }}>
            Agree and Continue
          </div>
        </div>
        <div
          style={{
            width: "90vw",
            maxWidth: 400,
            height: 50,
            //backgroundColor: "#FBB704",
            borderRadius: 5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: 16 }}>cancel</div>
        </div>
      </div>
    </div>
  )
}
