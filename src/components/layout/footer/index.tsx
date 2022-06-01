import React from "react"
//@ts-ignore
import * as styles from "./index.module.css"

type Props = {}
export default (props: Props) => {
  return (
    <div
      className={styles.main}
      style={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <FooterMenu />
    </div>
  )
}

const FooterMenu = () => {
  return (
    <div
      style={{
        height: 200,
        backgroundColor: "red",
      }}
    >
      asdhgj
    </div>
  )
}
