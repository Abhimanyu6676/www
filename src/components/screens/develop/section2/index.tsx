import { CSSProperties } from '@material-ui/core/styles/withStyles'
import React from 'react'
import { Container } from 'react-bootstrap'
import { TransformOnHover } from '../../../common/webDivWrapper/TransformOnHover'
import styles from "./index.module.scss"

interface Props {

}

export default ({ }: Props) => {
    return (
        <Container>
            <h1 style={{ textAlign: "center", marginTop: 25 }}>Ready-to market smart lighting solutions</h1>
            <h4 style={{ textAlign: "center", marginTop: 10, fontWeight: "normal" }}>We bring the best smart lighting devices to life for the industry </h4>
            <SectionType3
                item={
                    [
                        { heading: "One App for all devices", img: require("../../../../images/develop/section2/devices.png") },
                        { heading: "Major Voice Integrations", img: require("../../../../images/develop/section2/voice-assistant.png") },
                        { heading: "Full Suppport at each step", img: require("../../../../images/develop/section2/support.png") },
                        { heading: "Designed & Developed in India", img: require("../../../../images/develop/section2/india.png") },
                        { heading: "Go-to Market Solution", img: require("../../../../images/develop/section2/shipped.png") },
                    ]
                }
                style={{ marginTop: 30 }}
                noCompStyles
                componentStyle={{
                    width: 150,
                    height: 150,
                    padding: 10,
                    margin: 25,
                    backgroundColor: "#eee",
                    borderRadius: 15,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "hidden"
                }}
            />

        </Container>
    )
}



interface SectionType3_props {
    item: any[]
    componentStyle?: CSSProperties
    style?: CSSProperties
    compClassName?: any
    className?: any
    noStyles?: boolean
    noCompStyles?: boolean
}
const SectionType3 = ({
    item,
    className = "",
    compClassName = "",
    style,
    componentStyle,
    noStyles = false,
    noCompStyles = false,
}: SectionType3_props) => {
    return (
        <div className={" " + className} style={!noStyles ? { display: "flex", flexWrap: "wrap", flexDirection: "row", justifyContent: "space-around", ...style } : { ...styles }}>
            {item.map((item, index) => {
                return (
                    <TransformOnHover
                        className={compClassName}
                        key={"_" + index}
                        style={!noCompStyles ? { overflow: "hidden", border: "0.5px #000000 solid", width: 200, height: 200, margin: 5, ...componentStyle } : { ...componentStyle }} >
                        <img src={item.img} style={{ height: "auto", width: 60 }} />
                        <h4 style={{ fontWeight: "normal", textAlign: "center", marginTop: 10 }}>{item.heading}</h4>
                    </TransformOnHover>
                )
            })}
        </div>
    )
}