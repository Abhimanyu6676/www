export interface varient_i {
  varientCode: string
  price: number
  varientHighlight: string
  varientSpecifications?: { key: string; value: string }[]
}

export interface product_i {
  productName: string
  productCode: string
  productSubtitle: string
  productSpecifications?: { key: string; value: string }[]
  varients: varient_i[]
  offerText?: string
  productIconUrl: string
  description?: string
}

export const spectrumStrip: product_i = {
  productName: "HUElite Spectrum Strip",
  productCode: "ee88-b4",
  description: "30 led/mtr",
  productIconUrl: "",
  offerText: "Buy 2 and get 25% off",
  productSubtitle: "30 led/mtr",
  varients: [
    {
      varientCode: "9801-b93b-a7",
      price: 1999,
      varientHighlight: "5 mtr",
    },
    {
      varientCode: "72bd-6600-54",
      price: 1299,
      varientHighlight: "2 mtr",
    },
    {
      varientCode: "a2c8-8efd-a3",
      price: 1499,
      varientHighlight: "3 mtr",
    },
  ],
}
export const auroraStrip: product_i = {
  productName: "Aurora Strip",
  productCode: "ebc9-89",
  description: "60 led/mtr",
  productIconUrl: "",
  productSubtitle: "60 led/mtr",
  varients: [
    {
      varientCode: "3dbf-5587-0a",
      price: 2299,
      varientHighlight: "5 mtr",
    },
    {
      varientCode: "aedc-dde2-ea",
      price: 1599,
      varientHighlight: "2 mtr",
    },
    {
      varientCode: "f8b2-2609-ae",
      price: 1899,
      varientHighlight: "3 mtr",
    },
  ],
}
