import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { useTransition, useSpring, animated } from "react-spring"
import { ScrollView } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { FadeInSection } from "../FadeInSection"
//@ts-ignore
import styles from "./index.module.scss"

export default (props: {
  heading?: string
  headerStyles?: React.CSSProperties
  children?: any
  headingNode?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
}) => {
  const [show, setShow] = useState<boolean>(false)

  return (
    <div
      style={{
        width: "100vw",
      }}
    >
      {props.headingNode ? (
        props.headingNode
      ) : (
        <div /// heading container
          style={{
            marginLeft: 30,
            marginRight: 30,
            borderColor: "#eee",
            borderStyle: "solid",
            borderWidth: 0,
            borderTopWidth: 2,
            borderBottomWidth: 2,
            paddingTop: 2,
            paddingBottom: 2,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            ...props.headerStyles,
          }}
        >
          <h4
            style={{
              color: "#2d2f30",
              fontWeight: "bold",
              marginBottom: 0,
              flex: 1,
            }}
          >
            {props.heading}
          </h4>
          <div
            className={styles.arrow}
            style={{
              transform: `rotateX(${show ? "0" : "180"}deg)`,
            }}
            onClick={() => {
              console.log("toggle Show")
              setShow(!show)
            }}
          >
            <MaterialIcons
              name="arrow-drop-up"
              size={40}
              color="#2d2f30"
              style={{}}
            />
          </div>
        </div>
      )}
      <div /// content container
      >
        {show && <FadeInSection>{props?.children}</FadeInSection>}
      </div>
    </div>
  )
}
