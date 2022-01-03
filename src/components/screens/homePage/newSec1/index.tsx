import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { useTransition, animated } from "react-spring"
//@ts-ignore
import styles from "./index.module.scss"

const slides = [
  {
    id: 0,
    heading: "Design Your Personal Oasis",
    text:
      "Add a touch of natural sophistication to your home with the Elements wood look light panels.",
  },
  {
    id: 1,
    heading: "Discover Limitless Lighting",
    text:
      "Smart modular light panels for complete design freedom and customisation.",
  },
  {
    id: 2,
    heading: "Your Smart Lighting Basics",
    text: "The only bulbs and lightstrips you will ever need.",
  },
  {
    id: 3,
    heading: "Create Your Own Masterpiece",
    text:
      "Touch-reactive light squares to change the way you experience your space.",
  },
]

interface Props {}
export default (props: Props) => {
  const [index, setIndex] = useState<0 | 1 | 2 | 3>(0)
  const curSlide = slides[index]

  const data = useStaticQuery(graphql`
    query {
      homepage_sec_1: allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
          dir: { eq: "/home/abhimanyu/HUElite/www/src/images/homepage/newSec1" }
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

  const transition = useTransition(slides[index], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    //config: { duration: 500 },
  })

  const transition1 = useTransition(slides[index], item => item.id, {
    from: { opacity: 0, transform: "translateX(-20px)" },
    enter: { opacity: 1, transform: "translateX(0px)" },
    leave: { opacity: 0, transform: "translateX(20px)" },
    //config: { duration: 500 },
  })

  return (
    <div
      style={{ position: "relative", width: "100vw", height: "100vh" }}
      id="home_sec1"
    >
      {transition.map(({ item, props, key }) => {
        return (
          <animated.div /// slides
            key={key}
            style={{
              width: "100%",
              position: "absolute",
              top: 0,
              color: "#fff",
              ...props,
            }}
          >
            <Img
              style={{ height: "100vh", width: "100vw" }}
              fluid={
                data.homepage_sec_1.edges[index].node.childImageSharp.fluid
              }
            />
          </animated.div>
        )
      })}
      {transition1.map(({ item, props, key }) => {
        return (
          <animated.div
            key={key}
            style={{
              position: "absolute",
              bottom: 150,
              left: 0,
              width: "100%",
              ...props,
            }}
          >
            <h1
              style={{
                marginLeft: 30,
                marginRight: 30,
                fontSize: 38,
                lineHeight: "1.4em",
                color: "#fff",
              }}
            >
              {curSlide.heading}
            </h1>
            <p
              style={{
                marginTop: 50,
                marginLeft: 30,
                marginRight: 30,
                fontSize: 18,
                lineHeight: "1.6em",
                color: "#fff",
              }}
            >
              {curSlide.text}
            </p>
          </animated.div>
        )
      })}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          position: "absolute",
          bottom: 100,
          left: 0,
          marginLeft: 30,
        }}
      >
        <SceneButton
          title="Scene 1"
          onClick={() => {
            if (index != 0) setIndex(0)
          }}
        />
        <SceneButton
          title="Scene 2"
          onClick={() => {
            if (index != 1) setIndex(1)
          }}
        />
        <SceneButton
          title="Scene 3"
          onClick={() => {
            if (index != 2) setIndex(2)
          }}
        />
        <SceneButton
          title="Scene 4"
          onClick={() => {
            if (index != 3) setIndex(3)
          }}
        />
      </div>
    </div>
  )
}

const SceneButton = ({
  title = "title",
  onClick,
}: {
  title?: string
  onClick?: () => void
}) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {title}
    </button>
  )
}
