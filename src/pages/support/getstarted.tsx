import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { SearchSharp } from "@mui/icons-material"
import { alpha, styled } from "@mui/material/styles"
import InputBase from "@mui/material/InputBase"
import { Box, Grid } from "@mui/material"
import Layout from "../../components/layouts/HeaderFooterCover"
import { GetStarted } from "../../screens/support/getStarted"

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: "transparent",
    fontSize: 16,
    padding: "10px 12px",
    margin: 0,

    "&:focus": {},
  },
}))

const GetStartedPage = () => {
  return (
    <Layout
      helmetConfig={{
        title: "get-started",
      }}
    >
      <GetStarted />
    </Layout>
  )
}

export default GetStartedPage
