import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import { Row, Col } from "react-bootstrap"

interface Props {

}
const Component = ({ }: Props) => {

    return (
        <Container>
            <p style={{ fontSize: "10px", fontWeight: "bold", color: "#555" }}>test</p>
            <h1>test</h1>
            <p style={{ fontSize: "15px", fontWeight: "bold", color: "#555" }}>test</p>
        </Container>
    )
}


export default Component