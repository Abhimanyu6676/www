import { Link } from "gatsby"
import React from "react"
import { View, Text } from "react-native"

interface Props {
  /** @description paramater optionally used for specfic rendering according to blog UUID, else render text if doesn't match the specified phrases */
  title?: string
  children?: any
}

export default (props: Props) => {
  return (
    <div
      style={{
        width: "100vw",
        minHeight: 40,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F1C40F",
        position: "fixed",
        zIndex: 2,
        paddingTop: 10,
        paddingBottom: 10,
      }}
    >
      {props.title == "uuid-how_to_pair" ? (
        <PairingV2WarningBox />
      ) : props.title == "uuid-how_to_pair_v1" ? (
        <PairingV1WarningBox />
      ) : (
        <h5 style={{ textAlign: "center", color: "#444" }}>{props.title}</h5>
      )}
    </div>
  )
}

/**
 *
 * @returns Link with `h5` tag
 */
const PairingV2WarningBox = () => {
  return (
    <Link
      style={{}}
      to={"/support/how_to_pair_v1"}
      onClick={() => {
        console.log()
      }}
    >
      <h5 style={{ textAlign: "center", marginLeft: "5vw", marginRight: "5vw", color: "#444" }}>
        This guide is for HUElite app version 2.x.x, for version 1.x.x guide follow the<h5 style={{ textDecoration: "underline" }}> link here</h5>
      </h5>
    </Link>
  )
}

const PairingV1WarningBox = () => {
  return (
    <Link
      style={{}}
      to={"/support/how_to_pair"}
      onClick={() => {
        console.log()
      }}
    >
      <h5 style={{ textAlign: "center", marginLeft: "5vw", marginRight: "5vw", color: "#444" }}>
        This guide is for HUElite app version 1.x.x, for version 2.x.x guide follow the<h5 style={{ textDecoration: "underline" }}> link here</h5>
      </h5>
    </Link>
  )
}
