import React from "react"
import { MaterialIcons } from "@expo/vector-icons"
//@ts-ignore
import styles from "./index.module.scss"

interface Props {}

export default (props: Props) => {
  return (
    <div style={{ backgroundColor: "#fff", marginTop: 30, paddingBottom: 30 }}>
      <h1 style={{ textAlign: "center" }}>SHOP NOW</h1>
      <div className={styles.style1}>
        <div /// icon 1
          className={styles.iconContainer}
        >
          <MaterialIcons name="local-shipping" size={60} color="#aaa" />
          <h4 style={{ color: "#aaa" }}>Free Shipping</h4>
        </div>
        <div /// icon 2
          className={styles.iconContainer}
        >
          <MaterialIcons name="policy" size={60} color="#aaa" />
          <h4 style={{ color: "#aaa" }}>10 day return policy</h4>
        </div>
        <div /// icon 3
          className={styles.iconContainer}
        >
          <MaterialIcons name="support-agent" size={60} color="#aaa" />
          <h4 style={{ color: "#aaa" }}>Full technical support</h4>
        </div>
      </div>
    </div>
  )
}
