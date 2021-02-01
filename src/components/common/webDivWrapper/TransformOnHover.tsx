import { CSSProperties } from '@material-ui/core/styles/withStyles'
import React from 'react'
import styles from "./Transform.module.scss"


interface Props {
    style?: CSSProperties
    className?: any
    children?: any
}
export const TransformOnHover = (props: Props) => {
    return (
        <div className={styles._transform + " " + props.className} style={props.style}>
            {props.children}
        </div>
    )
}
