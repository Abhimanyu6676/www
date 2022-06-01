import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import { SearchSharp } from "@mui/icons-material"
import { alpha, styled } from "@mui/material/styles"
import InputBase from "@mui/material/InputBase"
import { Box, Grid } from "@mui/material"
import Layout from "../../components/layout"
import { GetStarted } from "../../components/screens/support/getStarted"

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
    <Layout>
      <GetStarted />
    </Layout>
  )
}

export default GetStartedPage
