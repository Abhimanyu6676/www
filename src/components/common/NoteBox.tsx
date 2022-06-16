import React from "react"

type Props = {
  color?: string
  children?: any
  style?: React.CSSProperties
}

export const NoteBox = (props: Props) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          backgroundColor: props.color ? props.color + "aa" : "#F1C40Faa",
          borderRadius: 5,
          padding: "10px 10px",
          borderLeftColor: props.color ? props.color : "#F1C40F",
          borderLeftWidth: 5,
          borderLeftStyle: "solid",
          maxWidth: 600,
          minWidth: 300,
        }}
      >
        {props.children}
      </div>
    </div>
  )
}
