import React from 'react'
import { Container } from 'react-bootstrap';
//@ts-ignore
import styles from "./index.module.scss";

interface Props {

}

export default (props: Props) => {
    return (
        <div style={{ marginTop: 40, marginBottom: 50 }}>
            <h1 style={{ textAlign: "center", marginBottom: 40 }}>Blog</h1>
            <Container style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ width: 150, height: 150, backgroundColor: "red", borderRadius: 15 }}></div>
                <div style={{ width: 150, height: 150, backgroundColor: "red", borderRadius: 15 }}></div>
                <div style={{ width: 150, height: 150, backgroundColor: "red", borderRadius: 15 }}></div>
            </Container>
        </div>
    )
}
