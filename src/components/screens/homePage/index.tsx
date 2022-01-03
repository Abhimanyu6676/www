import React from "react"
import Sec1 from "./section1"
import Section2 from "./section2"
import SubscribeSection from "../../common/subscribeSection"

interface Props {}
const Component = ({}: Props) => {
  return (
    <div className="-bg-fff-" style={{ minHeight: "50vh" }}>
      <Sec1 />
      <Section2 />
      {/*  <button
        onClick={() => {
          //@ts-ignore
          typeof window !== undefined && window.gtag("event", "click")
        }}
      >
        test button
      </button> */}
      <SubscribeSection />
    </div>
  )
}

export default Component
