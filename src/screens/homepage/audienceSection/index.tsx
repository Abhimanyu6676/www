import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SectionType1 from "../../../components/common/sectionType1"
import appColors from "../../../styles/appColors"

type Props = {}

export const AudieanceSection = (props: Props) => {
  const imgData = useStaticQuery(graphql`
    query {
      gaming: file(
        relativePath: { eq: "homepage/audienceSection/gaming.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 1024, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      gaming_sm: file(
        relativePath: { eq: "homepage/audienceSection/gaming.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 600, layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      interior: file(
        relativePath: { eq: "homepage/audienceSection/interior.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 1024, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      interior_sm: file(
        relativePath: { eq: "homepage/audienceSection/interior.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 600, layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  `)
  return (
    <div>
      <SectionType1
        srcSetImgs={{
          img: imgData.gaming,
          img_sm: imgData.gaming_sm,
        }}
        content={{
          heading: "Working from home?",
          text: "Enhance your gameplay, with lighting that lets your skills thrive. Transport yourself into the world of your game by transforming your space with vibrant colors. Bold hues to match the game you’re currently into will help you create the fully immersive experience you’ve been waiting for.",
          /*  button: {
          text: "Learn More",
          link: "/pages/work-from-home",
        }, */
        }}
      />

      <SectionType1
        config={{
          desktopContentOnLeft: true,
        }}
        srcSetImgs={{
          img: imgData.interior,
          img_sm: imgData.interior_sm,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <h1 style={{ margin: 0 }}>For Content creators</h1>
          <h4
            style={{
              margin: 0,
              backgroundColor: appColors.backgrounds.greyHard,
              padding: "3px 10px",
              borderRadius: 50,
            }}
          >
            Interior design
          </h4>
          <p style={{ marginTop: 20 }}>
            Set the mood in the whole room by choosing a color that suits your
            mood. Place a Huelite Lightstrip underneath your bed to create a
            sophisticated floating effect. This setup also works for a couch if
            that’s your thing, we don’t judge.
          </p>
          {/*  <Link
              to="/pages/tv-lighting"
              style={{
                backgroundColor: appColors.black_1,
                height: 50,
                width: 200,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "0px 10px",
                marginTop: 30,
              }}
            >
              <h3 style={{ color: "#fff" }}>Learn More</h3>
            </Link> */}
        </div>
      </SectionType1>
    </div>
  )
}
