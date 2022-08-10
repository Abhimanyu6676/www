import React from "react"
import { ProductSection1 } from "../../components/common/productSection1"
import { Subscribe } from "../../components/common/subscribe"
import HeaderFooterCover from "../../components/layouts/HeaderFooterCover"
import appColors from "../../styles/appColors"
import { AudienceSection } from "./audienceSection"
import { FeaturesSection } from "./featuresSection"
import { HomePageHeroSection } from "./heroSection"

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
        title: "www.huelite.in/",
        description:
          "Wi-Fi Controlled Smart Lighting 💡📲, The Best Smart Lights Ever 🔥 Level up your Work From Home experience",
      }}
    >
      <HomePageHeroSection />
      <div
        style={{
          paddingTop: "5rem",
          paddingBottom: "2.5rem",
          backgroundColor: appColors.backgrounds.greyLight,
        }}
      >
        <ProductSection1
          containerStyle={{}}
          buyButtonConf={{
            id: "AMZ_BUY_BUTTON_homepage",
            link: "https://www.amazon.in/s?me=ADEJJYXA274FU&ref=sf_seller_app_share_new",
          }}
        />
      </div>
      <FeaturesSection />
      <AudienceSection />
      <Subscribe />
    </HeaderFooterCover>
  )
}

{
  /* className={styles.subscribeSection} */
}
