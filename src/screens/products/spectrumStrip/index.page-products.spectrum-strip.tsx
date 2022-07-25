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
        <ProductSection1 />
        <SpectrumStripFeatureSection />
        <SecondaryFeatureGrid />
        <SwitchSection />
        <SPSTReviewSection />
        <Subscribe />
      </HeaderFooterCover>
    </div>
  )
}

export default SpstComp
