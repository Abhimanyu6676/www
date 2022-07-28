import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import SectionType2 from "../../../components/common/sectionType2"
import appColors from "../../../styles/appColors"
import * as styles from "./featureSection.module.scss"

type Props = {
  containerStyle?: React.CSSProperties
}

export const SpectrumStripFeatureSection = (props: Props) => {
  const imageData = useStaticQuery(graphql`
    query {
      music: file(
        relativePath: { eq: "products/spectrumStrip/images/features/music.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 1024, placeholder: BLURRED)
        }
      }
      voiceIntegration: file(
        relativePath: {
          eq: "products/spectrumStrip/images/features/voiceIntegration.png"
        }
      ) {
        childImageSharp {
          gatsbyImageData(width: 1024, placeholder: BLURRED)
        }
      }
    }
  `)

  return (
    <div className={styles.container} style={{ ...props.containerStyle }}>
      <div>
        <SectionType2
          img={imageData.music}
          config={{
            roundedCornersOnImgAndButton: true,
            desktopContentOnLeft: true,
          }}
          contentConfig={{
            yAlign: "center",
          }}
          content={{
            heading: "Music Sync",
            /*  text: "Recreate the dance floor ambiance right in your house with the Huelite smart led strip. This led strip syncs with music and adds that extra element to your party making it the most-happening home party in your neighborhood.", */
            text: "You can relax or entertain your guests with a light show by syncing the lights with your favourite tunes.",
            //button: { text: "Learn More" },
          }}
        />
      </div>

      <div
        style={{
          marginTop: 50,
        }}
      >
        <SectionType2
          img={imageData.voiceIntegration}
          config={{ roundedCornersOnImgAndButton: true }}
          contentConfig={{
            yAlign: "center",
          }}
          content={{
            heading: "Hands Free Control",
            /* subHeading: "Create your own magic with DIY preset modes",
              text: "HUElite strips can shift through tones during bedtime story, invigorate you for your daily workout emulate a warm candle flicker when you’re settled in for the night.", */
            text: "Leave the app in your pocket and use voice control to set the perfect light for the task or mood.",
          }}
        />
      </div>
    </div>
  )
}
