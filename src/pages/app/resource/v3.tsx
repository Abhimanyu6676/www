import React, { useEffect, useState } from "react"
import globalStyles from "../../../styles/globalStyles"
import appColors from "../../../styles/appColors"
import HueliteIcon from "../../../components/imageQueries/HueliteIcon"

type Props = {
  data: any
}
const AppDownload = ({ data }: Props) => {
  const [isIos, setIsIos] = useState<"none" | "ios" | "android">("none")
  const [text, setText] = useState("text")
  const androidAppLink =
      "https://play.google.com/store/apps/details?id=com.sternet.huelite3",
    iosAppLink = "https://apps.apple.com/in/app/huelite-3-0/id1627075117"

  useEffect(() => {
    if (window !== "undefined") {
      const getPlatform = () => {
        //@ts-ignore
        let userAgent = window.navigator.platform
        if (!userAgent || typeof userAgent != typeof "") {
          userAgent = "android"
        } else {
          userAgent = userAgent.toLowerCase()
        }
        if (
          userAgent.includes("mac") ||
          userAgent.includes("iphone") ||
          userAgent.includes("ipad") ||
          userAgent.includes("ipod")
        ) {
          return "ios"
        } else if (
          userAgent.includes("linux") ||
          userAgent.includes("android")
        ) {
          //return false
        }
        return "android"
      }

      try {
        console.log("starting")
        setText(window.navigator.platform)
        console.log("=== === ", window.navigator.platform)
        let _p = getPlatform()
        if (_p == "ios") {
          setIsIos("ios")
        } else if (_p == "android") {
          setIsIos("android")
        }
      } catch (error) {
        console.log("error - ", error)
      }
    } else {
      console.log("window is undefined")
    }

    return () => {}
  }, [])

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
        <h1 style={{ textAlign: "center" }}>HUElite App 3.0</h1>
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
          <HueliteIcon style={{ width: 200 }} />
        </div>
        <a // primary store jump button
          href={isIos == "ios" ? iosAppLink : androidAppLink}
          style={{
            backgroundColor: appColors.primaryHighlight,
            borderRadius: 10,
            width: 150,
            height: 40,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <h4
            style={{
              textAlign: "center",
              color: "#ffffff",
            }}
          >
            {isIos == "ios" ? "Visit App Store" : "Visit Play Store"}
          </h4>
        </a>
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
          <HueliteIcon style={{}} />
        </div>
        <div // textSection
          style={{ marginLeft: 20 }}
        >
          <p style={{ margin: 0 }}>
            Or perhaps download from{" "}
            {isIos == "ios" ? "Play Store" : "App Store"}
          </p>
          <a // secondary store link
            target="_blank"
            href={isIos == "ios" ? androidAppLink : iosAppLink}
            style={{
              margin: 0,
              marginTop: 10,
              fontSize: 15,
              fontWeight: "bold",
              color: appColors.primaryHighlight,
              textDecoration: "none",
            }}
          >
            {isIos == "ios" ? "Visit Play Store" : "Visit App Store"}
          </a>
        </div>
      </div>
    </div>
  )
}

export default AppDownload
