import { fontWeight } from "@mui/system"
import React from "react"
import * as styles from "./reviewSection.module.scss"
import StarIcon from "@mui/icons-material/Star"
import appColors from "../../../styles/appColors"

type Props = {}
const reviews = [
  "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
  "Lorem ipsum dolor sit amet consectetur.",
  "Lorem ipsum dolor sit amet consectetur.",
]
export const SPSTReviewSection = (props: Props) => {
  return (
    <div className={styles.reviewGrid} style={{}}>
      {reviews.map((txt, txtIndex) => {
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
            <h3>Lorem, ipsum dolor.</h3>
            <i style={{ fontSize: 12 }}>Lorem, ipsum dolor.</i>

            <div style={{ display: "flex", marginTop: "0.5rem" }}>
              {[1, 2, 3, 4, 5].map(() => {
                return <StarIcon style={{ color: "#f2a942", fontSize: 25 }} />
              })}
            </div>
            <p style={{ marginTop: "2rem" }}>{txt}</p>
            <p style={{ fontWeight: "600", fontSize: 14, marginTop: "1rem" }}>
              "Lorem ipsum dolor sit amet consectetur."
            </p>
          </div>
        )
      })}
    </div>
  )
}
