import React from 'react'
import { Link } from "gatsby"
import Image from './Image'
import { FontAwesome } from '@expo/vector-icons';
import styles from "./_footer.module.scss"
import { Container, Row, Col } from 'react-bootstrap';

const sec1Menu = ["About Us", "HUElite Blog", "Careers", "Media", "CSR", "Contact Us"]
const sec2Menu = ["Tutorial Videos", "Download Center", "Manual & Guides", "Feedback", "Support", "FAQ",]
const sec3Menu = ["Return & Shipping Policy", "Terms & Conditions", "Privacy Policy", "E-waste Management", "Do's & Don'ts", "Where to Buy"]

interface Props { }
export const Footer = ({ }: Props) => {
    const columnClasses = "-flex-col- -aln-c--sm-dn- -mt-20-"
    return (
        <Container fluid className={styles.mainContainer}/* style={{ backgroundColor: "#fff", display: "flex", justifyContent: "space-around" }} */>
            <Row>
                <Col sm md={3} className={columnClasses} >
                    <h2 style={{}} className="-txt-c--sm-dn-">HUElite</h2>
                    {sec1Menu.map((item, index) => {
                        return (
                            <Link to={"/" + item.split(" ").join("").toLowerCase()}><LinkContainer title={item} /></Link>
                        )
                    })}
                </Col>
                <Col sm md={3} className={columnClasses} >
                    <h2 style={{}} className="-txt-c--sm-dn-">Extended Support</h2>
                    {sec2Menu.map((item, index) => {
                        return (
                            <Link to={"/" + item.split(" ").join("").toLowerCase()}><LinkContainer title={item} /></Link>
                        )
                    })}
                </Col>
                <Col sm md={3} className={columnClasses} >
                    <h2 style={{}} className="-txt-c--sm-dn-">Customer Service</h2>
                    {sec3Menu.map((item, index) => {
                        return (
                            <Link to={"/" + item.split(" ").join("").toLowerCase()}><LinkContainer title={item} /></Link>
                        )
                    })}
                </Col>
                <Col sm={12} md={3} className={["-flex-col- -aln-c- -my-50--sm-dn- -jus-c-"]}>
                    <Link style={{ fontSize: "1em", fontWeight: "bold", color: "#555" }} to="">1800-HUE-LITE</Link>
                    <Link style={{ fontSize: 18, fontWeight: "bold", color: "#555" }} to="">support@huelite.in</Link>
                    <p style={{ fontWeight: 500, fontSize: 20, marginTop: 20, marginBottom: 5 }}>Download App</p>
                    <div className={["-flex-row- -jus-sa-"]} style={{ width: 100 }}>
                        <Link to="" className="px_2">
                            <FontAwesome name="apple" size={24} color="#555" />
                        </Link>
                        <Link to="" className="px_2">
                            <FontAwesome name="android" size={24} color="#555" />
                        </Link>
                    </div>
                </Col>
            </Row>
            <p className="-txt-c- -p-50-">Copyright 2019-2020. Sternet Industries India Pvt Ltd. All Rights Reserved</p>
        </Container>

    )
}

const LinkContainer = ({ title }) => {
    return (
        <h5 style={{}}>{title}</h5>
    )
}
