import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
//@ts-ignore
import styles from "./index.module.scss"

interface popularTopic_i {
    heading: string
    subText: string
}

const popularTpoics: popularTopic_i[] = [
    { heading: "HUElite Strip Installation", subText: "3 step easy installation." },
    { heading: "Getting started huelite app", subText: "How to pair your device to home network" },
    { heading: "Let's connect with Alexa", subText: "Link huelite smart Products Alexa with and how to control" },
    { heading: "TroubleShoot Guide", subText: "Find answers to your queries" },
]

interface Props { }
export default ({ }: Props) => {
    return (
        <Container className={styles._container}>
            {popularTpoics.map((item, index) => {
                return (
                    <PopularTopicCard item={item} />
                )
            })}
        </Container>
    )
}


const PopularTopicCard = ({ item }: { item: popularTopic_i }) => {

    return (
        <div className={styles.popularTopicCard}>
            <h3>{item.heading}</h3>
            <h5 style={{ fontWeight: "normal", marginTop: 10 }}>{item.subText}</h5>
        </div>
    )
}