import React from 'react'
import SubscribeSection from "../../common/subscribeSection"
import Img from "gatsby-image"
import Section1 from "./section1"
import Section2 from "./section2"
import Section3 from "./section3"


interface Props { }

export default ({ }: Props) => {

    return (
        <div>

            <Section1 />
            <Section2 />
            <Section3 />
            <SubscribeSection />
        </div>
    )
}