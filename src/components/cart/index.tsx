import React from "react"
import { ScrollView } from "react-native"
import { useSelector } from "react-redux"
import { auroraStrip, spectrumStrip } from "../../products"
import { cartProduct_i } from "../../redux/cartReducer"
import { storeRootState } from "../../redux"
import { FadeInSection } from "../common/FadeInSection"
import CartItem from "./cartItem"

interface Props {}
export default (props: Props) => {
  const cartList = useSelector<storeRootState, cartProduct_i[]>(state => state.cartReducer.cartList)
  let subTotal = 0
  cartList.forEach(item => {
    subTotal += item.qty * item.varient.price
  })
  return (
    <ScrollView
      style={{
        height: "80vh",
        //backgroundColor: "red",
      }}
      showsVerticalScrollIndicator={false}
    >
      <div style={{ paddingBottom: 100 }}>
        <div /// offer container
          style={{
            margin: "0px 0px",
            marginTop: 20,
            backgroundColor: "#AED6F1",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <img
            style={{
              margin: "20px 10px",
              height: 100,
              width: 100,
              border: "2px dashed #777",
            }}
            src="https://cdn.shopify.com/s/files/1/0509/6416/8864/products/SinglebulbBayonetB22_1800x1800_c0a55e7c-3e42-4ea4-8953-653a38948bec.jpg?v=1614618910"
          />
          <div>
            <h4
              style={{
                marginTop: 20,
              }}
            >
              buy 2 & get 25% off
            </h4>
            <p style={{ marginTop: 10 }}>For a limited time all orders over Rs-2000 will qualify for additional 25% off</p>
          </div>
        </div>

        <h1 /// heading 'cart'
          style={{
            marginTop: 30,
            borderStyle: "solid",
            borderWidth: 0,
            borderColor: "#dddddd",
            paddingBottom: 5,
            borderBottomWidth: 1,
          }}
        >
          Cart
        </h1>

        <div /// cart items container
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "30vh",
            marginTop: 20,
            //backgroundColor: "red",
            flex: 1,
          }}
        >
          {cartList.map(item => {
            return (
              <div>
                <CartItem product={item} cartList={cartList} />
                <div style={{ height: 50 }} />
              </div>
            )
          })}
        </div>

        <div /// subtotal & checkout container
          style={{}}
        >
          <div // subtotal section
            style={{
              //backgroundColor: "green",
              marginTop: 50,
              borderColor: "#dddddd",
              borderWidth: 0,
              borderStyle: "solid",
              borderTopWidth: 1,
              //borderBottomWidth: 1,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <h3 style={{ marginTop: 10, marginBottom: 10, flex: 1 }}>Subtotal</h3>
            <h3>{subTotal}</h3>
          </div>

          <h4 style={{ marginTop: 30, textAlign: "center" }}>Amount includes taxes, discounts codes and free shipping</h4>

          <div
            style={{
              height: 50,
              backgroundColor: "#2d2f30",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 50,
            }}
          >
            <h3 style={{ color: "#ffffff" }}>CHECKOUT</h3>
          </div>
        </div>
      </div>
    </ScrollView>
  )
}
