import React, { useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { useTransition, animated } from "react-spring"

const slides = [
  {
    id: 0,
    heading: "Design Your Personal Oasis",
    text: "Add a touch of natural sophistication to your home with the Elements wood look light panels.",
    slideName: "Oasis",
  },
  {
    id: 1,
    heading: "Discover Limitless Lighting",
    text: "Smart modular light panels for complete design freedom and customisation.",
    slideName: " Limitless Lighting",
  },
  {
    id: 2,
    heading: "Your Smart Lighting Basics",
    text: "The only bulbs and lightstrips you will ever need.",
    slideName: "Basics",
  },
  {
    id: 3,
    heading: "Create Your Own Masterpiece",
    text: "Touch-reactive light squares to change the way you experience your space.",
    slideName: "Own Masterpiece",
  },
]

interface Props {}
export const Sec1 = (props: Props) => {
  const [index, setIndex] = useState<0 | 1 | 2 | 3>(0)

  const data = useStaticQuery(graphql`
    {
      homepage_sec_1: allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
          dir: {
            eq: "/Users/abhimanyu/Documents/HUElite/web/src/images/homepage/newSec1"
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

  const curSlide = slides[index]

  const transition = useTransition(index, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 1000 },
  })

  useEffect(() => {
    let indexLoop = setInterval(() => {
      setIndex((index + 1) % (data.homepage_sec_1.edges.length - 1))
    }, 5000)

    return () => {
      clearInterval(indexLoop)
    }
  }, [index])

  return (
    <div
      style={{ position: "relative", width: "100vw", height: "100vh" }}
      id="home_sec1"
    >
      <div // images contaienr
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          //backgroundColor: "#EC7063",
        }}
      >
        {transition((animatedStyles, item) => {
          return (
            <animated.div /// slides
              key={"_" + item}
              style={{
                ...animatedStyles,
                position: "absolute",
                top: 0,
                left: 0,
                height: "100vh",
                width: "100vw",
              }}
            >
              <GatsbyImage
                image={
                  data.homepage_sec_1.edges[item].node.childImageSharp
                    .gatsbyImageData
                }
                style={{ height: "100vh", width: "100vw" }}
                alt="HUElite"
              />
            </animated.div>
          )
        })}
      </div>
      <div // bottom text container
        style={{
          position: "absolute",
          bottom: "15%",
          left: 0,
          //backgroundColor: "red",
          padding: "0px 20px",
        }}
      >
        <div
          style={{
            //backgroundColor: "red",
            ...props,
          }}
        >
          <h1
            style={{
              color: "#fff",
            }}
          >
            {curSlide.heading}
          </h1>
          <p
            style={{
              marginTop: 20,
              fontSize: 18,
              lineHeight: "1.6em",
              color: "#fff",
            }}
          >
            {curSlide.text}
          </p>
        </div>

        <div // scene buttons container
          className="flex-container"
          style={{
            marginTop: 50,
          }}
        >
          {slides.map((item, _index) => {
            return (
              <SceneButton
                title={item.slideName}
                onClick={() => {
                  if (index != _index) setIndex(_index)
                }}
              />
            )
          })}
        </div>
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
    <button onClick={onClick}>
      <div
        style={{
          margin: "0px 20px 20px 0px",
          backgroundColor: "#eeeeee44",
          padding: "1px 10px",
          borderRadius: 10,
        }}
      >
        <p
          style={{
            color: "#ffffff",
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          {title}
        </p>
      </div>
    </button>
  )
}
