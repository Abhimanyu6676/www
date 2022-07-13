import React from "react"
import Footer from "./footer"
import Header from "./header"
//@ts-ignore
import Helmet from "react-helmet"

export default (props: {
  children?: any
  headerStyle?: React.CSSProperties
  transparentHeader?: boolean
  helmetConfig?: {
    title?: string
    description?: string
    themeColor?: string
  }
}) => {
  return (
    <div>
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
        ></meta>
        <title>{props.helmetConfig?.title}</title>
        <meta name="description" content={props.helmetConfig?.description} />
      </Helmet>
      <Header style={props.headerStyle} transparent={props.transparentHeader} />
      {props.children}
      <Footer />
    </div>
  )
}
