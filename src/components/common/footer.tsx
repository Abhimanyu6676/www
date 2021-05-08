import React from 'react'
import { Link } from "gatsby"
import Image from './Image'
import { FontAwesome } from '@expo/vector-icons';
import { Container, Row, Col } from 'react-bootstrap';
//@ts-ignore
import styles from "./_footer.module.scss"

interface link_i {
    key: string
    href?: string
}
const sec1Menu: link_i[] = [
    { key: "About Us" },
    { key: "HUElite Blog" },
    { key: "Careers" },
    { key: "Media" },
    { key: "CSR" },
    { key: "Contact Us" }
]
const sec2Menu: link_i[] = [
    { key: "Tutorial Videos" },
    { key: "Download Center" },
    { key: "Manual & Guides", href: "support/getstarted" },
    { key: "Feedback" },
    { key: "Support", href: "support" },
    { key: "FAQ" }
]
const sec3Menu: link_i[] = [
    { key: "Return & Shipping Policy", href: "support/return_policy" },
    { key: "Terms & Conditions", href: "support/termsNconditions" },
    { key: "Privacy Policy", href: "support/privacy_policy" },
    { key: "E-waste Management" },
    { key: "Do's & Don'ts" },
    { key: "Where to Buy" }
]

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
                            <Link key={index + "_" + Math.floor(Math.random() * Math.floor(9999))} to={item.href ? ("/" + item?.href) : "/"}><LinkContainer title={item.key} /></Link>
                        )
                    })}
                </Col>
                <Col sm md={3} className={columnClasses} >
                    <h2 style={{}} className="-txt-c--sm-dn-">Extended Support</h2>
                    {sec2Menu.map((item, index) => {
                        return (
                            <Link key={index + "_" + Math.floor(Math.random() * Math.floor(9999))} to={item.href ? ("/" + item?.href) : "/"}><LinkContainer title={item.key} /></Link>
                        )
                    })}
                </Col>
                <Col sm md={3} className={columnClasses} >
                    <h2 style={{}} className="-txt-c--sm-dn-">Customer Service</h2>
                    {sec3Menu.map((item, index) => {
                        return (
                            <Link key={index + "_" + Math.floor(Math.random() * Math.floor(9999))} to={item.href ? ("/" + item?.href) : "/"}><LinkContainer title={item.key} /></Link>
                        )
                    })}
                </Col>
                <Col sm={12} md={3} className={"-flex-col- -aln-c- -my-50--sm-dn- -jus-c-"}>
                    {/*   <Link style={{ fontSize: "1em", fontWeight: "bold", color: "#555" }} to="">1800-HUE-LITE</Link> */}
                    <Link style={{ fontSize: 18, fontWeight: "bold", color: "#555" }} to="">support@huelite.in</Link>
                    <p style={{ fontWeight: 500, fontSize: 20, marginTop: 20, marginBottom: 5 }}>Download App</p>
                    <div className={"-flex-row- -jus-sa-"} style={{ width: 100 }}>
                        <Link to="https://apps.apple.com/in/app/huelite/id1556187847" className="px_2">
                            <FontAwesome name="apple" size={30} color="#555" />
                        </Link>
                        <Link to="https://play.google.com/store/apps/details?id=com.sternet.huelite" className="px_2">
                            <FontAwesome name="android" size={30} color="#555" />
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
