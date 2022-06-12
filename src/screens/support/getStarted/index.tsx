import { Container, Grid } from "@mui/material"
import { navigate } from "gatsby"
import React from "react"
import globalStyles from "../../../styles/globalStyles"
import {
  FadeInSection,
  FadeInSectionCSS,
} from "../../../components/common/fadeInSection"
import { ContactUs } from "../../../components/common/contactUs"

interface Item_i {
  heading: string
  subHeading: string
  link: string
  style?: React.CSSProperties
}

const links: Item_i[] = [
  {
    heading: "How to Install",
    subHeading: "4 quick steps n easy DIY installation process...",
    link: "/support/how_to_install",
    style: {
      background:
        "linear-gradient(45deg, rgba(255,0,0,0.5060399159663865) 2%, rgba(255,51,0,0.6208858543417367) 46%, rgba(255,177,117,0.5844712885154062) 100%)",
    },
  },
  {
    heading: "How to Pair",
    subHeading:
      "Lets get started with pairing your device with HUElite Smart App...",
    link: "/support/how_to_pair",
    style: {
      background:
        "linear-gradient(45deg, rgba(255,53,0,0.5984768907563025) 2%, rgba(255,109,0,0.6208858543417367) 44%, rgba(255,224,0,0.5844712885154062) 100%)",
    },
  },
  {
    heading: "How to connect with Alexa",
    subHeading:
      "HUElite devices provide even better experience withAlexa Integration. It's never been easier to connect with your home...",
    link: "/support/link_alexa",
    style: {
      background:
        "linear-gradient(45deg, rgba(255,0,202,0.5060399159663865) 2%, rgba(255,0,104,0.6208858543417367) 46%, rgba(255,117,175,0.5844712885154062) 100%)",
    },
  },
]
type Props = {}
export const GetStarted = (props: Props) => {
  return (
    <div
      style={
        {
          //backgroundColor: "green",
        }
      }
    >
      <div //top text section
        style={{
          margin: "0px 20px",
        }}
      >
        <h1 style={{}}>Support / Getting Setup</h1>
        <h3 style={{ marginTop: 40 }}>Manual & Guides</h3>
      </div>
      <Grid //link items
        container
        justifyContent="center"
        alignItems="center"
        style={
          {
            //backgroundColor: "blue",
          }
        }
      >
        {links.map((item, index) => {
          return (
            <Grid
              xs={10}
              sm={5}
              style={{
                //backgroundColor: "red",
                margin: 10,
              }}
            >
              <Item item={item} />
            </Grid>
          )
        })}
      </Grid>
      <ContactUs
        style={{
          margin: "50px 0px",
        }}
      />
    </div>
  )
}

const Item = (props: { item: Item_i }) => {
  return (
    <FadeInSectionCSS
      style={{
        display: "flex",
        borderRadius: 10,
        minWidth: 300,
        minHeight: 300,
        overflow: "hidden",
        ...globalStyles.shadowLight,
        ...props.item.style,
      }}
    >
      <button
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          //backgroundColor: "blue",
          padding: "10px 20px",
        }}
        onClick={() => {
          navigate(props.item.link)
        }}
      >
        <h2
          style={{
            color: "#ffffff",
          }}
        >
          {props.item.heading}
        </h2>
        <h4
          style={{
            color: "#ffffff",
            fontWeight: "normal",
            marginTop: 0,
          }}
        >
          {props.item.subHeading}
        </h4>
      </button>
    </FadeInSectionCSS>
  )
}
