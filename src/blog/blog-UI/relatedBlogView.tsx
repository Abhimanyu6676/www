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
        <View>
            <Text style={[UNIVERSALS.STYLES.centerText, UNIVERSALS.STYLES.H1, { color: "#555" }]}>Ralated Topics</Text>
            <Text style={[
                UNIVERSALS.STYLES.centerText,
                UNIVERSALS.STYLES.H5, {
                    color: "#555",
                    fontWeight: "normal",
                    maxWidth: 350,
                    alignSelf: "center",
                    marginTop: 10
                }]}
            >Find more on Ralated & trending Topics on <a href={"/blog"}><Text style={[UNIVERSALS.STYLES.H5]}>HUElite Blog</Text></a></Text>
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
                                margin: 5,
                                borderRadius: 10,
                                overflow: "hidden",
                                width: 250
                            }]}>
                                <View style={{ height: 150, width: "100%", backgroundColor: "grey" }}>
                                    {item?.frontmatter?.main_img && <img style={{ width: '100%', height: "100%" }} src={require("../" + item.frontmatter.main_img)} />}
                                </View>
                                <View style={{ padding: 10 }}>
                                    <Text style={[UNIVERSALS.STYLES.H4]}>{item.frontmatter.title}</Text>
                                    <Text style={[UNIVERSALS.STYLES.H6, { fontWeight: "normal" }]}>{item.frontmatter.title}</Text>
                                </View>
                            </View>
                        </TransformOnHover>)
                })}
            </View>
        </View>
    )
}