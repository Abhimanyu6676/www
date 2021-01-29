import React from "react"
import { Container } from "react-bootstrap"
import Layout from "../components/common/layout"
import HomePage from "../components/screens/homePage"
import SEO from "../components/seo"
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import BlogNavigator from "../components/screens/support/navigator"
import SubscribeSection from "../components/common/subscribeSection"
import PopularTopicsNavigator from "../components/screens/support/popularTopics"
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'


const useStyles = makeStyles((theme) => ({
    root: {
        margin: 0,
        padding: 0,
        '& > *': {
            margin: 0,
            padding: 0,
            width: '100%',
        },
    },
}))


export default () => {
    const classes = useStyles()


    return (
        <Layout>
            <SEO title="support" />
            <Container>
                <div /* Sec1: main heading*/ style={{ marginTop: 50, marginBottom: 50 }}>
                    <h1 style={{ textAlign: "center" }}>How can we help you</h1>
                    <div style={{ position: "relative", width: "60%", margin: "auto", marginTop: 25 }} /* Sec2: search div */>
                        <form className={classes.root} noValidate autoComplete="off">
                            <TextField
                                id="outlined-helperText"
                                label="Search"
                                defaultValue=""
                                //helperText="search here"
                                variant="outlined"
                            />
                        </form>
                        <Ionicons name="ios-search" size={24} color="black" style={{ position: "absolute", right: 10, top: 13.5 }} />
                    </div>
                    <h4 style={{ marginTop: 25, fontWeight: "normal", textAlign: "center" }}>Or choose a category to quickly find the help you need</h4>
                    <BlogNavigator /* Sec2: main navigation container */ />
                    <h1 style={{ textAlign: "center", marginTop: 50 }}>Popular Topics</h1>
                    <PopularTopicsNavigator />
                    <div /* Sec2: query section */
                        style={{ display: "flex", flexDirection: "column", marginTop: 80, alignItems: "center", justifyContent: "center" }}>
                        <h1 style={{ textAlign: "center" }}>Still have a question?</h1>
                        <h4 style={{ maxWidth: 350, marginTop: 10, textAlign: "center", fontWeight: "normal" }}>If you cannot find answer to your question in our FAQ, help is just a mail away. We will answer to you shortly!</h4>
                        <a href="mailto:support@huelite.in" style={{ marginTop: 50 }}>
                            <div /** Sec3: email Button */
                                style={{
                                    border: "2px #F8991F solid",
                                    borderRadius: 8,
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    padding: 10,
                                }}>
                                <MaterialCommunityIcons name="email-outline" size={35} color="#F8991F" />
                                <h4 style={{ color: "#F8991F", marginTop: 10, fontWeight: "normal" }}>support@huelite.in</h4>
                            </div>
                        </a>
                    </div>
                </div>
            </Container>
            <SubscribeSection />
        </Layout>
    )
}
