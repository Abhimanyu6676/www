import React from "react"
import Img from "gatsby-image"
import { FadeInSection } from "../FadeInSection"

export default (props: {
  source: any
  children?: any
  heading?: string
  description?: string
}) => {
  return (
    <div /// sec 3
      style={{}}
    >
      <Img
        fluid={props.source}
        //style={{ minHeight: "60vh" }}
      />
      {props.children ? (
        props.children
      ) : (
        <div
          style={{
            marginTop: 20,
          }}
        >
          <FadeInSection>
            <h1>{props.heading}</h1>
            <h3 style={{ marginTop: 15, fontWeight: 400, lineHeight: 1.4 }}>
              {props.description}
            </h3>
          </FadeInSection>
        </div>
      )}
    </div>
  )
}
