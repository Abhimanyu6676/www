import React from "react"
import { Link } from "gatsby"

import Layout from "../components/common/layout"
import SEO from "../components/seo"
import HomePage from "../components/screens/homePage"

const SecondPage = () => (
  <Layout>
    <SEO title="home" />
    <HomePage />
  </Layout>
)

export default SecondPage
