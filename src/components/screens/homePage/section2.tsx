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
                price={2100}
                productName="HUElight Aroura"
                productExtension="5 mtr"
                offer="Buy 4 ang get Rs-250 off"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
                descArray={[
                    {
                        desc: "desc 1",
                        value: "value 1"
                    }, {
                        desc: "desc 2",
                        value: 400
                    }, {
                        desc: "desc ",
                        value: "value "
                    }, {
                        desc: "desc ",
                        value: "value "
                    }, {
                        desc: "desc ",
                        value: "value "
                    }, {
                        desc: "desc ",
                        value: "value "
                    }, {
                        desc: "desc ",
                        value: "value "
                    },
                ]}
                varient={[{ varientName: "120 led" }, { varientName: "60 led" }]}
                buyLink="https://www.amazon.in/HomeMate-Wi-Fi-Multicolour-Compatible-Google/dp/B07HRYL5DF/ref=sr_1_4?dchild=1&keywords=wifi+strip&qid=1611406743&sr=8-4"
                data={data}
            />
        </Container >
    )
}

