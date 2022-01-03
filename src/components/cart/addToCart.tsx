import React from "react"
import { useDispatch } from "react-redux"
import { product_i, varient_i } from "../../products"
import { storeActions } from "../../redux"

interface Props {
  product: product_i | cartProduct_i
  varient: varient_i
  cartList: cartProduct_i[]
  /**
   * @important only use `height` property as the button share different styles based on cartList status,
   *            use wrapper to apply styles
   *
   *
   */
  style?: React.CSSProperties
}
export default (props: Props) => {
  const dispatch = useDispatch()
  let cartListItem = props.cartList.find(item => item.varient.varientCode == props.varient.varientCode)

  const addItemToCart = () => {
    let modified = false
    let newCartList = props.cartList.map(item => {
      if (item.varient.varientCode == props.varient.varientCode) {
        modified = true
        return { ...item, qty: item.qty + 1 }
      } else {
        return item
      }
    })
    if (!modified) newCartList.push({ ...props.product, varient: props.varient, qty: 1 })
    dispatch(
      storeActions.cartReducerActions.cartAction({
        cartList: newCartList,
      })
    )
  }

  const removeItemFromCart = () => {
    let modified = false
    let newCartList = props.cartList.map(item => {
      if (item.varient.varientCode == props.varient.varientCode) {
        /// remove item here
        modified = true
        if (item.qty > 1) return { ...item, qty: item.qty - 1 }
        else return undefined
      } else return item
    })
    dispatch(
      storeActions.cartReducerActions.cartAction({
        cartList: newCartList.filter(item => item != undefined),
      })
    )
  }

  if (!cartListItem?.qty)
    return (
      <div /// addToCard button
        style={{
          backgroundColor: "#2d2f30",
          width: "100%",
          color: "#fff",
          height: 50,
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flex: 1,
          ...props.style,
        }}
        onClick={() => {
          addItemToCart()
        }}
      >
        <h3>ADD TO CART</h3>
      </div>
    )
  else
    return (
      <div /// ADD & REMOVE BUTTONS
        style={{
          backgroundColor: "#fff",
          width: "100%",
          height: 50,
          display: "flex",
          flexDirection: "row",
          flex: 1,
          ...props.style,
        }}
      >
        <div /// `minus` button
          style={{
            backgroundColor: "#2d2f30",
            display: "flex",
            flexDirection: "row",
            width: 50,
            justifyContent: "center",
            alignItems: "center",
            border: "2px solid #fff",
          }}
          onClick={() => {
            removeItemFromCart()
          }}
        >
          <h2 style={{ color: "#fff" }}>-</h2>
        </div>

        <div /// quantity
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            border: "2px solid #fff",
            backgroundColor: "#f7f7f7",
            margin: "0px 10px",
          }}
        >
          <h3 style={{ color: "#2d2f30" }}>{cartListItem?.qty}</h3>
        </div>

        <div /// `plus` button
          style={{
            backgroundColor: "#2d2f30",
            display: "flex",
            flexDirection: "row",
            width: 50,
            justifyContent: "center",
            alignItems: "center",
            border: "2px solid #fff",
          }}
          onClick={() => {
            addItemToCart()
          }}
        >
          <h2 style={{ color: "#fff" }}>+</h2>
        </div>
      </div>
    )
}
