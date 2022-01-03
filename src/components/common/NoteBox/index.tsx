import { Link } from "gatsby"
import React from "react"

export const NoteBox = ({
  compId,
  color = "#F1C40F",
  ...props
}: {
  compId?: string
  heading?: string
  children?: any
  color?: string
}) => {
  return (
    <div
      id={compId}
      style={{
        backgroundColor: color + "09",
        width: "100%",
        paddingLeft: 30,
        paddingRight: 10,
        borderColor: color,
        borderStyle: "solid",
        borderWidth: 0.5,
        borderLeftWidth: 10,
        color: "#666666",
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5,
        marginBottom: 10,
        marginTop: 10,
      }}
    >
      <h3>{props.heading ? props.heading : "Troubleshoot"}:</h3>
      {props?.children}
    </div>
  )
}
