import React from 'react';
import Sec1 from "./section1/";
import Section2 from './section2';

interface Props {

}
const Component = ({ }: Props) => {

    return (
        <div className="-bg-fff-" style={{ minHeight: "50vh" }}>
            <Sec1 />
            <Section2 />
        </div>
    )
}


export default Component