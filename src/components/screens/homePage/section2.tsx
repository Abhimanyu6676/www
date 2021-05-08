import React from 'react';
import { Container } from 'react-bootstrap';
import ProductSection from "../../common/productSection"
import { graphql, useStaticQuery } from 'gatsby'



interface Props { }
export default ({ }: Props) => {
    const data = useStaticQuery(graphql`
        query {
            thumbs: allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, dir: {eq: "C:/Users/admin/react/Website/web/src/images/Products/Strips/spectrum_strip/productPhotos"}}, sort: {fields: name}) {
            edges {
                node {
                    id
                    childImageSharp {
                        fluid(maxWidth: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
            }
                    pics: allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, dir: {eq: "C:/Users/admin/react/Website/web/src/images/Products/Strips/spectrum_strip/productPhotos"}}, sort: {fields: name}) {
            edges {
                node {
                    id
                    childImageSharp {
                        fluid(maxWidth: 500) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
            }
        }`)

    return (
        <Container /* fluid */ style={{ marginTop: 20 }}>
            <ProductSection
                price={1999}
                productName="HUElight Aroura"
                productExtension="5 mtr"
                offer="Buy 4 ang get Rs-250 off"
                description="HUElite smart strip are energy efficient solution used for wide variety of fixtures and architecture deign to
          to suite your space. Allows you to control your space from HUElite Smart Mobile app from anywhere in the world. Rich color contast
          and high brightness led offers you 16 million possiblities to decorate your home and space. Flowing Colors  with syncronized group 
          controll gives you immersive experiences."
                descArray={[
                    {
                        desc: "Color",
                        value: "Multicolor"
                    }, {
                        desc: "Power and Plug",
                        value: "AC, 180-220V"
                    }, {
                        desc: "Wattage",
                        value: "15 Watts"
                    }, {
                        desc: "Control Interfaces",
                        value: "Mobile Application, Wi-Fi, Google Assistant, Amazon Alexa"
                    }, {
                        desc: "Warranty",
                        value: "1 Year warranty, 14 Days Moneyback Guarantee"
                    },
                ]}
                varient={[{ varientName: "120 led" }, { varientName: "60 led" }]}
                buyLink="https://www.amazon.in/dp/B08V8JPHN4/ref=twister_B08V81M6J3?_encoding=UTF8&psc=1"
                data={data}
            />
        </Container >
    )
}

