import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import Img from "gatsby-image";
import { FontAwesome } from '@expo/vector-icons';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
//@ts-ignore
import styles from "./index.module.scss"
import { Container, Row, Col } from 'react-bootstrap';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
        },
    },
    notchedOutline: {
        borderWidth: '1px',
        borderColor: 'white',
        borderRadius: 50
    },
    cssLabel: {
        color: 'white'
    },
}));


interface Props { }
const index = (props: Props) => {
    const classes = useStyles();
    const data = useStaticQuery(graphql`
    query {
        mobileImage: file(relativePath: { eq: "common/subscribeSection/HP_sec5img2C.png" }) {
          childImageSharp {
            fluid(maxWidth: 700, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        desktopImage: file(
          relativePath: { eq: "common/subscribeSection/HP_sec5img2A.png" }
        ) {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }       
    `)

    const sources = [
        data.mobileImage.childImageSharp.fluid,
        {
            ...data.desktopImage.childImageSharp.fluid,
            media: `(min-width: 576px)`,
        },
    ]
    return (
        <div style={{ width: "100%", marginTop: 20, position: "relative" }}>
            <Img fluid={sources} />
            <div style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0 }}>
                <Container style={{ height: "100%" }}>
                    <div className={styles.mainContainer}>
                        <div>
                            <h3 style={{ color: "#fff", textAlign: "center" }}>Let's Connect</h3>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
                                <FontAwesome name="instagram" size={24} color="white" style={{ marginHorizontal: 15, marginVertical: 5 }} />
                                <FontAwesome name="facebook" size={24} color="white" style={{ marginHorizontal: 15, marginVertical: 5 }} />
                                <FontAwesome name="youtube-play" size={24} color="white" style={{ marginHorizontal: 15, marginVertical: 5 }} />
                                <FontAwesome name="twitter" size={24} color="white" style={{ marginHorizontal: 15, marginVertical: 5 }} />
                                <FontAwesome name="linkedin" size={24} color="white" style={{ marginHorizontal: 15, marginVertical: 5 }} />
                            </div>
                        </div>
                        <div>
                            <h2 style={{ color: "#fff", textAlign: "center" }}>STAY HUE-LIGHTNED</h2>
                            <h5 style={{ fontWeight: "normal", color: "#fff", textAlign: "center" }}>to receive the information on trending products and industry news</h5>
                            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                <TextField id="outlined-basic"
                                    label="email"
                                    variant="outlined"
                                    margin="dense"
                                    fullWidth
                                    InputLabelProps={{
                                        classes: {
                                            root: classes.cssLabel,
                                        },
                                    }}
                                    InputProps={{
                                        classes: {
                                            notchedOutline: classes.notchedOutline,
                                        },
                                        inputMode: "numeric"
                                    }} />
                                <div style={{ borderRadius: 50, height: 40, margin: "0px 10px", backgroundColor: "#999", justifyContent: "center", alignItems: "center", display: "flex" }}>
                                    <h4 style={{ color: "#fff", margin: "0 10px" }}>Subscribe</h4>
                                </div>
                            </div>
                            <h5 style={{ fontWeight: "normal", color: "#fff", textAlign: "center" }}>we will keep classy</h5>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default index
