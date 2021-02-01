import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import UNIVERSALS from '../../../../@universals'
import styles from "./index.module.scss"


interface Props { }


export default ({ }: Props) => {
    return (
        <View style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
            <Text style={[UNIVERSALS.STYLES.H1, UNIVERSALS.STYLES.centerText]}>Your journey with Sternet</Text>
            <Text style={[UNIVERSALS.STYLES.H4, UNIVERSALS.STYLES.centerText, { fontWeight: "normal" }]}>Start your Smart Light Business in no time</Text>
            <div style={{ width: 350, display: "flex", flexDirection: "row", justifyContent: "flex-start", margin: "20px 0px", marginTop: 50 }}>
                <Item reverse />
            </div>
            <div style={{ width: 350, display: "flex", flexDirection: "row", justifyContent: "flex-end", margin: "20px 0px" }}>
                <Item />
            </div>
            <div style={{ width: 350, display: "flex", flexDirection: "row", justifyContent: "flex-start", margin: "20px 0px" }}>
                <Item reverse />
            </div>

        </View>
    )
}




const Item = (props: { reverse?: boolean }) => {
    return (
        <div style={{
            width: 200,
            backgroundColor: "#eee",
            borderRadius: 100,
            padding: 5,
            display: "flex",
            flexDirection: props.reverse ? "row-reverse" : "row",
            justifyContent: "space-between",
            alignItems: "center"
        }}>
            <div style={{
                minWidth: 50,
                minHeight: 50,
                backgroundColor: "#555",
                borderRadius: 100,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <div style={{
                    backgroundColor: "grey",
                    height: 20,
                    width: 20
                }}></div>
            </div>
            <Text style={[UNIVERSALS.STYLES.H5, UNIVERSALS.STYLES.centerText, { fontWeight: "normal" }]}>Choose your productz dflukh</Text>
        </div>
    )
}