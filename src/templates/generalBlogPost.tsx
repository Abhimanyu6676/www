import Avatar from '@material-ui/core/Avatar'
import { graphql } from 'gatsby'
import Img from "gatsby-image"
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from "@mdx-js/react"
import React from 'react'
import { Container } from 'react-bootstrap'
import { blogMetaData_i } from '../blog/blog'
import RelatedBlogView from '../blog/blog-UI/relatedBlogView'
import Layout from '../components/common/layout'
import SubscribeSection from "../components/common/subscribeSection"
import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { WhatsappShareButton, FacebookMessengerShareButton } from "react-share";
//@ts-ignore
import styles from "./generalBlogPost.module.scss"

import { NoteBox } from "../blog/support/howToPair/temp"

export default ({ data }: {
  data: {
    mdx: {
      body: any,
      frontmatter: blogMetaData_i
    },
    relatedPost: any,
    placeholderImage: any
    mobileBlogImage: { childImageSharp: { fluid: any } }
    desktopBlogImage: { childImageSharp: { fluid: any } }
  }
}) => {
  const { frontmatter, body } = data.mdx


  /*   if (data?.relatedPost?.nodes?.length > 0) {
      console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
      console.log("--data is " + JSON.stringify(data, null, 2))
    } else {
      console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk")
    } */

  const sources = [
    data.mobileBlogImage.childImageSharp.fluid,
    {
      ...data.desktopBlogImage.childImageSharp.fluid,
      media: `(min-width: 576px)`,
    },
  ]

  const shortcodes = { NoteBox }

  return (
    <Layout>
      <div
        style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", position: "relative" }}>
        <div /** /// heading contaienr */
          className={styles.desktopHeading}>
          <h1 style={{ marginTop: "20px", color: "white" }}>{frontmatter.title}</h1>
          <div className={styles.desktopHeadingAurtherDiv}>
            <h5 style={{ color: "white" }}>{frontmatter.auther}</h5>
            <h5 style={{ color: "white", marginLeft: 10 }}>{frontmatter.date}</h5>
          </div>
        </div>
        {(data.desktopBlogImage && data.mobileBlogImage) && <Img style={{ width: "100%", height: "auto" }} fluid={sources} />}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: 25,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <WhatsappShareButton url={"httsp://www.huelite.in"} title={frontmatter.title} separator=" ">
            <FontAwesome name="whatsapp" size={24} color="white" style={{ padding: 5, paddingHorizontal: 10 }} />
          </WhatsappShareButton>
          {/*  <FacebookMessengerShareButton url={"httsp://www.huelite.in"}>
            <FontAwesome5 name="facebook-messenger" size={24} color="white" style={{ padding: 5, paddingHorizontal: 10 }} />
          </FacebookMessengerShareButton> */}
          <Ionicons name="ios-share-alt" size={24} color="white" style={{ padding: 5, paddingHorizontal: 10 }} />
        </div>
      </div>
      <Container>
        <h1 className={styles.mobileHeading} >{frontmatter.title}</h1>
        <p style={{ fontSize: 14 }}>Last updated : {frontmatter.date}</p>
        <div style={{ height: 25 }} />
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
        <div style={{ height: 25 }} />
        <RelatedBlogView data={data.relatedPost.nodes} />
      </Container>
      <SubscribeSection />
    </Layout>
  );
};


export const query = graphql`
query PostsBySlug($slug: String!, $banner_img: String!, $banner_img_mob: String!, $relatedTopics: [String] ) {
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

  mobileBlogImage: file(relativePath: {eq: $banner_img_mob }) {
    childImageSharp {
      fluid(maxWidth: 700, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  desktopBlogImage: file (relativePath: { eq: $banner_img }) {
    childImageSharp {
      fluid(maxWidth: 2000, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }



  relatedPost: allMdx(filter: {frontmatter: {uuid: {in: $relatedTopics}}}) {
    nodes {
      frontmatter {
        date
        banner_img
        related_uuid
        uuid
        title
        auther_link
        auther
        main_img
      }
      excerpt(pruneLength: 50)
    }
  }


}
`;