import { graphql, useStaticQuery } from "gatsby"
import React, { useEffect, useState } from "react"
import { useTransition, animated } from "react-spring"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "./index.module.css"
import appColors from "../../../styles/appColors"
import { Accordion } from "../accordion"

type Props = {}

const varients = [
  {
    heading: "5 mtr",
  },
  {
    heading: "10 mtr",
  },
]

export default (props: Props) => {
  const data = useStaticQuery(graphql`
    query {
      amazon_marketplace_icon: file(
        relativePath: { eq: "icon/amazon_marketplace.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED)
        }
      }
      homepageSPSTthumbs: allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
          dir: {
            eq: "/Users/abhimanyu/Documents/HUElite/web/src/images/Products/Strips/spectrum_strip/productPhotos"
          }
        }
        sort: { fields: name }
      ) {
        edges {
          node {
            id
            childImageSharp {
              gatsbyImageData(width: 200, layout: CONSTRAINED)
            }
          }
        }
      }
      homepageSPSTpics: allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
          dir: {
            eq: "/Users/abhimanyu/Documents/HUElite/web/src/images/Products/Strips/spectrum_strip/productPhotos"
          }
        }
        sort: { fields: name }
      ) {
        edges {
          node {
            id
            childImageSharp {
              gatsbyImageData(width: 600, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  `)
  return (
    <div
      style={{ position: "relative", display: "flex", padding: "50px 0px" }}
      className={styles.container}
    >
      <Slider
        homepageSPSTpics={data.homepageSPSTpics}
        homepageSPSTthumbs={data.homepageSPSTthumbs}
      />
      <div //content container
        className={styles.contentContainer}
      >
        <div // top text container
        >
          <p style={{ margin: 0 }}>HUElite</p>
          <h1 style={{ margin: 0 }}>HUElite Spectrum Strip</h1>
          <h5 style={{ margin: 0 }}>60led/mtr</h5>
          <div // varients container
            className="flex-container"
            style={{
              marginTop: 10,
              //backgroundColor: "red",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            {varients.map((varient, varientIndex) => {
              return (
                <div
                  style={{
                    marginRight: 30,
                    marginTop: 15,
                    height: 40,
                    width: 100,
                    backgroundColor: "#000000",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <h4 style={{ color: "#ffffff", margin: 0, fontWeight: 500 }}>
                    {varient.heading}
                  </h4>
                </div>
              )
            })}
          </div>
          <h2 style={{ marginBottom: 0, marginTop: 20 }}>Rs-1999/-</h2>
          <h5
            style={{
              margin: 0,
              backgroundColor: appColors.successDark,
              borderRadius: 50,
              padding: "3px 10px",
              width: "fit-content",
              color: "#ffffff",
            }}
          >
            Buy now & get 25% off
          </h5>
        </div>
        <div // Add to cart section
          style={{
            backgroundColor: "red",
            marginTop: 30,
          }}
        >
          <a href="https://www.amazon.in/s?me=ADEJJYXA274FU&ref=sf_seller_app_share_new">
            <button
              style={{
                height: 50,
                width: "100%",
                backgroundColor: "#000",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h3 style={{ color: "#fff", textAlign: "center" }}>
                Buy from amazon
              </h3>
              <GatsbyImage
                image={getImage(data.amazon_marketplace_icon)}
                style={{
                  width: 30,
                  height: 30,
                  marginLeft: 20,
                }}
              />
            </button>
          </a>
        </div>

        <div // accordian container
        >
          <AccordianSection />
        </div>
      </div>
    </div>
  )
}

const AccordianSection = () => {
  const [accordianIndex, setAccordianIndex] = useState(0)
  return (
    <div>
      <Accordion.Heading
        isOpen={accordianIndex == 0}
        onClick={() => {
          if (accordianIndex != 0) setAccordianIndex(0)
        }}
        containerStyle={{
          marginTop: 20,
        }}
      >
        <h4 style={{ margin: 0, flex: 1 }}>Description</h4>
      </Accordion.Heading>
      <Accordion.Content isVisible={accordianIndex == 0}>
        <p style={{}}>
          Music Sync, colors so live that you need to feel it yourself, more
          creativity with Custom Mode Creation, smoother app control experience,
          anytime, anywhere your whole space is at your fingertips – literally.
        </p>
        <p style={{}}>
          Works with Alexa, Huelite Smart LED strip lights could be controlled
          easily. Power on/off, adjust brightness, or change colors to create
          the ambiance needed for your morning routine, parties, or movie
          nights. (Note: 5G Wi-Fi not supported){" "}
        </p>
      </Accordion.Content>
      <Accordion.Heading
        isOpen={accordianIndex == 1}
        title="HIGHLIGHTS"
        onClick={() => {
          if (accordianIndex != 1) setAccordianIndex(1)
        }}
      />
      <Accordion.Content isVisible={accordianIndex == 1} style={{}}>
        <h4
          style={{
            marginTop: 30,
          }}
        >
          Key features
        </h4>
        <p style={{}}>
          Music Sync, colors so live that you need to feel it yourself, more
          creativity with Custom Mode Creation, smoother app control experience,
          anytime, anywhere your whole space is at your fingertips – literally.
        </p>
        <h4
          style={{
            marginTop: 30,
          }}
        >
          Convenient Voice Control
        </h4>
        <p style={{}}>
          Works with Alexa, Huelite Smart LED strip lights could be controlled
          easily. Power on/off, adjust brightness, or change colors to create
          the ambiance needed for your morning routine, parties, or movie
          nights. (Note: 5G Wi-Fi not supported){" "}
        </p>
        <h4
          style={{
            marginTop: 30,
          }}
        >
          Wide Applications
        </h4>
        <p style={{}}>
          The strip lights are 60 led/mtr IP20 non waterproof Color changing
          with 16 Million colors. increase and decrease control brightness
          control & Voice control. It is ideal for indoor lighting decoration,
          such as kitchen, under cabinet, dining room, bedroom, TV Backlighting,
          automobile, mirror, balcony, party, etc
        </p>
        <h4
          style={{
            marginTop: 30,
          }}
        >
          User-Friendly Installation
        </h4>
        <p style={{}}>
          Install your smart light strip conveniently and with more creative
          freedom, thanks to the 3M adhesive tape and a cuttable design. Attach
          them to any dry, clean indoor surface with ease.
        </p>
        <h4
          style={{
            marginTop: 30,
          }}
        >
          Warranty & Support
        </h4>
        <p style={{}}>
          One Year Warranty On Controller And Power Adapter, lifetime In-app
          technical chat support.
        </p>
      </Accordion.Content>
      <Accordion.Heading
        isOpen={accordianIndex == 2}
        title="PRODUCT SPECIFICATION"
        onClick={() => {
          if (accordianIndex != 2) setAccordianIndex(2)
        }}
      />
      <Accordion.Content
        isVisible={accordianIndex == 2}
        style={{
          padding: 0,
        }}
      >
        <DiscriptionContainer heading="Length" spec="5 mtr" />
        <DiscriptionContainer heading="Wattage" spec="14.4 Watts" />
        <DiscriptionContainer heading="Number of leds" spec="300" />
        <DiscriptionContainer
          heading="Included Components"
          spec="1x Power adapter, 1x Wi-Fi Smart controller, 1x Huelite starter guide, 1x 5m Led strip roll"
        />
        <DiscriptionContainer
          heading="Key Features"
          spec="Dimmable, Custom Mode Creation, Colour Changing, Amazon Alexa Control, Music Sync, Control from Anywhere"
        />
        <DiscriptionContainer
          heading="Applications"
          spec="❤Suitable for home lighting, light up your whole house like living room, Bedroom, Upstairs, Kitchen, cabinet, Porch, Computer,back of TV, etc. ❤Suitable for decorating hotels, clubs, bars, malls, shops etc. ❤Suitable for festival and parties decorations, festivals such as Diwali, Holi and Christmas etc., ❤Great for Lighting the shows, exhibitions and advertising signs etc. ❤Ideal gift for your family and friends."
        />
        <DiscriptionContainer
          heading="Manufacturer"
          spec="Sternet Smart Homes Private Limited"
        />
      </Accordion.Content>
    </div>
  )
}

const Slider = (props: { homepageSPSTpics: any; homepageSPSTthumbs: any }) => {
  const [currIndex, setCurrIndex] = useState(0)

  const transition = useTransition(currIndex, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
    config: { duration: 700 },
  })

  useEffect(() => {
    let __tempInterval = setInterval(() => {
      if (currIndex == props.homepageSPSTpics.edges.length - 1) {
        setCurrIndex(0)
      } else {
        setCurrIndex(currIndex + 1)
      }
    }, 3000)
    return () => {
      clearInterval(__tempInterval)
    }
  }, [currIndex])

  return (
    <div className={styles.imgContainer} style={{ position: "relative" }}>
      <div // images container
        className={styles.imgWidth}
        style={{
          overflow: "hidden",
          //backgroundColor: "red",
          position: "relative",
          display: "flex",
        }}
      >
        {transition((animatedStyles, item) => {
          return (
            <animated.div /// slides
              key={"_" + item}
              className={styles.imgWidth}
              style={{
                ...animatedStyles,
                position: "absolute",
                //backgroundColor: "blue",
              }}
            >
              <GatsbyImage
                image={
                  props.homepageSPSTpics.edges[item].node.childImageSharp
                    .gatsbyImageData
                }
                className={styles.imgWidth}
                style={{}}
                alt="HUElite"
              />
            </animated.div>
          )
        })}
      </div>
      <div
        style={{
          position: "absolute",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 3,
        }}
        className={styles.imgWidth}
      >
        <div style={{ width: 50, height: 50, backgroundColor: "#444" }} />
        <div style={{ width: 50, height: 50, backgroundColor: "#444" }} />
      </div>
    </div>
  )
}

const DiscriptionContainer = (props: { spec: string; heading: string }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        minHeight: 40,
        borderBottomWidth: 1,
        borderBottomStyle: "solid",
        borderColor: "#aaa",
        padding: "0px 10px",
      }}
    >
      <div style={{ display: "flex", flex: 1 }}>
        <p
          style={{
            margin: "5px 0px",
            fontWeight: 500,
            color: "#444",
          }}
        >
          {props.heading}
        </p>
      </div>
      <div style={{ display: "flex", flex: 1 }}>
        <p
          style={{
            margin: "5px 0px",
            color: "#444",
          }}
        >
          {props.spec}
        </p>
      </div>
    </div>
  )
}
