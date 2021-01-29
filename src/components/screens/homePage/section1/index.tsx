import { graphql, useStaticQuery } from 'gatsby';
import Img from "gatsby-image";
import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, View } from 'react-native';
import styles from "./index.module.scss";



interface Props { }
export default (props: Props) => {
  const data = useStaticQuery(graphql`
  query {
      mobileImage: file(relativePath: { eq: "homepage/section1/main-mobile.png" }) {
        childImageSharp {
          fluid(maxWidth: 700, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      desktopImage: file(
        relativePath: { eq: "homepage/section1/main.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }       
  `)
  const sources = [
    data.mobileImage.childImageSharp.fluid,
    {
      ...data.desktopImage.childImageSharp.fluid,
      media: `(min-width: 576px)`,
    },
  ]
  return (
    <div className={styles.mainContainer} id="testDivID">
      <Img fluid={sources} />
      <OverlaySection />
    </div >
  )
}

const OverlaySection = () => {
  const pathStyles = [styles.svgFill_red, styles.svgFill_yellow, styles.svgFill_green, styles.svgFill_cyan, styles.svgFill_blue]
  const onHighlighterClick = ({ id }) => {
    /* ensure overlay opacity is set to zero */
    if (!document.getElementById("homeSec1_Overlay").classList.contains(styles.overlayContainer_clear)) {
      console.log("clearing main overlay")
      document.getElementById("homeSec1_Overlay").classList.add(styles.overlayContainer_clear)
    }
    /* handle lightTransition */
    let style = pathStyles[Math.floor(Math.random() * 4)]
    const element = document.getElementById("LightPath" + id)
    while (element.classList.contains(style)) {
      console.log("changing color >>>>>>>>>>>>>>>>>>")
      style = pathStyles[Math.floor(Math.random() * 4)]
    }
    element.classList.remove(...element.classList)
    element.classList.add(style)
    const highlighter = document.getElementById("highlighter" + id)
    if (!highlighter.classList.contains(styles.highlighter_appear))
      highlighter.classList.add(styles.highlighter_appear)
  }
  const [width, setWidth] = useState(0)
  const ref = useRef(undefined)


  useEffect(() => {
    if (ref.current) {
      console.log("-----width :: " + ref.current.offsetWidth)
      setWidth(ref.current.offsetWidth)
    }
    return () => {
    }
  }, [ref.current])
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
      ref={ref}>
      {/* Sec: Main OverLay */}
      <div
        id="homeSec1_Overlay"
        style={{ zIndex: 9, }}
        className={styles.overlayContainer}
        onMouseEnter={() => {
          document.getElementById("homeSec1_Overlay").classList.add(styles.overlayContainer_clear)
        }}
        onMouseLeave={() => {
          //document.getElementById("homeSec1_Overlay").classList.remove(styles.overlayContainer_clear)
        }}>
        <div className={styles.overlay} />
        <div className={styles.sec1TextContainer}>
          <h1 style={{ filter: "drop-shadow(1px 1px 1px #ffffff)" }}>Decorating Spaces</h1>
        </div>
      </div>
      {/* Sec: Button Indigator */}
      <div className={styles.dotContainer + " " + styles.dot1Container + " " + styles.dotAnimation}
        onClick={() => { onHighlighterClick({ id: 1 }) }}>
        <div className={styles.outerCircle}>
          {/*  <div className={styles.innerCircle} /> */}
        </div>
      </div>
      {width >= 576 && <div className={styles.dotContainer + " " + styles.dot2Container + " " + styles.dotAnimation}
        onClick={() => { onHighlighterClick({ id: 2 }) }}>
        <div className={styles.outerCircle}>
          {/*  <div className={styles.innerCircle} /> */}
        </div>
      </div>}
      {width >= 576 && <div className={styles.dotContainer + " " + styles.dot3Container + " " + styles.dotAnimation}
        onClick={() => { onHighlighterClick({ id: 3 }) }}>
        <div className={styles.outerCircle}>
          {/*  <div className={styles.innerCircle} /> */}
        </div>
      </div>}
      {/* Sec: Light highlighters */}
      <div >
        {/**
             * @Component : highlighters
             * @Description highlighters are in order from left to right
             *              there are the white glow at close proximity with high
             *              intensity
             */}
        <div
          id="highlighter1"
          className={styles.highlighter1 + " " + styles.highlighterTransition + " "}
        />
        {width >= 576 && <div
          id="highlighter2"
          className={styles.highlighterTransition + " "}
          style={{
            position: "absolute",
            backgroundColor: "#000",
            top: "6.5vw",
            right: "48.8vw",
            width: "13.4vw",
            height: "8.9vw",
            zIndex: 8,
            border: "4px solid white",
            filter: "blur(4px)",
          }} />}
        {width >= 576 && <div
          id="highlighter3"
          className={styles.highlighterTransition + " "}
          style={{
            position: "absolute",
            top: "6.9vw",
            right: "20vw",
            width: "6.6vw",
            height: "4vw",
            backgroundColor: "#fff",
            zIndex: 8,
            filter: "blur(10px)",
          }} />}
      </div>
      {/* Sec: SVG CONTAINER */}
      <div
        style={{
          position: "absolute",
          zIndex: 8,
          width: "100%",
          height: "100%",
          mixBlendMode: "soft-light",
          filter: "blur(40px)",
        }}>
        <svg style={{ width: "100%", height: "100%" }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100% 100%">
          {/**
             * @Component : LightPaths
             * @Description LightPaths are in order from left to right
             *              Left lamp is LightPath1
             *              Tv Light is LightPath2
             *              Right lamp is LightPath3
             * @Important : LightPath cannot have className as all the 
             *              className properties are ripped off while 
             *              changing color with transition 
             *              Instead use CSS attribute Selector with custom property
             */}
          {width >= 576 && <ellipse id="LightPath1" cx="10vw" cy="20vw" rx="20vw" ry="30vw" />}
          {width >= 576 && <ellipse id="LightPath2" cx="42.5vw" cy="15vw" rx="15vw" ry="15vw" />}
          {width >= 576 && <ellipse id="LightPath3" cx="85vw" cy="25vw" rx="30vw" ry="30vw" />}
          {/* mobile - Lightpath1 */}
          {width < 576 && <ellipse id="LightPath1" cx="30vw" cy="80vw" rx="50vw" ry="100vw" />}
        </svg>
      </div >
    </div>
  )
}; 