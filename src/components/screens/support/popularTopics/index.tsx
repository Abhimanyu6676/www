import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
//@ts-ignore
import styles from "./index.module.scss"

interface popularTopic_i {
    heading: string
    subText: string
}

const popularTpoics: popularTopic_i[] = [
    { heading: "topic 1", subText: "suntext will be placed here" },
    { heading: "topic 1", subText: "suntext will be placed here" },
    { heading: "topic 1", subText: "suntext will be placed here" },
    { heading: "topic 1", subText: "suntext will be placed here" },
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
            <h1>{item.heading}</h1>
            <h5 style={{ fontWeight: "normal" }}>{item.subText}</h5>
        </div>
    )
}