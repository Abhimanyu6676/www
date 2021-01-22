import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Dimensions } from 'react-native';
import { graphql, useStaticQuery } from 'gatsby'
import Img from "gatsby-image";
import styles from "./index.module.scss";



interface Props { }
export default (props: Props) => {
    const thumbnailRef = useRef()
    const sliderRef = useRef()
    const [width, setWidth] = useState(0)
    const [left, setLeft] = useState(0)

    const data = useStaticQuery(graphql`
    query AssetsPhotos {
        thumbs: allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, dir: {eq: "C:/Users/admin/react/Website/web/src/images/Products/Strips/aurora_strip"}}) {
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
                pics: allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, dir: {eq: "C:/Users/admin/react/Website/web/src/images/Products/Strips/aurora_strip"}}) {
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

    const slideImage = (direction: "next" | "pre") => {
        switch (direction) {
            case "next":
                if (left <= 7)
                    setLeft(left + 1)
                break

            case "pre":
                if (left > 0)
                    setLeft(left - 1)
                break

            default:
                break;
        }
    }


    //console.log(">>>>><<<<<<<" + data.allFile.edges.length)

    return (
        <Container fluid >
            <Row>
                {/* ///product Image slider and thumbnails */}
                <Col sm >
                    <Row className={styles.ImageSliderContainer + " "}>
                        {/* ///thumbnails container */}
                        <Col sm={2} className={styles.thumbnailsCol + " -bg-fff- p-0"} >
                            <div className={"-bg-fff- d-flex -jus-c--md-up- " + styles.thumbnailContainer}>
                                <div
                                    ref={thumbnailRef}
                                    className={"-bg-fff- d-flex flex-md-column position-relative "}
                                    style={{
                                        position: "absolute",
                                        transition: "top 1s , left 1s",
                                        top: `-${(() => {
                                            const getCurrentSlideTopOffset = (slide: number) => {
                                                let top = 0
                                                if (slide <= 0)
                                                    return top
                                                else {
                                                    top = (slide * 70)
                                                }
                                                return top
                                            }
                                            if (Dimensions.get("window").width <= 576 || left <= 0)
                                                return 0
                                            const totalSlides = 8
                                            const ScrollViewHeight = totalSlides * 70
                                            if (thumbnailRef.current && ScrollViewHeight > thumbnailRef.current.offsetHeight) {
                                                const viewHeight = thumbnailRef.current.offsetHeight
                                                const currSlideTop = getCurrentSlideTopOffset(left)
                                                const currSlideBottom = getCurrentSlideTopOffset(left) + 70
                                                const desiredMoveOffset = currSlideBottom + ((viewHeight / 2) - 35)
                                                if (currSlideBottom > (viewHeight / 2)) {
                                                    const move = ((left - ((viewHeight / 2) / 70)) * 70)
                                                    if (move > 0 && move <= (ScrollViewHeight - viewHeight))
                                                        return move
                                                    else if (move > (ScrollViewHeight - viewHeight))
                                                        return ScrollViewHeight - viewHeight
                                                }
                                            }
                                            return 0
                                        })()}px`,
                                        left: `-${(() => {
                                            const getCurrentSlideTopOffset = (slide: number) => {
                                                let top = 0
                                                if (slide <= 0)
                                                    return top
                                                else {
                                                    top = (slide * 70)
                                                }
                                                return top
                                            }
                                            if (Dimensions.get("window").width > 576 || left <= 0)
                                                return 0
                                            const totalSlides = 8
                                            const ScrollViewHeight = totalSlides * 70
                                            const viewWidth = Dimensions.get("window").width
                                            console.log("calculating offset >> " + viewWidth)
                                            if (thumbnailRef.current && ScrollViewHeight > viewWidth) {
                                                const currSlideLeft = getCurrentSlideTopOffset(left)
                                                const currSlideRight = getCurrentSlideTopOffset(left) + 70
                                                const desiredMoveOffset = currSlideRight + ((viewWidth / 2) - 35)
                                                if (currSlideRight > (viewWidth / 2)) {
                                                    const move = ((left - ((viewWidth / 2) / 70)) * 70)
                                                    if (move > 0 && move <= (ScrollViewHeight - viewWidth))
                                                        return move
                                                    else if (move > (ScrollViewHeight - viewWidth))
                                                        return ScrollViewHeight - viewWidth
                                                }
                                            }
                                            return 0
                                        })()}px`,
                                    }}>
                                    {data.thumbs.edges.map((edge) => {
                                        return (
                                            <div className="-my-10- -mx-10-" style={{ minHeight: 50, minWidth: 50 }}>
                                                <Img fluid={edge.node.childImageSharp.fluid} />
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className={styles.thumbnailArrow + " " + styles.thumbnailDown + " " + styles.thumbnailRight} onClick={() => { slideImage("next") }}></div>
                                <div className={styles.thumbnailArrow + " " + styles.thumbnailUp + " " + styles.thumbnailLeft} onClick={() => { slideImage("pre") }}></div>
                            </div>
                        </Col>
                        {/* ///slider container */}
                        <Col sm={10} style={{ overflow: "hidden" }}>
                            <div
                                ref={sliderRef}
                                style={{
                                    width: `${data.pics.edges.length * 100}%`,
                                    //backgroundColor: "red",
                                    position: "absolute",
                                    top: 0,
                                    left: `-${left * 100}%`,
                                    transition: "left 1s",
                                    display: "flex",
                                    flexDirection: "row"
                                }}
                            >
                                {data.pics.edges.map((edge) => {
                                    return (
                                        <div className="" style={{ flex: 1 }}>
                                            <Img fluid={edge.node.childImageSharp.fluid} />
                                        </div>
                                    )
                                })}
                            </div>
                        </Col>
                    </Row>
                </Col>
                {/* ///Product info accordion */}
                <Col sm style={{ backgroundColor: "green" }}>
                    Image Slider
                </Col>
            </Row>
        </Container >
    )
}


