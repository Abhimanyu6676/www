import React from 'react'
import { Link } from "gatsby"
import Image from './Image'
import { FontAwesome } from '@expo/vector-icons';
//@ts-ignore
import styles from "./footer.module.scss"
import { Container, Row, Col } from 'react-bootstrap';

const sec1Menu = ["About Us", "HUElite Blog", "CSR", "Careers", "Media", "Contact Us"]
const sec2Menu = ["Support", "FAQ", "Tutorial Videos", "Download Center", "Manual & Guides", "Feedback"]
const sec3Menu = ["Return & Shipping Policy", "Terms & Conditions", "Privacy Policy", "E-waste Management", "Do's & Don'ts", "Where to Buy"]

interface Props { }
export const Footer = ({ }: Props) => {
    return (
        <Container fluid className={styles.mainContainer}/* style={{ backgroundColor: "#fff", display: "flex", justifyContent: "space-around" }} */>
            <Row>
                <Col sm md={4} lg={3} className={["flex-col"]} >
                    {sec1Menu.map((item, index) => {
                        return (
                            <Link to={"/" + item.split(" ").join("").toLowerCase()}>{item}</Link>
                        )
                    })}
                </Col>
                <Col sm md={4} lg={3} className={styles.sec2}>
                    {sec2Menu.map((item, index) => {
                        return (
                            <Link to={"/" + item.split(" ").join("").toLowerCase()}>{item}</Link>
                        )
                    })}
                </Col>
                <Col sm md={4} lg={3} className={styles.sec3}>
                    {sec3Menu.map((item, index) => {
                        return (
                            <Link to={"/" + item.split(" ").join("").toLowerCase()}>{item}</Link>
                        )
                    })}
                </Col>
                <Col md={12} lg={3} className={["flex-col", "align-items-center"]}>
                    <Link style={{ fontSize: "1em", fontWeight: "bold", color: "#555" }} to="">1800-HUE-LITE</Link>
                    <Link style={{ fontSize: 18, fontWeight: "bold", color: "#555" }} to="">support@huelite.in</Link>
                    <p style={{ fontWeight: 500, fontSize: 20, marginTop: 20, marginBottom: 5 }}>Download App</p>
                    <div className={["flex-row", "justify-content-around"]} >
                        <Link to="" className="px_2">
                            <FontAwesome name="apple" size={24} color="#555" />
                        </Link>
                        <Link to="" className="px_2">
                            <FontAwesome name="android" size={24} color="#555" />
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
