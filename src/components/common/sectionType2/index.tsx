import React from 'react'
import Img from "gatsby-image";
//@ts-ignore
import styles from "./index.module.scss"
import { Container } from 'react-bootstrap';

interface Props {
    imgData: any
    reverse?: any
    heading: string
    subText: string
}
export default ({ imgData, reverse, heading, subText }: Props) => {
    return (
        <Container style={{}} className={styles.sectionContainer + " " + (reverse ? styles._row_reverse : styles._row)}>
            <div className={styles.imgContainer}>
                <Img fluid={imgData.childImageSharp.fluid} />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles._heading}>{heading}</h1>
                <h3 className={styles._subText}>{subText}</h3>
            </div>
        </Container>
    )
}

