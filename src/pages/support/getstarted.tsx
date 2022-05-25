import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import { SearchSharp } from "@mui/icons-material"
import { alpha, styled } from "@mui/material/styles"
import InputBase from "@mui/material/InputBase"
import { Box, Grid } from "@mui/material"

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
  const images = useStaticQuery(graphql`
    query {
      stripSolid: file(relativePath: { eq: "icon/stripSolid.png" }) {
        childImageSharp {
          fixed(quality: 100, width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      mobileBlogMain: file(
        relativePath: { eq: "getStarted/blogMain_mobile.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 479, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tabletBlogMain: file(
        relativePath: { eq: "getStarted/blogMain_tablet.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 767, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      desktopBlogMain: file(
        relativePath: { eq: "getStarted/blogMain_desktop.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1600, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  /**
   *  @description irrespective of the CSS rule `last come first priority` gatsby image sources follow `First come First priority`, thus order of media sources is important
   *
   */
  const sources = [
    images.mobileBlogMain.childImageSharp.fluid,
    {
      ...images.desktopBlogMain.childImageSharp.fluid,
      media: `(min-width: 767px)`,
    },
    {
      ...images.tabletBlogMain.childImageSharp.fluid,
      media: `(min-width:469px)`,
    },
  ]

  return (
    <div style={{}}>
      {/* #region [rgba(255, 0, 0, 0.1)] => hero section */}
      <div
        style={{
          position: "relative",
        }}
      >
        <Img fluid={sources} style={{ zIndex: 1 }} />
        <div
          style={{
            width: "100%",
            height: "100%",
            //backgroundColor: "red",
            zIndex: 2,
            position: "absolute",
            top: 0,
            left: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#ffffff",
          }}
        >
          <h1 style={{}}>How can we help?</h1>
          <div
            style={{
              width: "80%",
              height: 50,
              backgroundColor: "#ffffff",
              borderRadius: 25,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              maxWidth: 400,
            }}
          >
            <SearchSharp
              style={{ color: "grey", width: 30, height: 30, marginLeft: 15 }}
            />
            <BootstrapInput fullWidth placeholder="Search help article" />
            {/*  <h3
              style={{ color: "#777777", fontWeight: "normal", marginLeft: 15 }}
            >
              Search help article
            </h3> */}
          </div>
        </div>
      </div>
      {/* #endregion */}

      <div
        style={{
          padding: "0px 10%",
          marginTop: 60,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Getting started guide</h1>
        <p style={{ textAlign: "center", maxWidth: 700 }}>
          Browse tips and tricks for getting set up, troubleshoot a particular
          issue, submit enquiries or learn more about how you can use your
          HUElite products.
        </p>
      </div>

      <Grid
        justifyContent={"center"}
        container
        spacing={2}
        style={{ padding: "5%" }}
      >
        <Grid /** getting started guide */
          item
          xs={12}
          sm={4}
          style={columnCenter}
        >
          <div style={boxStyle}>
            <Img
              fixed={images.stripSolid.childImageSharp.fixed}
              style={{ width: 80, height: 80, marginTop: 20 }}
            />
            <h4 style={{ marginTop: 10, textAlign: "center" }}>How to pair</h4>
          </div>
        </Grid>
        <Grid /** how to pair */ item xs={12} sm={4} style={columnCenter}>
          <div style={boxStyle}>
            <Img
              fixed={images.stripSolid.childImageSharp.fixed}
              style={{ width: 80, height: 80, marginTop: 20 }}
            />
            <h4 style={{ marginTop: 10, textAlign: "center" }}>
              How to install
            </h4>
          </div>
        </Grid>
        <Grid /** how to link with Alexa */
          item
          xs={12}
          sm={4}
          style={columnCenter}
        >
          <div style={boxStyle}>
            <Img
              fixed={images.stripSolid.childImageSharp.fixed}
              style={{ width: 80, height: 80, marginTop: 20 }}
            />
            <h4 style={{ marginTop: 10, textAlign: "center" }}>
              How to link with Alexa
            </h4>
          </div>
        </Grid>
        <Grid /** how to link with googleAssistant */
          item
          xs={12}
          sm={4}
          style={columnCenter}
        >
          <div style={boxStyle}>
            <Img
              fixed={images.stripSolid.childImageSharp.fixed}
              style={{ width: 80, height: 80, marginTop: 20 }}
            />
            <h4
              style={{
                marginTop: 10,
                textAlign: "center",
              }}
            >
              how to link with google Assistant
            </h4>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

const columnCenter: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}
const boxStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "90%",
  maxWidth: 300,
  height: "100%",
  backgroundColor: "#ffffff",
  borderRadius: 10,
  boxShadow: "0px 0px 8px -1px rgba(36,36,36,0.75)",
  transition: "width 2s",
  padding: "0px 2%",
  marginTop: 20,
}
export default GetStartedPage
