import { MaterialIcons } from '@expo/vector-icons';
import { Divider } from '@material-ui/core';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import { withStyles } from '@material-ui/core/styles';
import Img from "gatsby-image";
import React, { useRef, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Dimensions, View } from "react-native";
//@ts-ignore
import styles from "./index.module.scss";

interface varient_i {
    varientName: string
}

interface desc_i {
    desc: string,
    value: string | number
}

interface Props {
    price: number
    productName: string
    productExtension: string
    description: string
    offer: string
    descArray: desc_i[]
    varient: varient_i[]
    buyLink: string
    data: any
}
export default ({
    price = 2100,
    productName = "HUElight Aroura",
    productExtension = "5 mtr",
    offer = "Buy 4 ang get Rs-250 off",
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    descArray = [],
    varient = [{ varientName: "120 led" }, { varientName: "60 led" }],
    buyLink = "https://www.amazon.in/HomeMate-Wi-Fi-Multicolour-Compatible-Google/dp/B07HRYL5DF/ref=sr_1_4?dchild=1&keywords=wifi+strip&qid=1611406743&sr=8-4",
    data
}: Props) => {
    const thumbnailRef = useRef()
    const [height, setHeight] = useState(0)
    const [index, setIndex] = useState(0)
    const [expanded, setExpanded] = React.useState('panel1');

    const slideImage = (direction: "next" | "pre") => {
        switch (direction) {
            case "next":
                if (index <= 7)
                    setIndex(index + 1)
                break

            case "pre":
                if (index > 0)
                    setIndex(index - 1)
                break

            default:
                break;
        }
    }

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const Accordion = withStyles({
        root: {
            border: '0px solid rgba(0, 0, 0, .125)',
            boxShadow: 'none',
            '&:not(:last-child)': {
                borderBottom: 0,
            },
            '&:before': {
                display: 'none',
            },
            '&$expanded': {
                margin: 'auto',
            },
        },
        expanded: {},
    })(MuiAccordion);

    const AccordionSummary = withStyles({
        root: {
            backgroundColor: 'rgba(0, 0, 0, .03)',
            borderBottom: '0px solid rgba(0, 0, 0, .125)',
            marginBottom: -1,
            minHeight: 56,
            margin: 0,
            '&$expanded': {
                minHeight: 56,
            },
        },
        content: {
            '&$expanded': {
                margin: '12px 0',
            },
        },
        expanded: {
            borderRadius: 5,
        },
    })(MuiAccordionSummary);

    const AccordionDetails = withStyles((theme) => ({
        root: {
            padding: theme.spacing(2),
        },
    }))(MuiAccordionDetails);

    //console.log(">>>>><<<<<<<" data.allFile.edges.length)

    return (
        <View /* fluid */ style={{ width: "100%", height: "100%" }}>
            <Row>
                <Col sm /** ///product Image slider and thumbnails */>
                    <Row className={styles.ImageSliderContainer + " "}>
                        <Col sm={2} className={styles.thumbnailsCol + " p-0"} style={{ marginRight: 20 }}/** /// thumbnails container */>
                            <div
                                className={" d-flex -jus-c--md-up- " + styles.thumbnailContainer}
                                style={{ height }} >
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
                                            if (Dimensions.get("window").width <= 576 || index <= 0)
                                                return 0
                                            const totalSlides = 8
                                            const ScrollViewHeight = totalSlides * 70
                                            if (thumbnailRef.current && ScrollViewHeight > thumbnailRef.current.offsetHeight) {
                                                const viewHeight = thumbnailRef.current.offsetHeight
                                                const currSlideTop = getCurrentSlideTopOffset(index)
                                                const currSlideBottom = getCurrentSlideTopOffset(index) + 70
                                                const desiredMoveOffset = currSlideBottom + ((viewHeight / 2) - 35)
                                                if (currSlideBottom > (viewHeight / 2)) {
                                                    const move = ((index - ((viewHeight / 2) / 70)) * 70)
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
                                            if (Dimensions.get("window").width > 576 || index <= 0)
                                                return 0
                                            const totalSlides = 8
                                            const ScrollViewHeight = totalSlides * 70
                                            const viewWidth = Dimensions.get("window").width
                                            console.log("calculating offset >> " + viewWidth)
                                            if (thumbnailRef.current && ScrollViewHeight > viewWidth) {
                                                const currSlideLeft = getCurrentSlideTopOffset(index)
                                                const currSlideRight = getCurrentSlideTopOffset(index) + 70
                                                const desiredMoveOffset = currSlideRight + ((viewWidth / 2) - 35)
                                                if (currSlideRight > (viewWidth / 2)) {
                                                    const move = ((index - ((viewWidth / 2) / 70)) * 70)
                                                    if (move > 0 && move <= (ScrollViewHeight - viewWidth))
                                                        return move
                                                    else if (move > (ScrollViewHeight - viewWidth))
                                                        return ScrollViewHeight - viewWidth
                                                }
                                            }
                                            return 0
                                        })()}px`,
                                    }}>
                                    {data.thumbs.edges.map((edge, _index) => {
                                        return (
                                            <div key={index + "_" + Math.floor(Math.random() * Math.floor(9999))} className="-my-10- -mx-10-" style={{
                                                minHeight: 70,
                                                minWidth: 70,
                                            }}>
                                                <Img fluid={edge.node.childImageSharp.fluid} />
                                            </div>
                                        )
                                    })}
                                </div>
                                <button className={styles.thumbnailArrow + " " + styles.thumbnailDown + " " + styles.thumbnailRight} onClick={() => { slideImage("next") }}>
                                    <MaterialIcons name="navigate-next" size={34} color="#555" style={{ transform: [{ rotate: "90deg" }] }} />
                                </button>
                                <button className={styles.thumbnailArrow + " " + styles.thumbnailUp + " " + styles.thumbnailLeft} onClick={() => { slideImage("pre") }}>
                                    <MaterialIcons name="navigate-next" size={34} color="#555" style={{ transform: [{ rotate: "-90deg" }] }} />
                                </button>
                            </div>
                        </Col>
                        <Col sm style={{ overflow: "hidden", }} /* /// Image container */>
                            <div
                                style={{
                                    width: `${data.pics.edges.length * 100}%`,
                                    //backgroundColor: "red",
                                    position: "absolute",
                                    top: 0,
                                    left: `-${index * 100}%`,
                                    transition: "left 1s",
                                    display: "flex",
                                    flexDirection: "row",
                                }}>
                                <View
                                    style={{
                                        position: "absolute",
                                        width: "100%",
                                        height: "100%",
                                        backgroundColor: "red",
                                        top: 0,
                                        left: 0,
                                        justifyContent: "center",
                                        padding: 0,
                                    }}
                                    onLayout={(event) => {
                                        var { width, height } = event.nativeEvent.layout;
                                        console.log("*--*height :: " + height)
                                        setHeight(height)
                                    }}>
                                </View>
                                {data.pics.edges.map((edge) => { 
                                    return (
                                        <div key={index + "_" + Math.floor(Math.random() * Math.floor(9999))} className="" style={{ flex: 1 }}>
                                            <Img style={{  }} fluid={edge.node.childImageSharp.fluid} />
                                        </div>
                                    )
                                })}
                            </div>
                            <div style={{ position: "absolute", left: 0, width: "100%", height: "100%", display: "flex", alignItems: "center"/* , backgroundColor: "red" */ }}>
                                <div style={{ justifySelf: "center", width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                    <button style={{ width: 50, height: 50, backgroundColor: "#eeeeeebb", display: "flex", justifyContent: "center", alignItems: "center" }} onClick={() => { slideImage("pre") }}>
                                        <MaterialIcons name="navigate-next" size={34} color="#555" style={{ transform: [{ rotate: "180deg" }] }} />
                                    </button>
                                    <button style={{ width: 50, height: 50, backgroundColor: "#eeeeeebb", display: "flex", justifyContent: "center", alignItems: "center" }} onClick={() => { slideImage("next") }}>
                                        <MaterialIcons name="navigate-next" size={34} color="#555" style={{}} />
                                    </button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col sm className={"-p-0- -p-10--xs-dn- -ml-20--sm-up-"} /* /// Product info accordion */>
                    <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                            <div style={{}}>
                                <h1 className={styles.acc1Header_heading1}>{productName + " - " + productExtension}</h1>
                                <h3 className={styles.acc1Header_heading2}>{"Rs - " + price + "/-"}</h3>
                                <div style={{ justifyContent: "flex-start", alignItems: "center", display: "flex" }}>
                                    <div style={{
                                        backgroundColor: "#eee",
                                        overflow: "hidden",
                                        borderRadius: 25,
                                        padding: "5px 20px",
                                        marginTop: 10
                                    }}>
                                        <h6 style={{ textAlign: "center", color: "#555" }}>{offer}</h6>
                                    </div>
                                </div>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div style={{ width: "100%" }}>
                                <div style={{ marginTop: 10, marginBottom: 10 }} /* Sec6: varient section */>
                                    <h5 style={{ marginBottom: 5, color: "#555" }}>Varients</h5>
                                    <div style={{ display: "flex", flexDirection: "row" }}>
                                        {varient.map((item, index) => {
                                            return (
                                                <div key={index + "_" + Math.floor(Math.random() * Math.floor(9999))}>
                                                    <div style={{ width: 50, height: 50, backgroundColor: "#eee", marginRight: 5 }}></div>
                                                    <h6 style={{ color: "#777" }}>{item.varientName}</h6>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }} /** Sec6: <add to cart/Buy now> button */>
                                    <a href={buyLink} target="_blank" rel="noopener noreferrer">
                                        <div style={{ backgroundColor: "#ccc", borderRadius: 50, padding: "10px 25px" }}>
                                            <h3 style={{ color: "#fff" }}>Buy now</h3>
                                        </div>
                                    </a>
                                </div>
                                <p style={{ fontWeight: "normal", color: "#555", marginTop: 20 }}>{description}</p>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                            <h3 className={styles.acc1Header_heading2}>{productName + " - Description"}</h3>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div style={{ flex: 1 }}>
                                {descArray.map((item, index) => {
                                    return (<div key={index + "_" + Math.floor(Math.random() * Math.floor(9999))}><DescRows item={item} index={index + "_" + Math.floor(Math.random() * Math.floor(9999))} /><Divider /></div>)
                                })}
                            </div>
                        </AccordionDetails>
                    </Accordion>
                </Col>
            </Row>
        </View >
    )
}

const DescRows = ({ item: { desc, value }, index }: { item: { desc: string, value: string | number }, index: number }) => {
    return (
        <div style={{
            height: 50,
            padding: 5,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            flex: 1,
        }}>
            <h4 style={{ color: "#555", flex: 1 }}>{desc}</h4>
            <h4 style={{ color: "#555", flex: 1 }}>{value}</h4>
        </div>
    )
}


