import { graphql, Link, useStaticQuery } from "gatsby"
import React, { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Dimensions } from "react-native"
import { animated, useSpring } from 'react-spring'
import { AntDesign, MaterialIcons } from '@expo/vector-icons'
import Image from "./Image"
import styles from "./_header.module.scss"

interface link_i {
  key: string
  href?: string
}
const primaryMenu: link_i[] = [
  { key: "Connected You" },
  { key: "Products", href: "spectrum_strip" },
  { key: "App" },
  { key: "About Us" }]
const SecondaryMenu: link_i[] = [
  { key: "HUElite Community" },
  { key: "Blog" },
  { key: "Support", href: "support" }]


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
    }`)}
        style={{ zIndex: 1, width: 80 }}
      />
    </Link>
  )
}

const { width, height } = Dimensions.get("window")
const Header = ({ siteTitle = "" }) => {
  return (
    <div className={styles.Container}>
      <Icon />
      <Container fluid className="">
        {width > 600 &&
          <Container className=" my-auto">
            <div className="-flex-row- -jus-fe-">
              {SecondaryMenu.map((item, index) => {
                return (
                  <Link key={index + "_" + Math.floor(Math.random() * Math.floor(9999))} className="-mt-10- -mr-10-" to={item.href ? ("/" + item?.href) : "/"}><h6>{item.key}</h6></Link>
                )
              })}
            </div>
            <div className=" -flex-row- -jus-fe-">
              {primaryMenu.map((item, index) => {
                return (
                  <Link key={index + "_" + Math.floor(Math.random() * Math.floor(9999))} className="-mt-10- -mr-10- " to={item.href ? ("/" + item?.href) : "/"}><h3 style={{ marginLeft: 15 }}>{item.key}</h3></Link>
                )
              })}
            </div>
          </Container>}
        <MobileHeaderContainer />
      </Container>
    </div>
  )
}


interface MobileHeaderContainerProps {
}
const MobileHeaderContainer = ({ }: MobileHeaderContainerProps) => {
  const [state, setState] = useState(false)
  const animationStyle = useSpring({ top: state ? 0 : -height })


  if (width <= 600)
    return (
      <>
        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", backgroundColor: "#fff", flex: 99, height: "100%" }}>
          <div style={{ marginRight: 15 }} onClick={() => {
            setState(!state)
          }}>
            <MaterialIcons name="menu" size={30} color="#555" />
          </div>
        </div>
        {/* Sec: Absolute Container */}
        <animated.div style={{
          backgroundColor: "#fff",
          minHeight: height,
          width: "100vw",
          position: "absolute",
          left: 0,
          zIndex: 100,
          ...animationStyle
        }}>
          <Container>
            <Row className="-jus-sb- -aln-c-">
              <Icon />
              <div className="-mr-20-" onClick={() => {
                setState(!state)
              }}>
                <AntDesign name="close" size={30} color="black" />
              </div>
            </Row>
          </Container>
          <div style={{ marginTop: "10vh", marginLeft: "5vw", marginRight: "5vw" }}>
            <Row style={{ height: "50vh", }}>
              <Col className="-flex-col- -jus-sa-" style={{ flex: 1 }}>
                {primaryMenu.map((item, index) => {
                  return (
                    <Link key={index + "_" + Math.floor(Math.random() * Math.floor(9999))} className="" to={item.href ? ("/" + item?.href) : "/"}><h3 >{item.key}</h3></Link>
                  )
                })}
              </Col>
              <Col className="-flex-col- -jus-sa- -aln-fe-" style={{ marginTop: "8vh", marginBottom: "8vh" }}>
                {SecondaryMenu.map((item, index) => {
                  return (
                    <Link key={index + "_" + Math.floor(Math.random() * Math.floor(9999))} className="" to={item.href ? ("/" + item?.href) : "/"}><h6>{item.key}</h6></Link>
                  )
                })}
              </Col>
            </Row>
          </div>
        </animated.div>

      </>
    )
  return (<></>)
}

export default Header
