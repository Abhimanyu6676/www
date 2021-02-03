import React, { useState } from 'react'
import UNIVERSALS from '../../../../@universals'
import styles from "./index.module.scss"
import { Text } from "react-native"
import TextField from '@material-ui/core/TextField'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import API from "../../../../@api"


const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#5555ff',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#5555ff',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'red',
            },
            '&:hover fieldset': {
                borderColor: 'yellow',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#5555ff',
            },
        },
    },
})(TextField);



const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            width: 200,
        },
    },
}));

interface Props { }

export default (props: Props) => {
    const classes = useStyles();
    const [show, setShow] = useState(true)

    return (
        <div
            style={{ position: "relative" }}>
            <div style={{
                width: "100%",
                height: '50vh',
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "flex-start",
                //backgroundColor: "red",
                padding: 50
            }}>
                <Text style={[UNIVERSALS.STYLES.H1, {}]}>Ready to Launch ODM App</Text>
                <Text style={[UNIVERSALS.STYLES.H4, { maxWidth: 450, fontWeight: "normal" }]}>Create your Beta App in few simple steps, follow simple steps to create and customize your app appreance and your barnd Itentity</Text>

                <form className={classes.root} noValidate autoComplete="off">
                    <CssTextField className={classes.root} id="create-app-emailID" label="Enter your email-ID" />
                </form>
                <button
                    onClick={() => {
                        setShow(!show)
                    }}
                    style={{ borderRadius: 100, border: "0.3px #555555 solid", padding: "6px 15px", marginTop: 20 }}>
                    <Text style={[UNIVERSALS.STYLES.H4, UNIVERSALS.STYLES.centerText, {}]}>Let's Build</Text>
                </button>
            </div>
        </div>
    )
}
