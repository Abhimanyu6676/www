import React from "react"

export default ({
  children,
  onClick = () => {},
  style,
}: {
  children?: any
  onClick?: () => void
  style?: React.CSSProperties
}) => {
  return (
    <button
      style={{
        backgroundColor: "#ffffff00",
        borderWidth: 0,
        ...style,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
