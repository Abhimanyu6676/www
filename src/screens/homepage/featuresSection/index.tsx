import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SectionType2 from "../../../components/common/sectionType2"
import * as styles from "./index.module.scss"

type Props = {}

export const FeaturesSection = (props: Props) => {
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
      style={{
        padding: "100px 0px",
      }}
      className={styles.container}
    >
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
            button: { text: "Learn More" },
          }}
        />
      </div>

      <div
        style={{
          margin: "100px 0px",
        }}
      >
        <SectionType2
          img={imageData.modes}
          config={{ roundedCornersOnImgAndButton: true }}
          content={{
            heading: "Modes & Presets",
            subHeading: "Create your own magic with DIY preset modes",
            text: "HUElite strips can shift through tones during bedtime story, invigorate you for your daily workout emulate a warm candle flicker when you’re settled in for the night.",
            button: { text: "Learn More" },
          }}
        />
      </div>

      <div>
        <SectionType2
          img={imageData.integration}
          config={{
            roundedCornersOnImgAndButton: true,
            desktopContentOnLeft: true,
          }}
          content={{
            heading: "Voice Integrations",
            subHeading: "Alexa, turn-on bedroom light",
            text: "You have settled in your sofa for a streaming binge but left the lights on, no need to jump to the switch just ask Alexa.",
            button: { text: "Learn More" },
          }}
        />
      </div>
    </div>
  )
}
