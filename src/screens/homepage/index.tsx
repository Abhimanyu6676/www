import React from "react"
import { HomeFeaturesSection } from "./HomeFeaturesSection"
import { Sec1 } from "./Sec1"
import Sec2 from "./Sec2"
import { Sec3 } from "./Sec3"
import { Sec4 } from "./Sec4"

type Props = {}

export const Homepage = (props: Props) => {
  return (
    <div>
      <Sec1 />
      <Sec2 />
      <HomeFeaturesSection />
      <Sec3 />
      <Sec4 />
    </div>
  )
}
