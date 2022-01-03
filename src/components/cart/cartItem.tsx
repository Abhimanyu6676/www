import { Entypo } from "@expo/vector-icons"
import React from "react"
import { cartProduct_i } from "../../redux/cartReducer"
import AddToCart from "./addToCart"

export default (props: { product: cartProduct_i; cartList: cartProduct_i[] }) => {
  return (
    <div>
      <div /// item image and name container
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 20,
        }}
      >
        <img
          style={{
            marginLeft: 5,
            height: 100,
            width: 100,
          }}
          src="https://cdn.shopify.com/s/files/1/0509/6416/8864/products/SinglebulbBayonetB22_1800x1800_c0a55e7c-3e42-4ea4-8953-653a38948bec.jpg?v=1614618910"
        />
        <div>
          <h2 style={{ marginLeft: 10, marginTop: 0 }}>{props.product.productName}</h2>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-end",
              marginTop: 5,
            }}
          >
            <h4 style={{ marginLeft: 10, marginTop: 0 }}>{props.product.varient.varientHighlight}</h4>
            <h5 style={{ fontWeight: 400, marginLeft: 10 }}>{props.product.productSubtitle}</h5>
          </div>
        </div>
      </div>

      <div /// quantity & amount container
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <div
          style={{
            flex: 1,
          }}
        >
          <AddToCart varient={props.product.varient} product={props.product} cartList={props.cartList} style={{ height: 40, maxWidth: 200 }} />
        </div>
        <h3 style={{ textAlign: "right" }}>
          <p style={{ color: "green", fontSize: 12 }}>-25%</p>
          {props.product.varient.price * props.product.qty}
        </h3>
      </div>
    </div>
  )
}
