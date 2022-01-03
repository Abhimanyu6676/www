import React from "react"
import Layout from "../components/common/layout"
//import HomePage from "../components/screens/homePage"
import NewHomePage from "../components/screens/homePage/newIndex"
import SEO from "../components/seo"

export default () => (
  <Layout>
    <SEO title="home" />
    <NewHomePage />
  </Layout>
)
