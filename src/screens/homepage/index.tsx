import React from "react"
import { Sec1 } from "./Sec1"
import Sec2 from "./Sec2"
import { Sec3 } from "./Sec3"
import { Sec4 } from "./Sec4"
import { Sec5 } from "./Sec5"

type Props = {}

export const Homepage = (props: Props) => {
  return (
    <div>
      <Sec1 />
      <Sec2 />
      <Sec3 />
      <Sec4 />
      <Sec5 />
    </div>
  )
}
