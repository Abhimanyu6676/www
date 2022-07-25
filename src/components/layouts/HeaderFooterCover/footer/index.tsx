import { Link } from "gatsby"
import React from "react"
import * as styles from "./footer.module.scss"

const menu1: Link_i[] = [
  { text: "About Us", link: "/" },
  { text: "HUElite Blog", link: "/" },
  { text: "Careers", link: "/" },
  { text: "Media", link: "/" },
  { text: "CSR", link: "/" },
  { text: "Contact Us", link: "/" },
]

const menu2: Link_i[] = [
  { text: "Tutorial", link: "/" },
  { text: "Download Center", link: "/" },
  { text: "Manual & Guides", link: "/" },
  { text: "Feedback", link: "/" },
  { text: "Support", link: "/" },
  { text: "FAQ", link: "/" },
]

const menu3: Link_i[] = [
  { text: "Return & Shipping Policy", link: "/" },
  { text: "Terms & Conditions", link: "/" },
  { text: "Privacy Policy", link: "/" },
  { text: "E-Waste Management", link: "/" },
  { text: "Do'd & Don'ts", link: "/" },
  { text: "Where to Buy", link: "/" },
]

type Props = {}
export default (props: Props) => {
  return (
    <div
      className={styles.main}
      style={{
        display: "flex",
        margin: "50px 0px",
      }}
    >
      <div>
        <h2 className={styles.linkRowHeading}>HUElite</h2>
        <FooterMenu menu={menu1} />
      </div>
      <div>
        <h2 className={styles.linkRowHeading}>Support</h2>
        <FooterMenu menu={menu2} />
      </div>
      <div>
        <h2 className={styles.linkRowHeading}>Extended Menu</h2>
        <FooterMenu menu={menu3} />
      </div>
    </div>
  )
}

const FooterMenu = (props: { menu: Link_i[] }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {props.menu.map((item, index) => {
        return (
          <Link
            key={index + "_"}
            to={item.link}
            style={{
              textDecoration: "none",
              margin: "10px 0px",
            }}
          >
            <p
              className={styles.linkText}
              style={{
                margin: 0,
                color: "#777777",
              }}
            >
              {item.text}
            </p>
          </Link>
        )
      })}
    </div>
  )
}
