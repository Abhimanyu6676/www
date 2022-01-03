import React from "react"
import { AntDesign } from "@expo/vector-icons"
//@ts-ignore
import styles from "./type2.module.scss"

interface Props {}

export default (props: Props) => {
  return (
    <div
      style={{
        backgroundColor: "#f3f3f3",
        padding: "30px 0px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{ textAlign: "center", padding: "0px 30px" }}>Sign up and save</h1>
      <p style={{ textAlign: "center", marginTop: 10, padding: "0px 30px" }}>
        Sign up to our mailing list to receive setup tips, product launches and exclusive offers.
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "90vw",
          maxWidth: 500,
          marginLeft: "5vw",
          marginRight: "5vw",
          marginTop: 30,
        }}
      >
        <input
          placeholder="enter your email"
          style={{
            border: "0px solid #fff",
            height: 50,
            padding: "0 10px",
            flex: 1,
          }}
        />
        <div
          style={{
            height: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "0px 15px",
            backgroundColor: "#2d2f30",
          }}
        >
          <h3 className={styles.subscribeText}>Subscribe</h3>
          <AntDesign name="arrowright" size={24} className={styles.subscribeIcon} />
        </div>
      </div>
    </div>
  )
}
