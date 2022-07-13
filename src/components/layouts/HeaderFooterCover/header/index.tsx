import React from "react"
import { DesktopHeader } from "./desktopHeader"
import { MobileHeader } from "./mobileHeader"
import * as styles from "./index.module.css"

export const primartMenu: Link_i[] = [
  { text: "Products", link: "/products/spectrum-strip" },
  { text: "App", link: "/app" },
  { text: "Support", link: "/support" },
  { text: "Contact Us", link: "/contact-us" },
]
type Props = {
  style?: React.CSSProperties
  transparent?: boolean
}
export default (props: Props) => {
  return (
    <div
      className={styles.main}
      style={{
        backgroundColor: props.transparent ? "#aaaaaa77" : "#ffffff",
        ...props.style,
      }}
    >
      <MobileHeader transparent={props.transparent} />
      <DesktopHeader transparent={props.transparent} />
    </div>
  )
}
