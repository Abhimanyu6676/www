import React from "react"
import { Subscribe } from "../../components/common/subscribe"
import HeaderFooterCover from "../../components/layouts/HeaderFooterCover"
import { AudienceSection } from "./audienceSection"
import { FeaturesSection } from "./featuresSection"
import { HomePageHeroSection } from "./heroSection"
import { HomePageProductSection } from "./homePageProductSection"

type Props = {}

export default (props: Props) => {
  console.log("Environment :: ", process.env.NODE_ENV)
  return (
    <HeaderFooterCover
      headerStyle={{
        //backgroundColor: "#aaaaaa77",
        position: "absolute",
        top: 0,
        zIndex: 10,
        width: "100vw",
      }}
      transparentHeader={true}
      helmetConfig={{
        title: "huelite.in",
      }}
    >
      <HomePageHeroSection />
      <HomePageProductSection />
      <FeaturesSection />
      <AudienceSection />
      <Subscribe />
    </HeaderFooterCover>
  )
}

{
  /* className={styles.subscribeSection} */
}
