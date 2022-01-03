import React from "react"
import { Ionicons } from "@expo/vector-icons"
//@ts-ignore
import styles from "./FaqSearchComp.module.scss"
import { useState } from "react"

export default () => {
  const [faq, setFaq] = useState("")

  return (
    <div className={styles.inputContainer}>
      <input className={styles.input} placeholder="Questions? Look here." />
      <Ionicons name="ios-search" size={24} color="black" style={{ position: "absolute", right: 10 }} />
    </div>
  )
}
