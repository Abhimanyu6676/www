import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import SectionType2 from "../../../components/common/sectionType2"
import appColors from "../../../styles/appColors"
import * as styles from "./featureSection.module.scss"

type Props = {}

export const SpectrumStripFeatureSection = (props: Props) => {
  const imageData = useStaticQuery(graphql`
    query {
      integration: file(
        relativePath: { eq: "homepage/featuresSection/integrations.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 1024, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      music: file(
        relativePath: { eq: "homepage/featuresSection/musicSync.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 1024, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      modes: file(relativePath: { eq: "homepage/featuresSection/modes.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 1024, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  `)

  return (
    <div
      style={
        {
          //backgroundColor: appColors.backgrounds.greyLight,
        }
      }
    >
      <div className={styles.container}>
        <div>
          <SectionType2
            img={imageData.music}
            config={{
              roundedCornersOnImgAndButton: true,
              desktopContentOnLeft: true,
            }}
            content={{
              heading: "Music Sync",
              text: "Recreate the dance floor ambiance right in your house with the Huelite smart led strip. This led strip syncs with music and adds that extra element to your party making it the most-happening home party in your neighborhood.",
              /* text: "You can relax or entertain your guests with a light show by syncing the lights with your favourite tunes.", */
              //button: { text: "Learn More" },
            }}
          />
        </div>

        <div
          style={{
            margin: "50px 0px",
          }}
        >
          <SectionType2
            img={imageData.modes}
            config={{ roundedCornersOnImgAndButton: true }}
            content={{
              heading: "Hands Free Control",
              /* subHeading: "Create your own magic with DIY preset modes",
              text: "HUElite strips can shift through tones during bedtime story, invigorate you for your daily workout emulate a warm candle flicker when you’re settled in for the night.", */
              text: "Leave the app in your pocket and use voice control",
            }}
          />
        </div>
      </div>
    </div>
  )
}
