import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Text, View } from 'react-native'
import UNIVERSALS from '../../@universals'
import { TransformOnHover } from "../../components/common/webDivWrapper/TransformOnHover"

interface Props {
    data: any
}
export default (props: Props) => {

    console.log("data length is -- " + props.data.length)

    return (
        <View
            style={{
                height: "40vh",
                //backgroundColor: "red",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly"
            }}>
            {props.data.map((item, index) => {
                console.log("()()()--" + JSON.stringify(item))
                return (
                    <TransformOnHover>
                        <View style={[UNIVERSALS.STYLES.shadow, {
                            margin: 20,
                            borderRadius: 10,
                            overflow: "hidden",
                        }]}>
                            <View style={{ height: 150, width: "100%", backgroundColor: "grey" }}></View>
                            <View style={{ paddingHorizontal: 5 }}>
                                <Text style={[UNIVERSALS.STYLES.H3]}>{item.frontmatter.title}</Text>
                                <Text style={[UNIVERSALS.STYLES.H5, { fontWeight: "normal", marginBottom: 5 }]}>{item.frontmatter.title}</Text>
                            </View>
                        </View>
                    </TransformOnHover>)
            })}
        </View>
    )
}