import { graphql, Link, useStaticQuery } from "gatsby"
import React, { useState, useEffect } from "react"
import { ScrollView } from "react-native"
import { Container, Row, Col } from "react-bootstrap"
import { Dimensions } from "react-native"
import { animated, useSpring } from "react-spring"
import { FadeInSection } from "../FadeInSection"
import { AntDesign, Entypo, Feather, FontAwesome, Ionicons } from "@expo/vector-icons"
import Image from "../Image"
import { useSelector, useDispatch } from "react-redux"
import Cart from "../../cart"
//@ts-ignore
import styles from "./index.module.scss"
import transitions from "@material-ui/core/styles/transitions"

interface link_i {
  key: string
  href?: string
}
const primaryMenu: link_i[] = [
  { key: "Connected You" },
  { key: "Products", href: "spectrum_strip" },
  { key: "App" },
  { key: "About Us" },
]
const SecondaryMenu: link_i[] = [{ key: "HUElite Community" }, { key: "Support", href: "support" }, { key: "Blog" }]

const Icon = () => {
  return (
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
          }
        `)}
        style={{ zIndex: 1, width: 80, height: 80 }}
      />
    </Link>
  )
}

const { width, height } = Dimensions.get("window")
export default ({ siteTitle = "" }) => {
  const pathname = typeof window !== "undefined" ? window?.location?.pathname : ""
  const [headerWhite, setHeaderWhite] = useState(undefined)
  const [headerOpen, setHeaderOpen] = useState(false)

  useEffect(() => {
    //console.log("pathname is -- " + pathname)
    let observer = undefined
    if (pathname == "/" && typeof window !== "undefined") {
      observer = new IntersectionObserver(enteries => {
        enteries.forEach(entry => {
          //console.log("---------homeSec-1 Intersection----------- = " + entry.intersectionRatio)
          if (entry.intersectionRatio == 0) {
            //console.log("setting headerWhite to true")
            setHeaderWhite(true)
          } /* if (entry.intersectionRatio > 0) */ else {
            //console.log("setting headerWhite to false")
            setHeaderWhite(false)
          }
        })
      })
      const target = document.querySelector("#home_sec1")
      observer.observe(target)
    }
    return () => {
      if (observer) {
        //console.log("disconnecting observer")
        observer.disconnect()
      }
    }
  }, [])

  return (
    <div style={{}}>
      <div
        className={styles.mainContainer}
        style={{
          backgroundColor: headerWhite ? "#ffffff" : "#ffffff77",
          height: 80,
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, zIndex: 10 }}>
          <Icon />
        </div>
        {/* /// desltop header */}
        <div className={styles.headersLinkContainer}>
          <PrimaryMenuList
            containerClassName={styles.primaryLinkContainer_desktop}
            style={{ marginRight: 20, color: "#fff" }}
          />

          <SecondaryMenuList
            containerClassName={styles.secondaryLinkContainer_desktop}
            style={{ marginRight: 20, color: "#fff" }}
          />
        </div>
        {/* /// mobile header */}
        <NewMobileHeader />
      </div>
      {
        /// absoluteFiller
        pathname != "/" && (
          <div
            className={styles.absoluteFiller}
            style={{
              height: 80,
              width: "100vw",
            }}
          />
        )
      }
    </div>
  )
}

const NewMobileHeader = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div
      className={styles.mobileHeader}
      style={{
        flex: 1,
      }}
    >
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          height: 80,
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          zIndex: 10,
        }}
        onClick={() => {
          setShowMenu(!showMenu)
        }}
      >
        <Ionicons name={showMenu ? "close" : "menu"} size={40} style={{ marginRight: 20, color: "#2d2f30" }} />
      </div>
      {/* /// mobile header menu container */}

      <div
        style={{
          position: "absolute",
          height: showMenu ? "100vh" : "0vh",
          width: "100vw",
          paddingTop: 0,
          left: 0,
          backgroundColor: "#fff",
          zIndex: 9,
          overflow: "hidden",
          transition: "height 0.3s ease-in",
        }}
      >
        {showMenu && (
          <FadeInSection>
            <PrimaryMenuList containerStyle={{ marginTop: 80 }} className={styles.primaryLinkStyles_mobile} />
            <div style={{ marginTop: 30 }}>
              <SecondaryMenuList style={{}} className={styles.secondaryLinkStyles_mobile} />
            </div>
          </FadeInSection>
        )}
      </div>
    </div>
  )
}

const PrimaryMenuList = (props: { style?: any; containerStyle?: any; className?: any; containerClassName?: any }) => {
  return (
    <div style={props.containerStyle} className={props.containerClassName}>
      {primaryMenu.map((item, index) => {
        return (
          <Link key={index} to={item.href ? "/" + item?.href : "/"}>
            <h3 style={props.style} className={props.className}>
              {item.key}
            </h3>
          </Link>
        )
      })}
    </div>
  )
}

const SecondaryMenuList = (props: { style?: any; containerStyle?: any; className?: any; containerClassName?: any }) => {
  return (
    <div style={props.containerStyle} className={props.containerClassName}>
      {SecondaryMenu.map((item, index) => {
        return (
          <Link key={index} to={item.href ? "/" + item?.href : "/"}>
            <h6 style={props.style} className={props.className}>
              {item.key}
            </h6>
          </Link>
        )
      })}
    </div>
  )
}
