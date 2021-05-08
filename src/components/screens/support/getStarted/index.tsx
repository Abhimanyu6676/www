import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image";
//@ts-ignore
import styles from "./index.module.scss";


export default () => {

    const data = useStaticQuery(graphql`
  query {
      pair: file(relativePath: {eq: "support/getstarted/how_to_pair.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      
    }
            
  `)


    return (

        <div className={styles.mainContainer}>
            <div  /// column 1 
                className={styles.col1}>
                <Link /// how to install 
                    to={"/support/how_to_install"}
                    className={styles.howToInstall}>
                    {/*  <Img fluid={data.pair.childImageSharp.fluid} style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              left: 0,
              top: 0
            }} /> */}
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        paddingLeft: 20,
                        paddingBottom: 20
                    }}>
                        <h1 style={{
                            color: "#ffffff",
                            zIndex: 2,
                            marginBottom: 15
                        }}>How to Install</h1>
                        <p style={{
                            color: "#ffffff",
                            zIndex: 2
                        }}>4 step quick n easy DIY installation process.</p>
                    </div>
                </Link>

                <div className={styles.col1Divider}></div>
                <Link /// how to pair
                    to={"/support/how_to_pair"}
                    className={styles.howToPair}>
                    {/*  <Img fluid={data.pair.childImageSharp.fluid} style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              left: 0,
              top: 0
            }} /> */}
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        paddingLeft: 20,
                        paddingBottom: 20
                    }}>
                        <h1 style={{
                            color: "#ffffff",
                            zIndex: 2,
                            marginBottom: 15
                        }}>How to Pair</h1>
                        <p style={{
                            color: "#ffffff",
                            zIndex: 2
                        }}>Lets get started with pairing your devices with HUElite Smart Home App</p>
                    </div>
                </Link>


            </div>


            <div /// column 2
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    //backgroundColor: "green",
                    padding: "50px 0px"
                }}>
                <Link
                    to={"/support/linkAlexa"}
                    style={{
                        width: "80vw",
                        height: 370,
                        backgroundColor: "#777777",
                        borderRadius: 10,
                        overflow: "hidden",
                        position: "relative",
                        display: "flex",
                        justifyContent: "end",
                        alignItems: "flex-end"
                    }}>
                    {/*       <Img fluid={data.pair.childImageSharp.fluid} style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              left: 0,
              top: 0
            }} /> */}
                    <div style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        backgroundImage: "linear-gradient(45deg, #f857a6, #ff5858)"
                    }}></div>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        paddingLeft: 20,
                        paddingBottom: 20
                    }}>
                        <h1 style={{
                            color: "#ffffff",
                            zIndex: 2,
                            marginBottom: 15
                        }}>How to connect with Alexa</h1>
                        <p style={{
                            color: "#ffffff",
                            zIndex: 2
                        }}>HUElite devices provides even better experience with Alexa Integration. It's never been easier to connect with your home.</p>
                    </div>
                </Link>
            </div>

        </div>
    )
}