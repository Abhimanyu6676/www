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
import styles from "./announcement.module.scss"
import { NoteBox } from "../blog/support/howToPair/temp"



export default ({ data }: {
  data: {
    mdx: {
      body: any,
      frontmatter: blogMetaData_i & { subtitle }
    },
    relatedPost: any,
    placeholderImage: any
    mobileBlogImage: { childImageSharp: { fluid: any } }
    desktopBlogImage: { childImageSharp: { fluid: any } }
  }
}) => {
  const { frontmatter, body } = data.mdx


  return (
    <Layout>
      <h1 className={styles.title} >{frontmatter.title}</h1>
      <h4 className={styles.subtitle} >{frontmatter.subtitle}</h4>
      <div className={styles.contentConatiner}>
        <div className={styles.mdxContainer}>
          <MDXProvider>
            <MDXRenderer>
              {body}
            </MDXRenderer>
          </MDXProvider>
        </div>
        <div className={styles.secondaryContainer}></div>
      </div>
    </Layout>
  );
};

export const query = graphql`
query ($slug: String!, $banner_img: String!, $banner_img_mob: String!, $relatedTopics: [String] ) {
  mdx(fields: {slug: {eq: $slug}}) {
    body
    frontmatter {
      title
      subtitle
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