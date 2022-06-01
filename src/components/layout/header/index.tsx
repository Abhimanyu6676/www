import React, { useState } from "react"
//@ts-ignore
import * as styles from "./index.module.css"
import { MobileHeader } from "./mobileHeader"
import { DesktopHeader } from "./desktopHeader"

export const primartMenu: Link_i[] = [
  { text: "Products", link: "/products" },
  { text: "App", link: "/app" },
  { text: "Support", link: "/support" },
  { text: "Contact Us", link: "/contact_us" },
]
type Props = {}
export default (props: Props) => {
  return (
    <div className={styles.main}>
      <MobileHeader />
      <DesktopHeader />
    </div>
  )
}
