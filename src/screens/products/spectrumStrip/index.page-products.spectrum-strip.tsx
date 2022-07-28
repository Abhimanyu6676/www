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
    <div>
      <HeaderFooterCover>
        <ProductSection1
          containerStyle={{
            marginTop: "5rem",
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
    </div>
  )
}

export default SpstComp
