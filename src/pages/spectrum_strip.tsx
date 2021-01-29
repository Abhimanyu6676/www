import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Container } from "react-bootstrap"
import Layout from "../components/common/layout"
import Section1 from "../components/common/productSection"
import Section2 from "../components/common/sectionType1"
import Section3 from "../components/common/sectionType2"
import SubscribeSection from "../components/common/subscribeSection"
import BlogSection from "../components/common/latestBlogType1"

export default () => {
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
                    fluid(maxWidth: 750) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
            section2Img_mobile: file(relativePath: {eq: "Products/Strips/spectrum_strip/spectrumStrip_section2_main-mobile.png"}) {
              childImageSharp {
                fluid(maxWidth: 700, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            section2Img: file(relativePath: {eq: "Products/Strips/spectrum_strip/spectrumStrip_section2_main.png"}) {
              childImageSharp {
                fluid(maxWidth: 2000, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            section3Img1: file(relativePath: { eq: "Products/Strips/spectrum_strip/section3_img1.png" }) {
                childImageSharp {
                    fluid(maxWidth: 800) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            section3Img2: file(relativePath: { eq: "Products/Strips/spectrum_strip/section3_img2.png" }) {
                childImageSharp {
                    fluid(maxWidth: 800) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            section3Img3: file(relativePath: { eq: "Products/Strips/spectrum_strip/section3_img3.png" }) {
                childImageSharp {
                    fluid(maxWidth: 800) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            section4Img_mobile: file(relativePath: {eq: "Products/Strips/spectrum_strip/spectrumStrip_section4_mainImg-mobile.png"}) {
                childImageSharp {
                  fluid(maxWidth: 700, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              section4Img: file(relativePath: {eq: "Products/Strips/spectrum_strip/spectrumStrip_section4_mainImg.png"}) {
                childImageSharp {
                  fluid(maxWidth: 2000, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              section5Img_mobile: file(relativePath: {eq: "Products/Strips/spectrum_strip/spectrumStrip_section5_mainImg-mobile.png"}) {
                childImageSharp {
                  fluid(maxWidth: 700, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              section5Img: file(relativePath: {eq: "Products/Strips/spectrum_strip/spectrumStrip_section5_mainImg.png"}) {
                childImageSharp {
                  fluid(maxWidth: 2000, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
          }          
        `)


  return (
    <Layout>
      <Container /* Sec2: section1 container */>
        <Section1
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
      </Container>
      <Section2 /* Sec2: section2 */
        sources={[
          data.section2Img_mobile.childImageSharp.fluid,
          {
            ...data.section2Img.childImageSharp.fluid,
            media: `(min-width: 576px)`,
          },
        ]}
        heading1="Your Home,"
        heading2="Your Rules."
        subText="Now choose your light to make your home cozy, green and awesome" />
      <Section3
        imgData={data.section3Img1}
        heading="Adding ambieance to life"
        subText="with 16 million possiblities, now switch your home ambieance in an instant. go calm to party in seconds" />
      <Section3
        reverse
        imgData={data.section3Img2}
        heading="Bias Lighting"
        subText="With the right backlighting on your TV, you can now reduce eye strain." />
      <Section3
        imgData={data.section3Img3}
        heading="Sleeping Tips"
        subText="Set your bedroom lights to deep red just before bed to produce more melatonin which helps you get better quality sleep." />
      <div className="-mt-50--sm-dn-"></div>
      <Section2 /* Sec2: section2 */
        position="right"
        sources={[
          data.section4Img_mobile.childImageSharp.fluid,
          {
            ...data.section4Img.childImageSharp.fluid,
            media: `(min-width: 576px)`,
          },
        ]}
        heading1="Your BattleStation is now upgraded for battle." />
      <Section2 /* Sec2: section2 */
        sources={[
          data.section5Img_mobile.childImageSharp.fluid,
          {
            ...data.section5Img.childImageSharp.fluid,
            media: `(min-width: 576px)`,
          },
        ]}
        heading1="Your Work From Home setup is ready." />
      <BlogSection />
      <SubscribeSection />
    </Layout>
  )
}
