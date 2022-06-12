import React from "react"
import Footer from "./footer"
import Header from "./header"
//@ts-ignore
import Helmet from "react-helmet"

export default (props: {
  children?: any
  headerStyle?: React.CSSProperties
  transparentHeader?: boolean
}) => {
  return (
    <div>
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
        ></meta>
      </Helmet>
      <Header style={props.headerStyle} transparent={props.transparentHeader} />
      {props.children}
      <Footer />
    </div>
  )
}
