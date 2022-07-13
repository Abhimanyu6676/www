import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Layout from "../../components/layouts/HeaderFooterCover"
import { Subscribe } from "../../components/common/subscribe"

interface Props {}

export default (props: Props) => {
  const data = useStaticQuery(graphql`
    query {
      wfhImg1: file(relativePath: { eq: "workfromhome/img1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wfhImg2: file(relativePath: { eq: "workfromhome/img2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wfhImg3: file(relativePath: { eq: "workfromhome/img3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wfhImg4: file(relativePath: { eq: "workfromhome/img4.webp" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      workFromHomeSPSTpics: allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
          dir: {
            eq: "/home/abhimanyu/HUElite/www/src/images/Products/Strips/spectrum_strip/productPhotos"
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
      workFromHomeSPSTthumbs: allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
          dir: {
            eq: "/home/abhimanyu/HUElite/www/src/images/Products/Strips/spectrum_strip/productPhotos"
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
    }
  `)

  return (
    <Layout
      helmetConfig={{
        title: "work-from-home",
      }}
    >
      <div /// mainContainer
      >
        <div /// sec 1
        >
          <div style={{ position: "relative" }}>
            <Img
              fluid={data.wfhImg1.childImageSharp.fluid}
              style={{ minHeight: "60vh" }}
            />
            <div
              style={{
                color: "#fff",
                position: "absolute",
                bottom: 30,
                left: 30,
                zIndex: 2,
              }}
            >
              <h1 style={{ fontSize: 50 }}>WFH?</h1>
              <h3 style={{ marginTop: 20, fontWeight: 400 }}>
                DECK OUT YOYR WORKSPACE WITH SOME USEFULL LIGHTS
              </h3>
            </div>
          </div>
          <p
            style={{
              fontSize: 20,
              paddingLeft: 30,
              paddingRight: 30,
              marginTop: 50,
              lineHeight: 1.5,
              fontWeight: 400,
            }}
          >
            As working from home becomes the new normal for many, adapting the
            home into a productive workspace is more important than ever. We
            don’t pretend to have all the answers, but below you'll find a few
            light related tips that have helped the LIFX Team with the
            transition.
          </p>
        </div>

        <div /// sec 2
          style={{ marginTop: 50 }}
        >
          {/* <ProductSection
            images={data.workFromHomeSPSTpics}
            thumbs={data.workFromHomeSPSTthumbs}
            product={spectrumStrip}
          /> */}
        </div>

        <div /// sec 3
          style={{
            marginTop: 50,
            paddingLeft: 30,
            paddingRight: 30,
          }}
        >
          {/* <SectionType4
            source={data.wfhImg2.childImageSharp.fluid}
            heading="Schedule your routine"
            description="Stay accountable and schedule your lights to help maintain a
          routine. Change the colour of your lights to signal the start of
          the working day, your lunch break and, maybe most importantly,
          when it’s time to clock off."
          /> */}
        </div>

        <div /// sec 4
          style={{
            marginTop: 50,
            paddingLeft: 30,
            paddingRight: 30,
          }}
        >
          {/*  <SectionType4
            source={data.wfhImg3.childImageSharp.fluid}
            heading="Maintain focus"
            description="Blue or cold light helps you stay awake and concentrated, use
            this during the day. Then switch to a warmer or amber light in
            the evening to help wind down."
          /> */}
        </div>

        <div /// sec 5
          style={{
            marginTop: 50,
            paddingLeft: 30,
            paddingRight: 30,
          }}
        >
          {/*  <SectionType4
            source={data.wfhImg4.childImageSharp.fluid}
            heading="Add some light/colour to your background"
            description="The good thing about adding some backlighting behind you is that it helps separate you from your backround. It's important to remember that this lighting shouldn't be brighter than what's lighting you up, otherwise you end up in a similar situation as if you had bright daylight behind you."
          /> */}
        </div>

        <div /// sec 6
          style={{
            marginTop: 50,
          }}
        >
          <ProductsSection />
        </div>

        <div
          style={{
            marginTop: 30,
          }}
        >
          <Subscribe />
        </div>
      </div>
    </Layout>
  )
}

const ProductsSection = () => {
  return (
    <div>
      <div
        style={{
          marginLeft: 30,
          width: 250,
          position: "relative",
        }}
      >
        <img
          style={{ width: 250 }}
          src="https://cdn.shopify.com/s/files/1/0219/0638/products/00_Clean-US-with-pack_2_360x.jpg?v=1621839511"
        />
        <h2>Spectrum Strip</h2>
        <h4 style={{ fontWeight: 400 }}>Length 5-mtr</h4>
        <p style={{ color: "#777", marginTop: 15 }}>
          5 mtr RGB IP-65, 16 million colors, schedular, timer, custom preset
          modes, voice controll, OTA
        </p>
        <h3 style={{ marginTop: 10 }}>Rs-1999/-</h3>
      </div>
      <div
        style={{
          marginLeft: 30,
          width: 250,
          position: "relative",
        }}
      >
        <img
          style={{ width: 250 }}
          src="https://cdn.shopify.com/s/files/1/0219/0638/products/00_Clean-US-with-pack_2_360x.jpg?v=1621839511"
        />
        <h2>Spectrum Strip</h2>
        <h4 style={{ fontWeight: 400 }}>Length 5-mtr</h4>
        <p style={{ color: "#777", marginTop: 15 }}>
          5 mtr RGB IP-65, 16 million colors, schedular, timer, custom preset
          modes, voice controll, OTA
        </p>
        <h3 style={{ marginTop: 10 }}>Rs-1999/-</h3>
      </div>
      <div
        style={{
          marginLeft: 30,
          width: 250,
          position: "relative",
        }}
      >
        <img
          style={{ width: 250 }}
          src="https://cdn.shopify.com/s/files/1/0219/0638/products/00_Clean-US-with-pack_2_360x.jpg?v=1621839511"
        />
        <h2>Spectrum Strip</h2>
        <h4 style={{ fontWeight: 400 }}>Length 5-mtr</h4>
        <p style={{ color: "#777", marginTop: 15 }}>
          5 mtr RGB IP-65, 16 million colors, schedular, timer, custom preset
          modes, voice controll, OTA
        </p>
        <h3 style={{ marginTop: 10 }}>Rs-1999/-</h3>
      </div>
    </div>
  )
}
