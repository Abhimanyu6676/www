import * as React from "react"
import Layout from "../components/layouts/HeaderFooterCover"
import { Homepage } from "../screens/homepage"

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
