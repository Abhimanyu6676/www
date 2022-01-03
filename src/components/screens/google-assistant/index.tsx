import { graphql, useStaticQuery } from "gatsby"
import { useQueryParam, StringParam } from "use-query-params"
import React, { useEffect, useState } from "react"
import GoogleConsent from "./googleConsent"
import { FadeInSection } from "../../common/FadeInSection"
import { ActivityIndicator, Text, View } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import Img from "gatsby-image"
import { RectButton } from "react-native-gesture-handler"
import Axios from "axios"
import NotificationContainer from "../../common/alert-popup"
import { useDispatch, useSelector } from "react-redux"
import { storeActions } from "../../../redux"

interface Props {}

export default (props: Props) => {
  const [consentPass, setConsentPass] = useState(false)

  return (
    <div style={{ flex: 1, height: "100vh", display: "flex" }}>
      <NotificationContainer />
      {!consentPass ? <GoogleLinkingForm /> : <GoogleConsent setConsentPass={setConsentPass} />}
    </div>
  )
}

const GoogleLinkingForm = () => {
  const [redirectURI, setRedirectURI] = useQueryParam("redirect_uri", StringParam)
  const [stateParam, setStateParam] = useQueryParam("state", StringParam)
  const [clientID, setClientID] = useQueryParam("client_id", StringParam)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loginBusy, setLoginBusy] = useState(false)
  const dispatch = useDispatch()
  const notifications = useSelector<storeRootState, notification_i[]>(state => state.notificationReducer.notifications)

  useEffect(() => {
    console.log("client ID is - " + clientID)
    console.log("redirectURI is - " + redirectURI)
    return () => {}
  }, [])

  const data = useStaticQuery(graphql`
    query {
      icon: file(relativePath: { eq: "icon/icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      googleAssistantIcon: file(relativePath: { eq: "icon/googleAssistantIcon.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const login = async () => {
    if (!loginBusy) {
      setLoginBusy(true)
      console.log("now logging In for GA Authorization : " + window.location.href)

      /*   let serverAdd =
        process.env.NODE_ENV == "development"
          ? "http://192.168.1.6:4000/development/auth/ga/auth"
          : "https://huelite.in/backend/auth/ga/auth" */

      let serverAdd = "https://huelite.in/development/auth/ga/auth"

      console.log("serverAdd : " + serverAdd)

      let res = await Axios.post(
        serverAdd,
        {
          email: email.trim().toLowerCase(),
          password,
        },
        {
          timeout: 5000,
        }
      )
        .then((res: any) => {
          setLoginBusy(false)
          console.log("response is === " + JSON.stringify(res))
          if (res.data.authCode) {
            let uri = redirectURI
            uri += "?code="
            uri += res.data.authCode
            uri += "&state="
            uri += stateParam
            console.log("redirecting to amazon link ==> " + JSON.stringify(uri))
            console.log("------------")
            window.location.replace(uri)
          }
          //return res
        })
        .catch(err => {
          setLoginBusy(false)
          console.log("error in GA aurh === " + JSON.stringify(err))
          dispatch(
            storeActions.notificationReducerActions.newNotificationAction({
              newNotification: {
                id: "ID",
                type: "ALERT",
                title: "Login Failed",
                subtitle:
                  "Kindly, enter correct email and password. Ensure that your device is connected to the internet",
              },
            })
          )
          return err
        })
    }
  }

  return (
    <FadeInSection style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <div
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          display: "flex",
        }}
      >
        <View /// image view container
          style={{
            flex: 1,
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 25,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              height: "fit-content",
            }}
          >
            <Img fluid={data.icon.childImageSharp.fluid} style={{ width: 100 }} />
            <Ionicons name="link" size={30} color="#aaa" style={{ fontWeight: "bold" }} />
            <Img fluid={data.googleAssistantIcon.childImageSharp.fluid} style={{ width: 80, marginLeft: 20 }} />
          </View>
          <h2>Link your account</h2>
        </View>
        <View /// login form
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <input
            placeholder="Email"
            style={{
              height: 40,
              borderWidth: 0,
              borderBottomWidth: 1,
              width: "90%",
              marginLeft: 20,
              marginRight: 20,
              maxWidth: 400,
            }}
            value={email}
            onChange={event => {
              setEmail(event.target.value)
            }}
          />
          <input
            placeholder="Password"
            style={{
              height: 40,
              borderWidth: 0,
              borderBottomWidth: 1,
              width: "90%",
              marginLeft: 20,
              marginRight: 20,
              maxWidth: 400,
              marginTop: 20,
            }}
            value={password}
            onChange={event => {
              setPassword(event.target.value)
            }}
          />
          <RectButton ///GFlogin button
            onPress={() => {
              login()
            }}
            style={{
              padding: "10px 20px",
              margin: 20,
              marginTop: 50,
              backgroundColor: "#31c4f3",
              display: "flex",
              height: 40,
              overflow: "hidden",
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
              width: "90%",
              maxWidth: 400,
            }}
          >
            {loginBusy ? <ActivityIndicator size={25} /> : <h3 style={{ color: "white" }}>Login</h3>}
          </RectButton>
          <RectButton ///policy button
            onPress={() => {
              window.open("https://www.huelite.in/support/privacy_policy")
            }}
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#444", paddingVertical: 5 }}>
              Privacy policies can be found <Text style={{ fontWeight: "bold" }}>here</Text>
            </Text>
          </RectButton>
        </View>
      </div>
    </FadeInSection>
  )
}
