import Avatar from '@material-ui/core/Avatar'
import { graphql } from 'gatsby'
import Img from "gatsby-image"
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import { Container } from 'react-bootstrap'
import { blogMetaData_i } from '../blog/blog'
import RelatedBlogView from '../blog/blog-UI/relatedBlogView'
import Layout from '../components/common/layout'
import SubscribeSection from "../components/common/subscribeSection"

export default ({ data }: {
  data: {
    mdx: {
      body: any,
      frontmatter: blogMetaData_i
    },
    relatedPost: any,
    placeholderImage: any
  }
}) => {
  const { frontmatter, body } = data.mdx


  if (data?.relatedPost?.nodes?.length > 0) {
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
    console.log("--data is " + JSON.stringify(data, null, 2))
  } else {
    console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk")
  }


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
        <RelatedBlogView data={data.relatedPost.nodes} />
      </Container>
      <SubscribeSection />
    </Layout>
  );
};

export const query = graphql`
query PostsBySlug($slug: String!, $banner_img: String!, $test_related_uuid: [String] ) {
  mdx(fields: {slug: {eq: $slug}}) {
    body
    frontmatter {
      title
      date(formatString: "YYYY MMMM DD")
      auther
      banner_img
      uuid
      related_uuid
    }
  }
  placeholderImage: file(relativePath: {eq: $banner_img}) {
    childImageSharp {
      fluid(maxWidth: 1200) {
        ...GatsbyImageSharpFluid
      }
    }
  }



  relatedPost: allMdx(filter: {frontmatter: {uuid: {in: $test_related_uuid}}}) {
    nodes {
      frontmatter {
        date
        banner_img
        related_uuid
        uuid
        title
        auther_link
        auther
      }
    }
  }






}
`;