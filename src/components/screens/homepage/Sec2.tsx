import { graphql, useStaticQuery } from "gatsby"
import React, { useEffect, useState } from "react"
import { useTransition, animated } from "react-spring"
import Img from "gatsby-image"
import { borderBottom, height } from "@mui/system"
import * as styles from "./Sec2.module.css"
import appColors from "../../../styles/appColors"
import { Accordion } from "./accordion"

type Props = {}

export const Sec2 = (props: Props) => {
  return (
    <div
      style={{ position: "relative", display: "flex", padding: "50px 0px" }}
      className={styles.container}
    >
      <Slider />
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
            {["", "", ""].map((varient, varientIndex) => {
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
                    5 mtr
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
            Buy 2 & get 25% off
          </h5>
        </div>
        <div // Add to  art section
          style={{
            backgroundColor: "red",
            marginTop: 30,
          }}
        >
          <button
            style={{
              height: 50,
              width: "100%",
              backgroundColor: "#000",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h3 style={{ color: "#fff", textAlign: "center" }}>ADD TO CART</h3>
          </button>
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
        <p style={{ fontFamily: "Ubuntu" }}>
          LIFX Clean has the power to eliminate bacteria in your home, as well
          as enhance your home setup with innovative smart tech functionality.
          By scheduling LIFX Clean to activate its Clean Cycle in the hours that
          you’re not using it as a standard smart light, HEV lighting will
          switch on to help mitigate harmful bacteria on surfaces and objects in
          your home. Without lifting a finger, clean your phone, keys, makeup
          brushes, kitchen cutting boards and more. Plus, it’s is safe for you,
          your family, your pets and your plants.
        </p>
        <p
          style={{
            marginTop: 30,
            fontFamily: "Ubuntu",
            fontWeight: 500,
            fontSize: "1.1em",
          }}
        >
          There’s never been a lighter way to a cleaner home.
        </p>
        <p style={{ marginTop: 30, fontFamily: "Ubuntu" }}>
          Please note that as we are still awaiting state-level approval for
          orders in Hawaii. We are unfortunately unable to provide a timeline on
          final approval. We apologise for the inconvenience and thank you for
          your understanding.
        </p>
      </Accordion.Content>
      <Accordion.Heading
        isOpen={accordianIndex == 1}
        title="HIGHLIGHTS"
        onClick={() => {
          if (accordianIndex != 1) setAccordianIndex(1)
        }}
      />
      <Accordion.Content
        isVisible={accordianIndex == 1}
        style={{
          backgroundColor: "#e1e1e1",
        }}
      >
        <p style={{ fontFamily: "Ubuntu" }}>
          LIFX Clean has the power to eliminate bacteria in your home, as well
          as enhance your home setup with innovative smart tech functionality.
          By scheduling LIFX Clean to activate its Clean Cycle in the hours that
          you’re not using it as a standard smart light, HEV lighting will
          switch on to help mitigate harmful bacteria on surfaces and objects in
          your home. Without lifting a finger, clean your phone, keys, makeup
          brushes, kitchen cutting boards and more. Plus, it’s is safe for you,
          your family, your pets and your plants.
        </p>
        <p
          style={{
            marginTop: 30,
            fontFamily: "Ubuntu",
            fontWeight: 500,
            fontSize: "1.1em",
          }}
        >
          There’s never been a lighter way to a cleaner home.
        </p>
        <p style={{ marginTop: 30, fontFamily: "Ubuntu" }}>
          Please note that as we are still awaiting state-level approval for
          orders in Hawaii. We are unfortunately unable to provide a timeline on
          final approval. We apologise for the inconvenience and thank you for
          your understanding.
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
          backgroundColor: "#e1e1e1",
        }}
      >
        <p style={{ fontFamily: "Ubuntu" }}>
          LIFX Clean has the power to eliminate bacteria in your home, as well
          as enhance your home setup with innovative smart tech functionality.
          By scheduling LIFX Clean to activate its Clean Cycle in the hours that
          you’re not using it as a standard smart light, HEV lighting will
          switch on to help mitigate harmful bacteria on surfaces and objects in
          your home. Without lifting a finger, clean your phone, keys, makeup
          brushes, kitchen cutting boards and more. Plus, it’s is safe for you,
          your family, your pets and your plants.
        </p>
      </Accordion.Content>
    </div>
  )
}

const Slider = () => {
  const data = useStaticQuery(graphql`
    query {
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
              fluid(maxWidth: 100) {
                ...GatsbyImageSharpFluid
              }
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
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  const [currIndex, setCurrIndex] = useState(0)

  const transition = useTransition(
    data.homepageSPSTpics.edges[currIndex],
    item => item.node.id,
    {
      from: { opacity: 0, transform: "translateX(20px)" },
      enter: { opacity: 1, transform: "translateX(0px)" },
      leave: { opacity: 0, transform: "translateX(-20px)" },
      //config: { duration: 500 },
    }
  )

  useEffect(() => {
    let __tempInterval = setInterval(() => {
      if (currIndex == data.homepageSPSTpics.edges.length - 1) {
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
      <div // dummy placeholder
        className={styles.imgWidth}
      ></div>
      {transition.map(({ item, props, key }) => {
        return (
          <animated.div /// slides
            key={key}
            className={styles.imgWidth}
            style={{
              position: "absolute",
              //backgroundColor: "blue",
              ...props,
            }}
          >
            <Img
              fluid={item.node.childImageSharp.fluid}
              className={styles.imgWidth}
              style={{}}
            />
          </animated.div>
        )
      })}
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
