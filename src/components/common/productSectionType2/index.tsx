import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { useTransition, useSpring, animated } from "react-spring"
import { ScrollView } from "react-native"
import { FontAwesome, MaterialIcons } from "@expo/vector-icons"
import { FadeInSection } from "../FadeInSection"
import Collapsible from "../Collapsible"
import { useDispatch, useSelector } from "react-redux"
import { storeRootState } from "../../../redux"
import { cartProduct_i } from "../../../redux/cartReducer"
import { storeActions } from "../../../redux"
import { product_i, varient_i } from "../../../products"
import AddToCart from "../../cart/addToCart"
//@ts-ignore
import styles from "./index.module.scss"

interface Props {
  images: any
  thumbs: any
  product: product_i
}
export default (props: Props) => {
  const [index, setIndex] = useState<number>(0)
  const [varientIndex, setVarientIndex] = useState(0)
  const cartList = useSelector<storeRootState, cartProduct_i[]>(state => state.cartReducer.cartList)

  let cartListItem = cartList.find(item => item.varient.varientCode == props.product.varients[varientIndex].varientCode)

  const transition = useTransition(props.images.edges[index], item => item.node.id, {
    from: { opacity: 0, transform: "translateX(20px)" },
    enter: { opacity: 1, transform: "translateX(0px)" },
    leave: { opacity: 0, transform: "translateX(-20px)" },
    //config: { duration: 500 },
  })

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      {transition.map(({ item, props, key }) => {
        return (
          <animated.div /// slides
            key={key}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100vw",
              height: "90vw",
              ...props,
            }}
          >
            <Img fluid={item.node.childImageSharp.fluid} style={{ height: "90vw", width: "90vw", margin: "0px 5vw" }} />
          </animated.div>
        )
      })}

      <div /// absolute filler & next/pre buttons
        style={{
          height: "90vw",
          zIndex: 2,
        }}
      >
        <div /// buttons
          style={{
            position: "absolute",
            top: "45vw",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "90vw",
            margin: "0px 5vw",
          }}
        >
          <button
            onClick={() => {
              if (index > 0) setIndex(index - 1)
              else setIndex(props.images.edges.length - 1)
            }}
          >
            pre
          </button>
          <button
            onClick={() => {
              if (index < props.images.edges.length - 1) setIndex(index + 1)
              else setIndex(0)
            }}
          >
            next
          </button>
        </div>
      </div>

      <ScrollView /// thumbnails container
        horizontal
        style={{
          //backgroundColor: "red",
          height: 120, /// 100px thumbnail height + 10px margin -top-bottom
          marginTop: 20,
        }}
      >
        {props.thumbs.edges.map((item, itemIndex) => {
          return (
            <div
              onClick={() => {
                setIndex(itemIndex)
              }}
              key={"_" + itemIndex}
              style={{
                width: 100,
                height: 100,
                border: index == itemIndex ? "2px solid #2d2f30" : "0px solid #ffffff00",
                marginLeft: 30,
                marginTop: 10,
                marginBottom: 10,
                marginRight: itemIndex == props.thumbs.edges.length - 1 ? 30 : 0,
              }}
            >
              <Img fluid={item.node.childImageSharp.fluid} style={{}} />
            </div>
          )
        })}
      </ScrollView>

      <div /// divider
        style={{ width: "100vw", height: 30 }}
      />

      <div /// product name, heading, description -- addToCart button -- detailed description
        style={{ paddingLeft: 30, paddingRight: 30 }}
      >
        <div /// product varients, name, description & Prices
        >
          <p>HUElite</p>
          <h1>{props.product.productName}</h1>
          <p style={{ fontWeight: "bold" }}>{props.product.productSubtitle}</p>

          <div /// varients container
            style={{ display: "flex", flexWrap: "wrap", marginTop: 15 }}
          >
            {props.product.varients.map((varientItem, varientItemIndex) => {
              return (
                <div /// varient Item
                  onClick={() => {
                    setVarientIndex(varientItemIndex)
                  }}
                  style={{
                    //border: `${varientIndex == varientItemIndex ? "1px" : "0px"} solid #2d2f30`,
                    marginRight: 20,
                    padding: "8px 15px",
                    backgroundColor: varientIndex == varientItemIndex ? "#2d2f30" : "#fff",
                    boxShadow: `0px 0px 2px 0px rgba(0,0,0,0.75)${varientIndex == varientItemIndex ? "" : "inset"}`,
                    color: varientIndex == varientItemIndex ? "#fff" : "#2d2f30",
                  }}
                >
                  <h5 style={{ fontWeight: varientIndex == varientItemIndex ? 500 : 400 }}>{varientItem.varientHighlight}</h5>
                </div>
              )
            })}
          </div>
          <h3 style={{ marginTop: 15 }}>Rs-{props.product.varients[varientIndex].price}/-</h3>
          <h5 style={{ fontWeight: "normal" }}>{props.product.offerText}</h5>
        </div>

        <div /// addToCart container
          style={{
            marginTop: 20,
          }}
        >
          <AddToCart varient={props.product.varients[varientIndex]} cartList={cartList} product={props.product} />
        </div>

        <div /// product detailed description
          style={{ marginTop: 30 }}
        >
          <p>
            LIFX Clean has the power to eliminate bacteria in your home, as well as enhance your home setup with innovative smart tech functionality.
          </p>
          <p style={{ marginTop: 15 }}>
            By scheduling LIFX Clean to activate its Clean Cycle in the hours that you’re not using it as a standard smart light, HEV lighting will
            switch on to help mitigate harmful bacteria on surfaces and objects in your home.
          </p>
          <p style={{ marginTop: 15 }}>
            Without lifting a finger, clean your phone, keys, makeup brushes, kitchen cutting boards and more. Plus, it’s is safe for you, your
            family, your pets and your plants.
          </p>
          <h4 style={{ marginTop: 25 }}>There’s never been a lighter way to a cleaner home.</h4>
          <p style={{ marginTop: 15 }}>
            Please note that as we are still awaiting state-level approval for orders in Hawaii. We are unfortunately unable to provide a timeline on
            final approval. We apologise for the inconvenience and thank you for your understanding.
          </p>
        </div>
      </div>

      <div /// divider
        style={{ width: "100vw", height: 30 }}
      />

      <FadeInSection>
        <Collapsible heading="HIGHLIGHTS">
          <p
            style={{
              width: "90vw",
              margin: "30px 5vw",
            }}
          >
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered
            the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
            Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of
            Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
          </p>
        </Collapsible>

        <Collapsible
          heading="PRODUCT SPECFICATIONS"
          headerStyles={{
            borderTopWidth: 0,
          }}
        >
          <p
            style={{
              width: "90vw",
              margin: "30px 5vw",
            }}
          >
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered
            the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
            Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of
            Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
          </p>
        </Collapsible>

        <div /// share icons
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100vw",
            marginTop: 30,
            marginLeft: 30,
            marginRight: 30,
            alignItems: "center",
          }}
        >
          <FontAwesome name="facebook-f" size={20} color="#2d2f30" style={{ marginRight: 20 }} />
          <FontAwesome name="instagram" size={20} color="#2d2f30" style={{ marginRight: 20 }} />
          <FontAwesome name="whatsapp" size={20} color="#2d2f30" style={{ marginRight: 20 }} />
        </div>
      </FadeInSection>
    </div>
  )
}
