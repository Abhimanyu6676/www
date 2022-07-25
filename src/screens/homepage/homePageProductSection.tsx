import React from "react"
import { ProductSection1 } from "../../components/common/productSection1"
import appColors from "../../styles/appColors"

type Props = {}
export const HomePageProductSection = (props: Props) => {
  return (
    <ProductSection1
      style={{
        backgroundColor: appColors.backgrounds.greyLight,
      }}
    />
  )
}
