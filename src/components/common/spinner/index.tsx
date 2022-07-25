import React from "react"
import * as styles from "./index.module.scss"

type Props = {
  radius?: number
}
/**
 *
 * @description this component takes the size of fixed size parent. or pass in the radius prop
 *
 * purely css based
 *
 * @returns loader/spinner component
 */
export const Spinner = (props: Props) => {
  return (
    <div
      style={{
        width: props.radius ? props.radius : "100%",
        height: props.radius ? props.radius : "100%",
      }}
    >
      <svg
        className={styles.svg}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          display: "block",
        }}
      >
        <circle cx="50" cy="50" r="45" className={styles.circle} />
      </svg>
    </div>
  )
}
