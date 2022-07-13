import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React, { useEffect, useState } from "react"
import { animated, useTransition } from "react-spring"
import { useSwipeable } from "react-swipeable"
import { Accordion } from "../../../components/common/accordion"
import appColors from "../../../styles/appColors"
import globalStyles from "../../../styles/globalStyles"
import * as styles from "./index.module.css"

const varients = [
  {
    heading: "5 mtr",
  },
  {
    heading: "10 mtr",
  },
]

type Props = {}
export const ProductSection1 = (props: Props) => {
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
      style={{
        position: "relative",
        display: "flex",
        padding: "50px 0px",
        backgroundColor: appColors.backgrounds.greyLight,
      }}
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
                  <h4 style={{ color: "#ffffff", fontWeight: 500 }}>
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
          <AccordionSection />
        </div>
      </div>
    </div>
  )
}

const AccordionSection = () => {
  const [accordionIndex, setAccordionIndex] = useState(0)
  return (
    <div>
      <Accordion.Heading
        isOpen={accordionIndex == 0}
        onClick={() => {
          if (accordionIndex != 0) setAccordionIndex(0)
        }}
        containerStyle={{
          marginTop: 20,
        }}
      >
        <h4 style={{ margin: 0, flex: 1 }}>Description</h4>
      </Accordion.Heading>
      <Accordion.Content isVisible={accordionIndex == 0}>
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
        isOpen={accordionIndex == 1}
        title="HIGHLIGHTS"
        onClick={() => {
          if (accordionIndex != 1) setAccordionIndex(1)
        }}
      />
      <Accordion.Content isVisible={accordionIndex == 1} style={{}}>
        <h4 style={{}}>Key features</h4>
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
        isOpen={accordionIndex == 2}
        title="PRODUCT SPECIFICATION"
        onClick={() => {
          if (accordionIndex != 2) setAccordionIndex(2)
        }}
      />
      <Accordion.Content
        isVisible={accordionIndex == 2}
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
  const [currIndexNew, setCurrIndexNew] = useState<{
    index: number
    preIndex: number
  }>({
    index: 0,
    preIndex: -1,
  })

  const transition = useTransition(currIndexNew.index, {
    from: {
      opacity: 0,
      transform: `translate3d(${
        currIndexNew.index > currIndexNew.preIndex ? "100%" : "-100%"
      },0,0)`,
    },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: {
      opacity: 0.5,
      transform: `translate3d(${
        currIndexNew.index < currIndexNew.preIndex ? "50%" : "-50%"
      },0,0)`,
    },
    config: { duration: 700 },
  })

  useEffect(() => {
    let __tempInterval = setInterval(() => {
      if (currIndexNew.index == props.homepageSPSTpics.edges.length - 1) {
        setCurrIndexNew({ index: 0, preIndex: -1 })
      } else {
        setCurrIndexNew({
          index: currIndexNew.index + 1,
          preIndex: currIndexNew.index,
        })
      }
    }, 3000)
    return () => {
      clearInterval(__tempInterval)
    }
  }, [currIndexNew])

  const previousImage = () => {
    console.log("onSwipedRight")
    if (currIndexNew.index == 0) {
      setCurrIndexNew({
        index: props.homepageSPSTpics.edges.length - 1,
        preIndex: props.homepageSPSTpics.edges.length,
      })
    } else {
      setCurrIndexNew({
        index: currIndexNew.index - 1,
        preIndex: currIndexNew.index,
      })
    }
  }

  const nextImage = () => {
    console.log("onSwipedLeft")
    if (currIndexNew.index == props.homepageSPSTpics.edges.length - 1) {
      setCurrIndexNew({
        index: 0,
        preIndex: -1,
      })
    } else {
      setCurrIndexNew({
        index: currIndexNew.index + 1,
        preIndex: currIndexNew.index,
      })
    }
  }

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextImage,
    onSwipedRight: previousImage,
  })

  return (
    <div
      className={styles.imgContainer}
      style={{ position: "relative" }}
      {...swipeHandlers}
    >
      <div // images container
        className={styles.imgWidth}
        style={{
          overflow: "hidden",
          //backgroundColor: "red",
          position: "relative",
          display: "flex",
          ...globalStyles.shadowLight,
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
      <div // buttons => previous | next
        style={{
          position: "absolute",
          //display: "none", //REMOVE
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 3,
        }}
        className={styles.imgWidth}
      >
        <div
          style={{
            backgroundColor: "#ffffff55",
            padding: 15,
          }}
          onClick={previousImage}
        >
          <ArrowBackIosNewIcon fontSize="medium" style={{ color: "#000000" }} />
        </div>
        <div
          style={{
            backgroundColor: "#ffffff55",
            padding: 15,
          }}
          onClick={nextImage}
        >
          <ArrowBackIosNewIcon
            fontSize="medium"
            style={{ color: "#000000", transform: "rotate(180deg)" }}
          />
        </div>
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
