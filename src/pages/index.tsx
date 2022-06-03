import * as React from "react"
import Layout from "../components/layout"
import { Homepage } from "../components/screens/homepage"

const IndexPage = () => {
  return (
    <Layout
      headerStyle={{
        //backgroundColor: "#aaaaaa77",
        position: "absolute",
        top: 0,
        zIndex: 10,
        width: "100vw",
      }}
      transparentHeader={true}
    >
      <Homepage />
    </Layout>
  )
}

export default IndexPage
