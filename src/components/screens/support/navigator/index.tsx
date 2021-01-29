import { graphql, useStaticQuery } from "gatsby"
import React from 'react'
//@ts-ignore
import styles from "./index.module.scss"
import Img from "gatsby-image";


interface navigatorMenu_i {
  imgData: any
  heading: string
  subText: string
}


interface Props { }
export default ({ }: Props) => {
  const data = useStaticQuery(graphql`
        query {
            img1: file(relativePath: {eq: "support/guide.png"}) {
              childImageSharp {
                fluid(maxWidth: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            img2: file(relativePath: {eq: "support/conversation.png"}) {
              childImageSharp {
                fluid(maxWidth: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            img3: file(relativePath: {eq: "support/chat.png"}) {
              childImageSharp {
                fluid(maxWidth: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
                  
        `)
  const navigatorMenu: navigatorMenu_i[] = [
    { heading: "Guides", subText: "Getting Started and Warranty Claims", imgData: data.img1 },
    { heading: "FAQ", subText: "Setup Articles, How-to guides for Huelite products & App", imgData: data.img2 },
    { heading: "Community", subText: "Use cases of Huelite Products by our customers & Blogs", imgData: data.img3 },
  ]


  return (
    <div className={styles.navigatorContainer} style={{}} /* Sec1: navigator => Guide/faq/community*/>
      {navigatorMenu.map((item, index) => {
        return (
          <NavigatorCard item={item} />
        )
      })}
    </div>
  )
}


interface navigatorCardProps {
  item: navigatorMenu_i
}
const NavigatorCard = ({ item }: navigatorCardProps) => {
  return (
    <div className={styles.navigatorCard}>
      <Img fluid={item.imgData.childImageSharp.fluid} style={{ width: 60 }} />
      <h1 style={{ textAlign: "center" }}>{item.heading}</h1>
      <h4 style={{ textAlign: "center", fontWeight: "normal", marginTop: 25 }}>{item.subText}</h4>
    </div>
  )
}