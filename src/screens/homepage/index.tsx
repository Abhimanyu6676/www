import React from "react"
import { Sec1 } from "./Sec1"
import { Sec2 } from "./Sec2"

type Props = {}

export const Homepage = (props: Props) => {
  return (
    <div>
      <Sec1 />
      <Sec2 />
    </div>
  )
}
