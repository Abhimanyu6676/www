import React from "react"
import Layout from "../components/common/layout"
import HomePage from "../components/screens/homePage"
import SEO from "../components/seo"


export default () => (
  <Layout>
    <SEO title="home" />
    <HomePage />
  </Layout>
)
