import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import UNIVERSALS from '../../../../@universals'
import styles from "./index.module.scss"


interface Props { }


export default ({ }: Props) => {
    return (
        <View>
            <Text style={UNIVERSALS.STYLES.H1}>This is react native web test</Text>
            <Text style={UNIVERSALS.STYLES.H1}>This is react native web test</Text>
            <Text style={UNIVERSALS.STYLES.H1}>This is react native web test</Text>
            <Text style={UNIVERSALS.STYLES.H1}>This is react native web test</Text>
            <Text style={UNIVERSALS.STYLES.H1}>This is react native web test</Text>
        </View>
    )
}


