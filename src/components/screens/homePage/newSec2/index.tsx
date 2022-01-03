import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import ProductSection from "../../../common/productSectionType2"
import { spectrumStrip } from "../../../../products"

const slides = [
  {
    id: 0,
    img: "https://cdn.shopify.com/s/files/1/0219/0638/products/00_Lightstrip_2m_Packaging_US_900x.jpg?v=1623228757",
  },
  {
    id: 1,
    img: "https://cdn.shopify.com/s/files/1/0219/0638/products/01_LIFX-Lightstrip-ColorLightstripones-Annotated_US_900x.jpg?v=1623228757",
  },
  {
    id: 2,
    img: "https://cdn.shopify.com/s/files/1/0219/0638/products/02_LIFX-LightStrip-voice_393919e7-b0a6-4d1c-be87-eee22a298a82_900x.jpg?v=1623228757",
  },
  {
    id: 3,
    img: "https://cdn.shopify.com/s/files/1/0219/0638/products/03_LIFX-LightStrip-Kitchen_79065578-d5c3-4e37-b99a-18f68f1e106d_900x.jpg?v=1623228757",
  },
  {
    id: 4,
    img: "https://cdn.shopify.com/s/files/1/0219/0638/products/042mLightstripannotatedminimal_900x.jpg?v=1623228757",
  },
  {
    id: 5,
    img: "https://cdn.shopify.com/s/files/1/0219/0638/products/05_LIFX-LightStrip-CookingVoice_900x.jpg?v=1623228757",
  },
]

interface Props {}
export default (props: Props) => {
  const data = useStaticQuery(graphql`
    query {
      homepageSPSTthumbs: allFile(
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
      homepageSPSTpics: allFile(
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
    }
  `)
  return (
    <div
      id="home_sec2"
      style={{
        marginTop: 30,
      }}
    >
      <ProductSection images={data.homepageSPSTpics} thumbs={data.homepageSPSTthumbs} product={spectrumStrip} />
    </div>
  )
}
