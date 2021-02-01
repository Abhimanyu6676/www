import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import styles from "./index.module.scss"


interface Props { }


export default ({ }: Props) => {
    return (
        <View>
            <Text style={_styles.h1}>This is react native web test</Text>
            <Text style={_styles.h2}>This is react native web test</Text>
            <Text style={_styles.h3}>This is react native web test</Text>
            <Text style={_styles.h4}>This is react native web test</Text>
            <Text style={_styles.h5}>This is react native web test</Text>
        </View>
    )
}


const _styles = StyleSheet.create({
    h1: { fontSize: 30, fontWeight: "bold" },
    h2: { fontSize: 26, fontWeight: "bold" },
    h3: { fontSize: 22, fontWeight: "bold" },
    h4: { fontSize: 18, fontWeight: "bold" },
    h5: { fontSize: 14, fontWeight: "bold" },
    h6: { fontSize: 12, fontWeight: "bold" },
})