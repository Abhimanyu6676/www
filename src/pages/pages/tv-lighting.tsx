import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Layout from "../../components/common/layout"
import SEO from "../../components/seo"
import ProductSection from "../../components/common/productSectionType2"
import { spectrumStrip } from "../../products"
import { ScrollView } from "react-native"
import SectionType4 from "../../components/common/sectionType4"
import SubscribeSection from "../../components/common/subscribeSection/type2"

interface Props {}

export default (props: Props) => {
  const data = useStaticQuery(graphql`
    query {
      tvLightingImg1: file(relativePath: { eq: "tv-lighting/img1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tvLightingImg2: file(relativePath: { eq: "tv-lighting/img2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tvLightingImg3: file(relativePath: { eq: "tv-lighting/img3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tvLightingImg4: file(relativePath: { eq: "tv-lighting/img4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tvLightingImg5: file(relativePath: { eq: "tv-lighting/img5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tvLightingImg6: file(relativePath: { eq: "tv-lighting/img6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      workFromHomeSPSTpics: allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
          dir: { eq: "/home/abhimanyu/HUElite/www/src/images/Products/Strips/spectrum_strip/productPhotos" }
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
          dir: { eq: "/home/abhimanyu/HUElite/www/src/images/Products/Strips/spectrum_strip/productPhotos" }
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
    <Layout>
      <SEO title="Backlit lightning with HUElite" />
      <div /// mainContainer
      >
        <div /// sec 1
        >
          <div style={{ position: "relative" }}>
            <Img fluid={data.tvLightingImg1.childImageSharp.fluid} style={{ minHeight: "60vh" }} />
            <div
              style={{
                color: "#fff",
                position: "absolute",
                bottom: 30,
                left: 30,
                zIndex: 2,
              }}
            >
              <h1 style={{ fontSize: 50 }}>Sit back and relax</h1>
              <h4 style={{ marginTop: 20, fontWeight: 400 }}>HOME THEATRE</h4>
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
            HUElite Sprectrum Strip is perfect for an evening in with a marathon session of Stranger Things. It's all about color for atmos, and voice
            control for the lazy.
          </p>
        </div>

        <div /// sec 2
          style={{ marginTop: 50 }}
        >
          <ProductSection images={data.workFromHomeSPSTpics} thumbs={data.workFromHomeSPSTthumbs} product={spectrumStrip} />
        </div>

        <div /// sec 3
          style={{
            marginTop: 30,
            display: "flex",
            flexDirection: "row",
            width: "100vw",
          }}
        >
          <div style={{ flex: 1 }}>
            <Img fluid={data.tvLightingImg2.childImageSharp.fluid} style={{ flex: 1, height: "25vh" }} />
          </div>

          <div style={{ flex: 1 }}>
            <Img fluid={data.tvLightingImg3.childImageSharp.fluid} style={{ flex: 1, height: "25vh" }} />
          </div>
        </div>

        <div /// sec 4
          style={{ padding: 30 }}
        >
          <SectionType4
            source={data.tvLightingImg4.childImageSharp.fluid}
            heading="Bias Lighting"
            description="With the right backlighting on your TV, you can reduce eye strain. With a Z LED strip and the Theme 'Bias Lighting', we made this especially easy."
          />
        </div>

        <div /// sec 5
          style={{ padding: 30 }}
        >
          <SectionType4
            source={data.tvLightingImg5.childImageSharp.fluid}
            heading="Set the Scene"
            description="The best way to enjoy your home theatre is to get everything juuuust right, then save that scene. Maybe save a few scenes that work perfectly for your mood. For the smart home connoiseur, ask Alexa/Siri/Google to do it for you."
          />
        </div>

        <div /// sec 6
          style={{ padding: 30 }}
        >
          <SectionType4
            source={data.tvLightingImg6.childImageSharp.fluid}
            heading="Fan zone"
            description="Your team is playing in the final and they need your full support! Set the whole TV room to team colors. Is your friend rooting for the other side? Paint the Z backlight to be half and half with both team's colors."
          />
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
          <SubscribeSection />
        </div>
      </div>
    </Layout>
  )
}

const ProductsSection = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <div
        style={{
          marginLeft: 30,
          width: 250,
          position: "relative",
        }}
      >
        <img style={{ width: 250 }} src="https://cdn.shopify.com/s/files/1/0219/0638/products/00_Clean-US-with-pack_2_360x.jpg?v=1621839511" />
        <h2>Spectrum Strip</h2>
        <h4 style={{ fontWeight: 400 }}>Length 5-mtr</h4>
        <p style={{ color: "#777", marginTop: 15 }}>5 mtr RGB IP-65, 16 million colors, schedular, timer, custom preset modes, voice controll, OTA</p>
        <h3 style={{ marginTop: 10 }}>Rs-1999/-</h3>
      </div>
      <div
        style={{
          marginLeft: 30,
          width: 250,
          position: "relative",
        }}
      >
        <img style={{ width: 250 }} src="https://cdn.shopify.com/s/files/1/0219/0638/products/00_Clean-US-with-pack_2_360x.jpg?v=1621839511" />
        <h2>Spectrum Strip</h2>
        <h4 style={{ fontWeight: 400 }}>Length 5-mtr</h4>
        <p style={{ color: "#777", marginTop: 15 }}>5 mtr RGB IP-65, 16 million colors, schedular, timer, custom preset modes, voice controll, OTA</p>
        <h3 style={{ marginTop: 10 }}>Rs-1999/-</h3>
      </div>
      <div
        style={{
          marginLeft: 30,
          width: 250,
          position: "relative",
        }}
      >
        <img style={{ width: 250 }} src="https://cdn.shopify.com/s/files/1/0219/0638/products/00_Clean-US-with-pack_2_360x.jpg?v=1621839511" />
        <h2>Spectrum Strip</h2>
        <h4 style={{ fontWeight: 400 }}>Length 5-mtr</h4>
        <p style={{ color: "#777", marginTop: 15 }}>5 mtr RGB IP-65, 16 million colors, schedular, timer, custom preset modes, voice controll, OTA</p>
        <h3 style={{ marginTop: 10 }}>Rs-1999/-</h3>
      </div>
    </ScrollView>
  )
}
