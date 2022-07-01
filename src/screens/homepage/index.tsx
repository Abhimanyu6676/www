import React from "react"
import { Subscrible } from "../../components/common/subscrible"
import { AudieanceSection } from "./audienceSection"
import { FeaturesSection } from "./featuresSection"
import { HomePageHeroSection } from "./heroSection"
import Sec2 from "./Sec2"
import * as styles from "./index.module.scss"

type Props = {}

export const Homepage = (props: Props) => {
  return (
    <div>
      <HomePageHeroSection />
      <Sec2 />
      <FeaturesSection />
      <AudieanceSection />
      <Subscrible />
    </div>
  )
}

{
  /* className={styles.subscribeSection} */
}
