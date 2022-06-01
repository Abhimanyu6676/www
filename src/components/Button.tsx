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
        ...style,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
