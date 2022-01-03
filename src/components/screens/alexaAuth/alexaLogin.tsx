import React, { useEffect, useState } from "react"
import Axios from "axios"
import { useQueryParam, NumberParam, StringParam } from "use-query-params"
import { ActivityIndicator, Dimensions, Text, View } from "react-native"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { RectButton } from "react-native-gesture-handler"
//@ts-ignore -  ignored scss file search
import styles from "./alexaLogin.module.scss"
import { Ionicons, FontAwesome5 } from "@expo/vector-icons"
import { useSpring } from "react-spring"
import { animated } from "react-spring"

//http://localhost:8000/alexa_auth/?client_id=iamlive247%40gmail.com&response_type=code&state=A2SAAEAEE7SSLyz7LebKiLjEpEdD-MB4L3_tWWy5b5GKSx_GdsNYuCbvrSaGhvD0xiubrEtjUWcZ-bj1niQykQqs-KXTGShuwSgLOSc7C9nHJOviUaHPIUwKco9xo0R-Fwyv26Crv99yka2QBdFGnblGWeutm1h2RExeexPJfWcQNvlt9DoR-rWLEW-T1lSSnSk7aar4yqj7zBnLcQgW4mx5wmbZ97MEfbZTrVlN2junqrd7-Kr51-lOof1vF5bUOU0cFEI4s9--_bPSG7hDsoXm2N3i0RdMljSefc36Ql2wQMpGKO7KCqVyGuiM0eeva1spmcZqD7KuRVNyiKirlXCGDCnXMmWUAhU9CHWC0HY_u5IZ6-ZDfu5aDOZnDs9l0fYTmCX1oWh7T0NWEHILq12aO0sbGxq-S1Zt84IQ8rqwIVpjAJ6HgKbNJ1sgMVm5Jpob01hZuU-2NHKCgTAWqSPZRLs9RHxcoQ4xm49jhsVlKiRBYLU3Na83BksXKYDfMn3x1cfVG33BBkxlUyAFBqP1CwnsMTyi3dgiEIY4zZk6YPh_AOvTW5HgjbILuMR04PY4ZDBO2T_F9bHRy4BWq86XkCPQb7R-6WPM7CCXCghnPBmNIpWwvn6aS0Uo22DVCYHTceWHODAq_lR696kMb_QV1ThP75WLw&scope=scope1&redirect_uri=https%3A%2F%2Flayla.amazon.com%2Fapi%2Fskill%2Flink%2FMY7JNNMNJP23P
//@-#todo copy .env from windown environment

const { width, height } = Dimensions.get("window")

interface Props {}
export default (props: Props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [clientID, setClientID] = useQueryParam("client_id", StringParam)
  const [stateParam, setStateParam] = useQueryParam("state", StringParam)
  const [redirectUri, setRedirectUri] = useQueryParam("redirect_uri", StringParam)
  const [notifications, setNotifications] = useState<notification_i[]>([])
  const [loginBusy, setLoginBusy] = useState(false)

  const data = useStaticQuery(graphql`
    query {
      icon: file(relativePath: { eq: "icon/icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      bdeIcon: file(relativePath: { eq: "icon/bdeIcon.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      alexaIcon: file(relativePath: { eq: "icon/alexaIcon.png" }) {
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
      console.log("now logging In for Authorization : " + window.location.href)

      let serverAdd =
        clientID == "BDE" ? "https://huelite.in/development/auth/alexa/aa" : "https://huelite.in/backend/auth/alexa/aa"

      console.log("serverAdd : " + serverAdd)
      console.log("clientID : " + clientID)
      console.log("redirectURI : " + redirectUri)
      console.log("stateParam : " + stateParam)

      let res = await Axios.post(
        serverAdd,
        {
          email: email.trim().toLowerCase(),
          password,
          redirectUri,
          stateParam,
          clientID,
        },
        {
          timeout: 5000,
        }
      )
        .then((res: any) => {
          setLoginBusy(false)
          console.log("response is === " + JSON.stringify(res))
          if (res.data.authCode) {
            let uri = redirectUri
            uri += "/?state="
            uri += stateParam
            uri += "&code="
            uri += res.data.authCode
            console.log("redirecting to amazon link ==> " + JSON.stringify(uri))
            console.log("------------")
            window.location.replace(uri)
          }
          //return res
        })
        .catch(err => {
          setLoginBusy(false)
          console.log("error is === " + JSON.stringify(err))
          setNotifications([
            ...notifications,
            {
              id: uuid({ uuid: "xxxx-xx" }),
              title: "username or password incorrect",
              type: "WARNING",
            },
          ])
          return err
        })
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        backgroundColor: "#31c4f3",
      }}
    >
      <NotificationContainer setNotifications={setNotifications} notifications={notifications} />
      <div
        style={{
          boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          display: "flex",
          flex: 1,
          flexDirection: "column",
          backgroundColor: "white",
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,
        }}
      >
        <View
          style={{
            flex: 1,
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
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
            <Img
              fluid={clientID == "BDE" ? data.bdeIcon.childImageSharp.fluid : data.icon.childImageSharp.fluid}
              style={{ width: 100 }}
            />
            <Ionicons name="link" size={30} color="#aaa" style={{ fontWeight: "bold" }} />
            <Img fluid={data.alexaIcon.childImageSharp.fluid} style={{ width: 90, marginLeft: 15 }} />
          </View>
          <h2>Link your account</h2>
        </View>
        <View
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <input
            placeholder="Email"
            className={styles.input}
            value={email}
            onChange={event => {
              setEmail(event.target.value)
            }}
          />
          <input
            placeholder="Password"
            className={styles.input}
            style={{ marginTop: 20 }}
            value={password}
            onChange={event => {
              setPassword(event.target.value)
            }}
          />
          <RectButton
            onPress={login}
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
          <RectButton
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
      <div
        style={{
          //flex: 0.25,
          //backgroundColor: "#55f",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p
          style={{
            margin: "10px 20px",
            textAlign: "center",
            maxWidth: 400,
            marginTop: 20,
            color: "white",
          }}
        >
          Your HUElite Account is required to link your devices with Alexa and other Voice Assistants.
        </p>
      </div>
    </div>
  )
}

const NotificationContainer = (props: {
  setNotifications: React.Dispatch<React.SetStateAction<notification_i[]>>
  notifications: notification_i[]
}) => {
  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        width,
        //backgroundColor: "red",
        zIndex: 10,
      }}
    >
      {/*  <RectButton
            onPress={() => {
                props.setNotifications([...props.notifications, { id: uuid({}), title: uuid({ uuid: "xxx--xxxxxxx" }) }])
                console.log("notifications after addition :")
                console.log(JSON.stringify(props.notifications))
            }}
            style={{
                height: 40,
                backgroundColor: "#55f",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative"
            }}>
            <Text>Add Item</Text>
        </RectButton> */}
      {props.notifications.map((notification, index) => {
        return (
          <NotificationCard
            notifications={props.notifications}
            notification={notification}
            index={index}
            remove={id => {
              let newArray = props.notifications.filter(item => item.id != id)
              props.setNotifications(newArray)
            }}
          />
        )
      })}
    </View>
  )
}

const NotificationCard = (props: {
  notification: notification_i
  notifications: notification_i[]
  index: number
  remove: (id: string) => void
}) => {
  const backgroundColor =
    props.notification.type == "ALERT"
      ? "#ec7063"
      : props.notification.type == "SUCCESS"
      ? "#2ecc71"
      : props.notification.type == "WARNING"
      ? "#f5b041"
      : "#aed6f1"

  useEffect(() => {
    return () => {}
  }, [])

  return (
    <div
      style={{
        top: props.index ? (props.index + 1) * 80 : 80,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 10,
        paddingRight: 10,
        overflow: "hidden",
        borderRadius: 5,
        backgroundColor,
      }}
      className={styles.notificationCard}
      key={"" + props.index}
    >
      <h5 style={{ color: "white" }}>{props.notification.title}</h5>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "100%",
          alignItems: "center",
        }}
      >
        <div style={{ height: "100%", width: 5, backgroundColor: "white" }}></div>
        <div
          style={{
            marginLeft: 10,
            color: "white",
          }}
          onClick={() => {
            props.remove(props.notification.id)
          }}
        >
          close
        </div>
      </div>
    </div>
  )
}

const uuid = (props: { uuid?: string }) => {
  let uuid = props.uuid ? props.uuid : "xxxx"

  return uuid.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}
