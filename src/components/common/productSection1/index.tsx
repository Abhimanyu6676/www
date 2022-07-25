import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React, { useEffect, useState } from "react"
import { animated, useTransition } from "react-spring"
import { useSwipeable } from "react-swipeable"
import { Accordion } from "../../../components/common/accordion"
import appColors from "../../../styles/appColors"
import globalStyles from "../../../styles/globalStyles"
import * as styles from "./index.module.css"

interface offer_i {
  offerValue: number
  offerString?: string
}
interface specs_i {
  specHeading: string
  spec: string
}

interface variant_i {
  variantName: string
  varientCode: string
  price: number
  offer?: offer_i
  specs?: specs_i[]
}
interface product_i {
  brand: string
  productName: string
  subHeading?: string
  description: string
  highlightPoints?: { heading?: string; text: string }[]
  variants: variant_i[]
  specs?: specs_i[]
}

const baseProduct: product_i = {
  brand: "HUElite",
  productName: "HUElite Spectrum Strip",
  subHeading: "60led/mtr",
  description:
    "Huelite LED light strips are packed with rich colors and fantastic light effects, perfect for any indoor occasion like bedrooms, kitchens, and bathrooms. They can be easily controlled using Huelite 3.0 App.",
  highlightPoints: [
    {
      text: "Music Sync: Syncing lights at the rhythm of your music.",
    },
    {
      text: "Convenient Voice Control: Works with Alexa.",
    },
    {
      text: "Smart App Control: Control your lights via Wi-Fi.",
    },
    {
      text: "Easy Installation: Mount to any dry and clean surface.",
    },
    {
      text: "Colorful Life: Decorate with 16Million+ colors to choose from.",
    },
    {
      text: "Custom DIY Function: Choose your favourite effects on the app.",
    },
    {
      text: "Control from Anywhere: Control your space at your fingertips- literally.",
    },
  ],
  specs: [
    {
      specHeading: "Brightness",
      spec: "1100+ Lumens per meter",
    },
    {
      specHeading: "Working Hours",
      spec: "50,000 hours",
    },
  ],
  variants: [
    {
      variantName: "5 mtr",
      varientCode: "SPST_5M",
      price: 1999,
      offer: {
        offerValue: 300,
      },
      specs: [
        {
          specHeading: "Length",
          spec: "5 Meter",
        },
        {
          specHeading: "Wattage",
          spec: "14.4 Watt at full brightness",
        },
        {
          specHeading: "Standby Power",
          spec: "0.3 Watt",
        },
        {
          specHeading: "Contains",
          spec: "1 x 5m of LED lightstrip + controller + power supply",
        },
      ],
    },
    {
      variantName: "10 mtr",
      varientCode: "SPST_10M",
      price: 2999,
      specs: [
        {
          specHeading: "Length",
          spec: "10 Meter",
        },
      ],
    },
  ],
}

type Props = {
  style?: React.CSSProperties
  product?: product_i
}
export const ProductSection1 = ({ product = baseProduct, ...props }: Props) => {
  const data = useStaticQuery(graphql`
    query {
      amazon_marketplace_icon: file(
        relativePath: { eq: "icon/amazon_marketplace.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED)
        }
      }
      homepageSPSTthumbs: allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
          dir: {
            eq: "/Users/abhimanyu/Documents/HUElite/web/src/images/Products/Strips/spectrum_strip/productPhotos"
          }
        }
        sort: { fields: name }
      ) {
        edges {
          node {
            id
            childImageSharp {
              gatsbyImageData(width: 200, layout: CONSTRAINED)
            }
          }
        }
      }
      homepageSPSTpics: allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
          dir: {
            eq: "/Users/abhimanyu/Documents/HUElite/web/src/images/Products/Strips/spectrum_strip/productPhotos"
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

  const [currVariant, setCurrVariant] = useState(0)
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        padding: "50px 0px",
        ...props.style,
      }}
      className={styles.container}
    >
      <Slider
        homepageSPSTpics={data.homepageSPSTpics}
        homepageSPSTthumbs={data.homepageSPSTthumbs}
      />

      <div //content container
        className={styles.contentContainer}
      >
        <div // top text container
        >
          <p style={{ margin: 0 }}>{product.brand}</p>
          <h1 style={{ margin: 0 }}>{product.productName}</h1>
          {product.subHeading && (
            <h5 style={{ margin: 0 }}>{product.subHeading}</h5>
          )}
          <div // varients container
            className="flex-container"
            style={{
              marginTop: 10,
              //backgroundColor: "red",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            {product.variants?.map((variant, variantIndex) => {
              return (
                <button
                  style={{
                    marginRight: 30,
                    marginTop: 15,
                    height: 40,
                    width: 100,
                    backgroundColor:
                      variantIndex == currVariant ? "#000000" : "#000000aa",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onClick={() => {
                    setCurrVariant(variantIndex)
                  }}
                >
                  <h4 style={{ color: "#ffffff", fontWeight: 500 }}>
                    {variant.variantName}
                  </h4>
                </button>
              )
            })}
          </div>
          <h2 style={{ marginBottom: 0, marginTop: 20 }}>
            Rs-{product.variants[currVariant].price}/-
          </h2>
          {product.variants[currVariant].offer && (
            <h6
              style={{
                margin: 0,
                backgroundColor: appColors.successDark,
                borderRadius: 50,
                padding: "5px 15px",
                width: "fit-content",
                color: "#ffffff",
                fontFamily: "Ubuntu",
              }}
            >
              {product.variants[currVariant].offer?.offerString
                ? product.variants[currVariant].offer?.offerString
                : `Buy now & get Rs${product.variants[currVariant].offer?.offerValue} off`}
            </h6>
          )}
        </div>
        <div // Add to cart section
          style={{
            backgroundColor: "red",
            marginTop: 30,
          }}
        >
          <a href="https://www.amazon.in/s?me=ADEJJYXA274FU&ref=sf_seller_app_share_new">
            <button
              style={{
                height: 50,
                width: "100%",
                backgroundColor: "#000",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h3 style={{ color: "#fff", textAlign: "center" }}>
                Buy from amazon
              </h3>
              <GatsbyImage
                image={getImage(data.amazon_marketplace_icon)}
                style={{
                  width: 30,
                  height: 30,
                  marginLeft: 20,
                }}
              />
            </button>
          </a>
        </div>

        <div // accordian container
        >
          <AccordionSection product={product} currVarient={currVariant} />
        </div>
      </div>
    </div>
  )
}

const AccordionSection = (props: {
  product: product_i
  currVarient: number
}) => {
  const [accordionIndex, setAccordionIndex] = useState(0)
  return (
    <div>
      <Accordion.Heading
        isOpen={accordionIndex == 0}
        onClick={() => {
          if (accordionIndex != 0) setAccordionIndex(0)
        }}
        containerStyle={{
          marginTop: 20,
        }}
      >
        <h4 style={{ margin: 0, flex: 1 }}>Description</h4>
      </Accordion.Heading>
      <Accordion.Content isVisible={accordionIndex == 0}>
        <p style={{}}>{props.product.description}</p>
        <ul
          style={{
            marginTop: "1rem",
          }}
        >
          {props.product.highlightPoints?.map((point, pointIndex) => {
            return (
              <li style={{ marginTop: pointIndex == 0 ? 0 : 5 }}>
                {point.text}
              </li>
            )
          })}
        </ul>
      </Accordion.Content>

      <Accordion.Heading
        isOpen={accordionIndex == 2}
        title="PRODUCT SPECIFICATION"
        onClick={() => {
          if (accordionIndex != 2) setAccordionIndex(2)
        }}
      />
      <Accordion.Content
        isVisible={accordionIndex == 2}
        style={{
          padding: 0,
        }}
      >
        {props.product.variants[props.currVarient].specs?.map(
          (spec, specIndex) => {
            return (
              <DiscriptionContainer
                heading={spec.specHeading}
                spec={spec.spec}
              />
            )
          }
        )}
        {props.product.specs?.map((spec, specIndex) => {
          return (
            <DiscriptionContainer heading={spec.specHeading} spec={spec.spec} />
          )
        })}
      </Accordion.Content>
    </div>
  )
}

const Slider = (props: { homepageSPSTpics: any; homepageSPSTthumbs: any }) => {
  const [currIndexNew, setCurrIndexNew] = useState<{
    index: number
    preIndex: number
  }>({
    index: 0,
    preIndex: -1,
  })

  const transition = useTransition(currIndexNew.index, {
    from: {
      opacity: 0,
      transform: `translate3d(${
        currIndexNew.index > currIndexNew.preIndex ? "100%" : "-100%"
      },0,0)`,
    },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: {
      opacity: 0.5,
      transform: `translate3d(${
        currIndexNew.index < currIndexNew.preIndex ? "50%" : "-50%"
      },0,0)`,
    },
    config: { duration: 700 },
  })

  useEffect(() => {
    let __tempInterval = setInterval(() => {
      if (currIndexNew.index == props.homepageSPSTpics.edges.length - 1) {
        setCurrIndexNew({ index: 0, preIndex: -1 })
      } else {
        setCurrIndexNew({
          index: currIndexNew.index + 1,
          preIndex: currIndexNew.index,
        })
      }
    }, 3000)
    return () => {
      clearInterval(__tempInterval)
    }
  }, [currIndexNew])

  const previousImage = () => {
    console.log("onSwipedRight")
    if (currIndexNew.index == 0) {
      setCurrIndexNew({
        index: props.homepageSPSTpics.edges.length - 1,
        preIndex: props.homepageSPSTpics.edges.length,
      })
    } else {
      setCurrIndexNew({
        index: currIndexNew.index - 1,
        preIndex: currIndexNew.index,
      })
    }
  }

  const nextImage = () => {
    console.log("onSwipedLeft")
    if (currIndexNew.index == props.homepageSPSTpics.edges.length - 1) {
      setCurrIndexNew({
        index: 0,
        preIndex: -1,
      })
    } else {
      setCurrIndexNew({
        index: currIndexNew.index + 1,
        preIndex: currIndexNew.index,
      })
    }
  }

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextImage,
    onSwipedRight: previousImage,
  })

  return (
    <div
      className={styles.imgContainer}
      style={{ position: "relative" }}
      {...swipeHandlers}
    >
      <div // images container
        className={styles.imgWidth}
        style={{
          overflow: "hidden",
          //backgroundColor: "red",
          position: "relative",
          display: "flex",
          ...globalStyles.shadowLight,
        }}
      >
        {transition((animatedStyles, item) => {
          return (
            <animated.div /// slides
              key={"_" + item}
              className={styles.imgWidth}
              style={{
                ...animatedStyles,
                position: "absolute",
                //backgroundColor: "blue",
              }}
            >
              <GatsbyImage
                image={
                  props.homepageSPSTpics.edges[item].node.childImageSharp
                    .gatsbyImageData
                }
                className={styles.imgWidth}
                style={{}}
                alt="HUElite"
              />
            </animated.div>
          )
        })}
      </div>
      <div // buttons => previous | next
        style={{
          position: "absolute",
          //display: "none", //REMOVE
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 3,
        }}
        className={styles.imgWidth}
      >
        <div
          style={{
            backgroundColor: "#ffffff55",
            padding: 15,
          }}
          onClick={previousImage}
        >
          <ArrowBackIosNewIcon fontSize="medium" style={{ color: "#000000" }} />
        </div>
        <div
          style={{
            backgroundColor: "#ffffff55",
            padding: 15,
          }}
          onClick={nextImage}
        >
          <ArrowBackIosNewIcon
            fontSize="medium"
            style={{ color: "#000000", transform: "rotate(180deg)" }}
          />
        </div>
      </div>
    </div>
  )
}

const DiscriptionContainer = (props: { spec: string; heading: string }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        minHeight: 40,
        borderBottomWidth: 1,
        borderBottomStyle: "solid",
        borderColor: "#aaa",
        padding: "0px 10px",
      }}
    >
      <div style={{ display: "flex", flex: 1 }}>
        <p
          style={{
            margin: "5px 0px",
            fontWeight: 500,
            color: "#444",
          }}
        >
          {props.heading}
        </p>
      </div>
      <div style={{ display: "flex", flex: 1 }}>
        <p
          style={{
            margin: "5px 0px",
            color: "#444",
          }}
        >
          {props.spec}
        </p>
      </div>
    </div>
  )
}
