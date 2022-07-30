import React, { useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { useTransition, animated } from "react-spring"

const slides = [
  {
    id: 0,
    heading: "Designing with Light in the Bedroom",
    text: "With Huelite colors on your bed, couch & mirror, you can create a sensual vibe throughout your entire bedroom",
    slideName: "Bedroom",
  },
  {
    id: 1,
    heading: "Lights for content creators",
    text: "Wow, your audience with captivating visuals through endless color options, with a massive range of effects",
    slideName: "Studio",
  },
  {
    id: 2,
    heading: "Lights for Film fanatics",
    text: "Transport yourself into the world of your favorite movie without a trip to the cinema by transforming your space with vibrant colors.",
    slideName: "Entertainment",
  },
  {
    id: 3,
    heading: "Lights for Avid Gamers",
    text: "Enter into the world of your game by transforming your space with bold hues to match the game.",
    slideName: "Gaming",
  },
]

interface Props {}
export const HomePageHeroSection = (props: Props) => {
  const [index, setIndex] = useState<0 | 1 | 2 | 3>(0)

  const data = useStaticQuery(graphql`
    {
      heroDesktopArray: allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
          dir: {
            eq: "/Users/abhimanyu/Documents/HUElite/web/src/images/homepage/heroSection/desktop"
          }
        }
        sort: { fields: name }
      ) {
        edges {
          node {
            id
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }

      heroMobileArray: allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
          dir: {
            eq: "/Users/abhimanyu/Documents/HUElite/web/src/images/homepage/heroSection/mobile"
          }
        }
        sort: { fields: name }
      ) {
        edges {
          node {
            id
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
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
    leave: { opacity: 1 },
    config: { duration: 500 },
  })

  useEffect(() => {
    let indexLoop = setInterval(() => {
      if (index == 3) setIndex(0)
      else setIndex(index + 1)
    }, 5000)

    return () => {
      clearInterval(indexLoop)
    }
  }, [index])

  return (
    <div style={{}}>
      <div // images contaienr
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
        }}
      >
        {transition((animatedStyles, item) => {
          return (
            <animated.div /// desktop slides
              key={"_" + item}
              style={{
                ...animatedStyles,
                position: "absolute",
                top: 0,
                bottom: 0,
                width: "100vw",
                height: "100vh",
              }}
            >
              {typeof window !== "undefined" && (
                <GatsbyImage
                  image={
                    window.innerWidth > 600
                      ? data.heroDesktopArray.edges[item].node.childImageSharp
                          .gatsbyImageData
                      : data.heroMobileArray.edges[item].node.childImageSharp
                          .gatsbyImageData
                  }
                  style={{
                    width: "100vw",
                    height: "100vh",
                  }}
                  alt="HUElite"
                />
              )}
            </animated.div>
          )
        })}
      </div>
      <div // bottom text container
        style={{
          position: "absolute",
          bottom: "5%",
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
                  console.log("index = ", _index)
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
    <button
      onClick={onClick}
      style={{
        margin: "0px 20px 20px 0px",
        backgroundColor: "#eeeeee44",
        padding: "1px 10px",
        borderRadius: 10,
      }}
    >
      <h3
        style={{
          color: "#ffffff",
          margin: "12px 10px",
        }}
      >
        {title}
      </h3>
    </button>
  )
}
