interface varient_i {
  varientCode: string
  price: number
  varientHighlight: string
  varientSpecifications?: { key: string; value: string }[]
}
interface product_i {
  productName: string
  productCode: string
  productSubtitle: string
  productSpecifications?: { key: string; value: string }[]
  varients: varient_i[]
  offerText?: string
  productIconUrl: string
  description?: string
}
