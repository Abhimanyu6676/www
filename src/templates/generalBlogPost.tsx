import Avatar from '@material-ui/core/Avatar'
import { graphql } from 'gatsby'
import Img from "gatsby-image"
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import { Container } from 'react-bootstrap'
import Layout from '../components/common/layout'
import SubscribeSection from "../components/common/subscribeSection"

export default ({ data }) => {
  const { frontmatter, body } = data.mdx



  return (
    <Layout>
      <div
        style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", position: "relative" }}>
        <div style={{
          position: "absolute",
          zIndex: 2,
          bottom: 20
        }}>
          <h1 style={{ marginTop: "20px", color: "white" }}>{frontmatter.title}</h1>
          <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
          }}>
            <h5 style={{ color: "white" }}>{frontmatter.date}</h5>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              {/*  <Avatar style={{ backgroundColor: "#ff5722", color: "white", height: 30, width: 30 }}>ST</Avatar> */}
              <h5 style={{ color: "white" }}>{frontmatter.auther}</h5>
            </div>
          </div>
        </div>
        {data.placeholderImage && <Img style={{ width: "100%", height: "auto" }} fluid={data.placeholderImage.childImageSharp.fluid} />}
      </div>
      <Container>
        <h1 style={{ marginTop: "20px" }}>{frontmatter.title}</h1>
        <p>{frontmatter.date}</p>
        <div style={{ height: 25 }} />
        <MDXRenderer>{body}</MDXRenderer>
      </Container>
      <SubscribeSection />
    </Layout>
  );
};

export const query = graphql`
query PostsBySlug($slug: String!, $bannerImg: String!) {
  mdx(fields: {slug: {eq: $slug}}) {
    body
    frontmatter {
      title
      date(formatString: "YYYY MMMM DD")
      auther
      bannerImg
    }
  }
  placeholderImage: file(relativePath: {eq: $bannerImg}) {
    childImageSharp {
      fluid(maxWidth: 1200) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`;