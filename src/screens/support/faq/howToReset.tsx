import { graphql, useStaticQuery } from "gatsby"
import React, { useEffect, useState } from "react"
import { useSpring, animated, config } from "react-spring"
import { ContactUs } from "../../../components/common/contactUs"
import { NoteBox } from "../../../components/common/NoteBox"
import SectionType2 from "../../../components/common/sectionType2"
import appColors from "../../../styles/appColors"
import globalStyles from "../../../styles/globalStyles"

type Props = {}

export const HowToReset = (props: Props) => {
  const progressBarWidth = 150
  const [intervalTime, setintervalTime] = useState(3000)
  const [controllerActive, setControllerActive] = useState(false)
  const [controllerProgress, setControllerProgress] = useState(0)
  const barStyle = useSpring({
    width: controllerProgress % 2 == 1 ? progressBarWidth : 0,
    config: config.molasses,
  })

  const imageData = useStaticQuery(graphql`
    query {
      switchOff: file(
        relativePath: { eq: "support/faq/howToReset/switchOff.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 1024, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      switchOn: file(
        relativePath: { eq: "support/faq/howToReset/switchOn.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 1024, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  `)

  useEffect(() => {
    let resetTimer: NodeJS.Timer | undefined = undefined
    if (controllerActive && !resetTimer && controllerProgress < 9) {
      resetTimer = setInterval(() => {
        setintervalTime(controllerProgress % 2 == 0 ? 2000 : 5000)
        setControllerProgress(controllerProgress + 1)
      }, intervalTime)
    } else {
      console.log("interval already running, or completed")
      if (resetTimer) clearInterval(resetTimer)
      if (controllerActive) setControllerActive(false)
    }
    return () => {
      console.log("clearing interval")
      clearInterval(resetTimer)
    }
  }, [controllerActive, controllerProgress, intervalTime])

  return (
    <div
      style={{
        marginBottom: 50,
      }}
    >
      <NoteBox
        color={appColors.success_1}
        style={{
          margin: "30px 0px 50px 0px",
        }}
      >
        <h2 style={{ marginTop: 10, fontFamily: "Ubuntu" }}>
          Manual Reset procedure
        </h2>
        <p style={{ marginTop: 10, fontFamily: "Ubuntu" }}>
          To perform a manual reset, you need to switch on & switch off your
          device 4 time in a row, causing a hard reset event on HUElite device.
        </p>
        <h4 style={{ marginTop: 20 }}>
          Start the reset conteoller timer to begin.
        </h4>
        <p style={{ marginTop: 10, fontFamily: "Ubuntu" }}>
          You have to switch off on
          <text
            style={{
              backgroundColor: appColors.warning + "77",
              borderRadius: 5,
              margin: "0px 5px",
              padding: 2,
            }}
          >
            red
          </text>
          and switch on on
          <text
            style={{
              backgroundColor: appColors.successDark + "77",
              borderRadius: 5,
              margin: "0px 5px",
              padding: 2,
            }}
          >
            green
          </text>
        </p>
      </NoteBox>

      <SectionType2
        img={
          controllerProgress % 2 == 0 ? imageData.switchOff : imageData.switchOn
        }
        imgContainerStyle={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
        }}
        imgStyle={{
          maxWidth: 300,
          maxHeight: 300,
          ...globalStyles.shadowLight,
        }}
      >
        <div //reset text container
          style={{
            flex: 1,
            //backgroundColor: "blue",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            padding: 20,
          }}
        >
          <div //text section inner container
          >
            <p style={{ marginTop: 30 }}>
              Lets switch off the HUElite device first.
            </p>
            <p style={{ marginTop: 10 }}>
              It is very important that you match the switching timing with the
              timer.
            </p>
            <h3 style={{ marginTop: 20 }}>Press `START` button when ready</h3>
            <div // reset button container
              style={{
                marginTop: 20,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <button
                style={{
                  borderRadius: 10,
                }}
                onClick={() => {
                  if (!controllerActive) {
                    setControllerActive(true)
                    if (controllerProgress > 0) setControllerProgress(0)
                    if (intervalTime < 3000) setintervalTime(3000)
                  } else {
                    setControllerActive(false)
                    setControllerProgress(0)
                  }
                }}
              >
                <h2
                  style={{
                    padding: "5px 10px",
                    backgroundColor: appColors.black_1,
                    color: "#ffffff",
                  }}
                >
                  {controllerActive ? "STOP" : "START"}
                </h2>
              </button>
              <div // reset indicator
                style={{
                  backgroundColor:
                    controllerProgress % 2 == 0
                      ? appColors.warning
                      : appColors.successDark,
                  width: 20,
                  height: 20,
                  borderRadius: 5000,
                  marginLeft: 20,
                }}
              ></div>
            </div>
            <div // progress bar container
              style={{
                position: "relative",
                height: 10,
                width: progressBarWidth,
                borderRadius: 50,
                backgroundColor: appColors.backgrounds.greyHard,
                marginTop: 20,
                overflow: "hidden",
              }}
            >
              <animated.div
                style={{
                  height: 10,
                  //backgroundColor: appColors.primaryHighlight,
                  backgroundColor:
                    controllerProgress % 2 == 0
                      ? appColors.warning
                      : appColors.successDark,
                  ...barStyle,
                }}
              ></animated.div>
            </div>
          </div>
        </div>
      </SectionType2>
    </div>
  )
}
