import React from "react"
import Layout from "../../components/layouts/HeaderFooterCover"
import Support from "../../screens/support"
type Props = {}

const Comp = (props: Props) => {
  return (
    <Layout
      helmetConfig={{
        title: "support",
      }}
    >
      <Support />
    </Layout>
  )
}

export default Comp
