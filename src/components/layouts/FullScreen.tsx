import React from "react"

type Props = {
  style?: React.CSSProperties
  children?: any
}
/**
 *
 * @param props style ?: React.CSSProperties
 * @param props children?: any
 *
 * @note `flex-coulmn` by default
 *
 * @returns fill size division as per device screen size
 */
export const FullScreen = (props: Props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        flexGrow: 1,
        position: "fixed",
        height: "100%",
        width: "100%",
        ...props.style,
      }}
    >
      {props.children}
    </div>
  )
}
