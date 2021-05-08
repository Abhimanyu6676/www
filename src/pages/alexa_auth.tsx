import React, { useState } from 'react'
import Axios from "axios"
import { useQueryParam, NumberParam, StringParam } from "use-query-params"


//http://localhost:8000/alexa_auth/?client_id=iamlive247%40gmail.com&response_type=code&state=A2SAAEAEE7SSLyz7LebKiLjEpEdD-MB4L3_tWWy5b5GKSx_GdsNYuCbvrSaGhvD0xiubrEtjUWcZ-bj1niQykQqs-KXTGShuwSgLOSc7C9nHJOviUaHPIUwKco9xo0R-Fwyv26Crv99yka2QBdFGnblGWeutm1h2RExeexPJfWcQNvlt9DoR-rWLEW-T1lSSnSk7aar4yqj7zBnLcQgW4mx5wmbZ97MEfbZTrVlN2junqrd7-Kr51-lOof1vF5bUOU0cFEI4s9--_bPSG7hDsoXm2N3i0RdMljSefc36Ql2wQMpGKO7KCqVyGuiM0eeva1spmcZqD7KuRVNyiKirlXCGDCnXMmWUAhU9CHWC0HY_u5IZ6-ZDfu5aDOZnDs9l0fYTmCX1oWh7T0NWEHILq12aO0sbGxq-S1Zt84IQ8rqwIVpjAJ6HgKbNJ1sgMVm5Jpob01hZuU-2NHKCgTAWqSPZRLs9RHxcoQ4xm49jhsVlKiRBYLU3Na83BksXKYDfMn3x1cfVG33BBkxlUyAFBqP1CwnsMTyi3dgiEIY4zZk6YPh_AOvTW5HgjbILuMR04PY4ZDBO2T_F9bHRy4BWq86XkCPQb7R-6WPM7CCXCghnPBmNIpWwvn6aS0Uo22DVCYHTceWHODAq_lR696kMb_QV1ThP75WLw&scope=scope1&redirect_uri=https%3A%2F%2Flayla.amazon.com%2Fapi%2Fskill%2Flink%2FMY7JNNMNJP23P


interface Props { }
export default (props: Props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [clientID, setClientID] = useQueryParam("client_id", StringParam)
    const [stateParam, setStateParam] = useQueryParam("state", StringParam)
    const [redirectUri, setRedirectUri] = useQueryParam("redirect_uri", StringParam)


    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                height: "100vh",
            }}>
            <div style={{
                flex: 0.75,
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <p style={{
                    margin: "10px 20px",
                    textAlign: "center",
                    maxWidth: 400
                }}>Your HUElite Account is required to link your devices with Alexa and other Voice Assistants.</p>
                <input placeholder="Email"
                    value={email}
                    onChange={(event) => {
                        setEmail(event.target.value)
                    }}
                    style={{
                        borderWidth: 0,
                        borderBottomWidth: 0.1,
                        width: "80%",
                        maxWidth: 400,
                        marginTop: 50,
                    }} />
                <input placeholder="Password"
                    value={password}
                    onChange={(event) => {
                        setPassword(event.target.value)
                    }}
                    style={{
                        borderWidth: 0,
                        borderBottomWidth: 0.1,
                        width: "80%",
                        maxWidth: 400,
                        marginTop: 50
                    }} />
                <button
                    onClick={async () => {
                        console.log("now logging In for Authorization : " + window.location.href)
                        console.log("clientID : " + clientID)
                        console.log("redirectURI : " + redirectUri)
                        console.log("stateParam : " + stateParam)
                        let res = await Axios.post(process.env.NODE_ENV == "development" ? process.env.SERVER : "https://huelite.in/backend/auth/alexa/aa", {
                            email,
                            password,
                            redirectUri,
                            stateParam,
                            clientID
                        }).then((res: any) => {
                            console.log("response is === " + JSON.stringify(res))
                            if (res.data.authCode) {
                                let uri = redirectUri
                                uri += "/state="
                                uri += stateParam
                                uri += "&code="
                                uri += res.data.authCode
                                console.log("redirecting to amazon link ==> " + JSON.stringify(uri))
                                console.log("------------")
                                //window.location.replace(uri)
                            }
                            //return res
                        }
                        ).catch(err => { return err })
                    }}
                    style={{
                        padding: "10px 20px",
                        margin: "30px"
                    }}>Login</button>
            </div>
            <div style={{
                flex: 0.25,
                backgroundColor: "#5555ff",
                borderTopLeftRadius: 25,
                borderTopRightRadius: 25,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}></div>
        </div>
    )
}
