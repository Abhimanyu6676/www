interface cartProduct_i extends Omit<product_i, "varients"> {
  varient: varient_i
  qty: number
}
interface cartReducer_i {
  cartList: cartProduct_i[]
  count?: number
}
