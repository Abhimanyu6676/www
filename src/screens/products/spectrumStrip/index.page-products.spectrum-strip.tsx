import React from "react"
import { ProductSection1 } from "../../../components/common/productSection1"
import HeaderFooterCover from "../../../components/layouts/HeaderFooterCover"
import { SpectrumStripFeatureSection } from "./featureSection"
//@ts-ignore
import Helmet from "react-helmet"
import { SecondaryFeatureGrid } from "./secondaryFeatureGrid"
import { SwitchSection } from "./switchSection"
import { SPSTReviewSection } from "./reviewSection"
import { Subscribe } from "../../../components/common/subscribe"

type Props = {}
const SpstComp = (props: Props) => {
  return (
    <HeaderFooterCover
      helmetConfig={{
        title: "products/spectrum-strip",
      }}
    >
      <ProductSection1
        containerStyle={{
          marginTop: "4rem",
        }}
        buyButtonConf={{
          id: "AMZ_BUY_BUTTON_products/spectrum-strip",
          link: "https://www.amazon.in/s?me=ADEJJYXA274FU&ref=sf_seller_app_share_new",
        }}
      />
      <SpectrumStripFeatureSection
        containerStyle={{
          marginTop: "5rem",
        }}
      />
      <SecondaryFeatureGrid
        containerStyle={{
          marginTop: "5rem",
        }}
      />
      <SwitchSection
        containerStyles={{
          marginTop: "5rem",
        }}
      />
      <SPSTReviewSection />
      <Subscribe />
    </HeaderFooterCover>
  )
}

export default SpstComp
