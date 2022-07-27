import { fontWeight } from "@mui/system"
import React from "react"
import * as styles from "./reviewSection.module.scss"
import StarIcon from "@mui/icons-material/Star"
import appColors from "../../../styles/appColors"

interface review_i {
  heading: string
  subHeading?: string
  text: string
  reviewDetails?: {
    owner: string
    variant: string
  }
}

type Props = {}
const reviews: review_i[] = [
  {
    heading: "Affordable & feature packed",
    text: "It’s bright enough to be the only light source you might need in a small room...and the colors are absolutely gorgeous.",
    reviewDetails: {
      owner: "Mohit Rana",
      variant: "Huelite 3.0 Smart RGB Strip (5 Meters)",
    },
  },
  {
    heading: "Great lights!",
    text: "Its colour and responsiveness are great, and setup was very easy. The customer support was also quick to response and helpful.",
    reviewDetails: {
      owner: "Aksh",
      variant: "Huelite 3.0 Smart RGB Strip (5 Meters)",
    },
  },
  {
    heading: "Easy to setup",
    text: "The product has good brightness, was easy to setup without much hassle. The adhesiveness is great till now still counting.",
    reviewDetails: {
      owner: "Rahul",
      variant: "Huelite 3.0 Smart RGB Strip (10 Meters)",
    },
  },
]
export const SPSTReviewSection = (props: Props) => {
  return (
    <div className={styles.reviewGrid} style={{}}>
      {reviews.map((review, reviewIndex) => {
        return (
          <div
            style={{
              //backgroundColor: "red",
              backgroundColor: appColors.backgrounds.greyLight,
              borderRadius: 20,
              textAlign: "center",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h3>{review.heading}</h3>
            {review.subHeading && (
              <i style={{ fontSize: 12 }}>{review.subHeading}</i>
            )}

            <div style={{ display: "flex", marginTop: "1rem" }}>
              {[1, 2, 3, 4, 5].map(() => {
                return <StarIcon style={{ color: "#f2a942", fontSize: 25 }} />
              })}
            </div>
            <p style={{ marginTop: "2rem" }}>{review.text}</p>
            {review.reviewDetails && (
              <p style={{ fontWeight: "600", fontSize: 14, marginTop: "2rem" }}>
                <b>{review.reviewDetails?.owner}</b>, for{" "}
                {review.reviewDetails?.variant}
              </p>
            )}
          </div>
        )
      })}
    </div>
  )
}
