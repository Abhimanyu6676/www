import React from "react"
import globalStyles from "../../../../styles/globalStyles"
import { FadeInSection, FadeInSectionCSS } from "../../../common/fadeInSection"

type Props = {}
export const GetStarted = (props: Props) => {
  return (
    <div style={{}}>
      <FadeInSectionCSS>
        <div
          style={{
            width: 300,
            height: 300,
            borderRadius: 10,
            overflow: "hidden",
            background:
              "linear-gradient(45deg, rgba(255,53,0,0.5984768907563025) 2%, rgba(255,109,0,0.6208858543417367) 44%, rgba(255,224,0,0.5844712885154062) 100%)",
            ...globalStyles.shadowLight,
            margin: 10,
          }}
        ></div>
      </FadeInSectionCSS>
    </div>
  )
}
