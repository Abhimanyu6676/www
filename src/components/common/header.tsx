import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { View, Dimensions } from "react-native"
import Image from "./Image"
import { useSpring, animated } from 'react-spring'
//@ts-ignore
import styles from "./header.module.scss"

const primaryMenu = ["Connected You", "Store", "App", "About Us"]
const SecondaryMenu = ["HUElite Community", "Blog", "Support"]


const { width, height } = Dimensions.get("window")
const Header = ({ siteTitle }) => {
  return (
    <div className={styles.mainContainer}>
      <Link to="/">
        <Image
          imgData={useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "icon/icon.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }`)}
          style={{ zIndex: 100 }}
        />
      </Link>
      <div style={{ backgroundColor: "#fff", flex: 1, height: 100, display: "flex" }}>
        {width > 480 &&
          <div style={{ backgroundColor: "#fff", display: "flex", flexDirection: "column", flex: 1, }}>
            <div style={{ backgroundColor: "#fff", display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
              {SecondaryMenu.map((item, index) => {
                return (
                  <Link className={styles.a_secondary} to={"/" + item.split(" ").join("").toLowerCase()}>{item}</Link>
                )
              })}
            </div>
            <div style={{ backgroundColor: "#fff", display: "flex", justifyContent: "flex-end", alignItems: "flex-start" }}>
              {primaryMenu.map((item, index) => {
                return (
                  <Link className={styles.a_primary} to={"/" + item.split(" ").join("").toLowerCase()}>{item}</Link>
                )
              })}
            </div>
          </div>}
        <MobileHeaderContainer />
      </div>
    </div>
  )
}


interface MobileHeaderContainerProps {
}
const MobileHeaderContainer = ({ }: MobileHeaderContainerProps) => {
  const [state, setState] = useState(false)
  const animationStyle = useSpring({ top: state ? 100 : -height })


  if (width <= 480)
    return (
      <>
        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", backgroundColor: "#fff", flex: 99, height: "100%" }}>
          <div style={{ height: 50, width: 50, backgroundColor: "#00f", marginRight: 15 }} onClick={() => {
            setState(!state)
          }}>
          </div>
        </div>

        {/* Sec: Absolute Container */}
        <animated.div style={{ backgroundColor: "#eee", height: height, width: "100vw", position: "absolute", top: 100, left: 0, zIndex: 1, ...animationStyle }}>

        </animated.div>

      </>
    )
  return (<></>)
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
