import React, { useEffect, useState } from "react"
import { useSpring, animated } from "react-spring"
import { NoteBox } from "../../../components/common/NoteBox"
import appColors from "../../../styles/appColors"

type Props = {}

export const HowToReset = (props: Props) => {
  const progressBarWidth = 150
  const [intervalTime, setintervalTime] = useState(3000)
  const [controllerActive, setControllerActive] = useState(false)
  const [controllerProgress, setControllerProgress] = useState(0)
  const barStyle = useSpring({
    width: controllerProgress % 1 == 0 ? progressBarWidth : 0,
  })

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
    <div>
      <NoteBox
        color={appColors.success_1}
        style={{
          margin: "30px 0px",
        }}
      >
        <h2 style={{ marginTop: 10, fontFamily: "Ubuntu" }}>
          Manual Reset procedure
        </h2>
        <p style={{ marginTop: 10, fontFamily: "Ubuntu" }}>
          To perform a manual reset, you need to switch on & switch off your
          device 4 time in a row, causing a hard reset event on HUElite device.
          Time interval between each cycle is of importance here.
        </p>
        <h4 style={{ marginTop: 20 }}>
          Kindly follow the reset conteoller timer to begin.
        </h4>
        <p style={{ marginTop: 10, fontFamily: "Ubuntu" }}>
          You have to switch off on
          <text
            style={{
              backgroundColor: appColors.warning,
              margin: "0px 5px",
              padding: 2,
            }}
          >
            red
          </text>
          and switch on on
          <text
            style={{
              backgroundColor: appColors.successDark,
              margin: "0px 5px",
              padding: 2,
            }}
          >
            green
          </text>
        </p>
      </NoteBox>
      <div // reset controller section
        style={{
          //backgroundColor: "red",
          display: "flex",
          flexDirection: "row",
          width: "100%",
        }}
      >
        <div // reset indicator contaienr
          style={{
            flex: 1,
            //backgroundColor: "green",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div // reset indicator
            style={{
              backgroundColor:
                controllerProgress % 2 == 1
                  ? appColors.successDark
                  : appColors.warning,
              width: 200,
              height: 200,
              borderRadius: 5000,
              margin: 20,
            }}
          ></div>
          <button
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
          <div // progress bar container
            style={{
              position: "relative",
              height: 10,
              width: progressBarWidth,
              borderRadius: 50,
              backgroundColor: appColors.backgrounds.greyHard,
              margin: "20px 0px",
              overflow: "hidden",
            }}
          >
            <animated.div
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                height: 10,
                backgroundColor: appColors.primaryHighlight,
                ...barStyle,
              }}
            ></animated.div>
          </div>
        </div>
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
            <p>
              It is very important that you match the switching timing with the
              timer.
            </p>
            <h3 style={{ marginTop: 20 }}>Press `START` button when ready</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
