import React from "react"
import * as styles from "./accordion.module.css"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"

type Props = {}

const Item = (props: Props) => {
  return <div>Accordion</div>
}

const Heading = (props: {
  onClick?: () => void
  title?: string
  children?: any
  containerStyle?: React.CSSProperties
  isOpen?: boolean
}) => {
  return (
    <div //accordian heading container
      onClick={props.onClick}
      style={{
        //backgroundColor: "#fff",
        padding: "10px 0px",
        borderBottom: "1px solid #aaa",
        ...props.containerStyle,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {props.children ? (
          props.children
        ) : (
          <h3 style={{ margin: 0, flex: 1 }}>{props.title}</h3>
        )}
        <KeyboardArrowDownIcon
          fontSize="medium"
          style={{
            transition: "transform 0.5s ease-in-out",
            transform: props.isOpen ? "rotate(180deg)" : "unset",
          }}
        />
      </div>
    </div>
  )
}

const Content = (props: {
  children?: any
  isVisible?: boolean
  style?: React.CSSProperties
}) => {
  return (
    <div //accordian content container
      style={{
        overflow: "hidden",
        transition: "max-height 0.5s ease-in-out",
        maxHeight: props.isVisible ? 300 : 0,
        //transition: "height 0.5s ease-in-out",
        //height: props.isVisible ? 300 : 0,
        overflowY: "scroll",
        padding: "0px 10px",
        ...props.style,
      }}
      className={styles.contentContainer}
    >
      {props.children}
    </div>
  )
}

Item.Heading = Heading
Item.Content = Content

export const Accordion = Item
