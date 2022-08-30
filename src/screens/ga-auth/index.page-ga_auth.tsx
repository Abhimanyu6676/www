import LinkIcon from "@mui/icons-material/Link"
import Axios from "axios"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React, { useEffect, useState } from "react"
import { StringParam, useQueryParam } from "use-query-params"
import { FadeInSection } from "../../components/common/fadeInSection"
import {
  NotificationComp,
  notifications_i,
} from "../../components/common/NotificationComp"
import { Spinner } from "../../components/common/spinner"
import { FullScreen } from "../../components/layouts/FullScreen"

interface Props {}

const GoogleAuthPage = (props: Props) => {
  const [consentPass, setConsentPass] = useState(false)

  return (
    <FullScreen
      style={
        {
          //backgroundColor: "green",
        }
      }
    >
      <GoogleLinkingForm />
    </FullScreen>
  )
}

const GoogleLinkingForm = () => {
  const [redirectURI, setRedirectURI] = useQueryParam(
    "redirect_uri",
    StringParam
  )
  const [stateParam, setStateParam] = useQueryParam("state", StringParam)
  const [clientID, setClientID] = useQueryParam("client_id", StringParam)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loginBusy, setLoginBusy] = useState(false)
  const [notifications, setNotifications] = useState<notifications_i[]>([])

  useEffect(() => {
    console.log("client ID is - " + clientID)
    console.log("redirectURI is - " + redirectURI)
    console.log("process.env.NODE_ENV - ", process.env.NODE_ENV)
    return () => {}
  }, [])

  const addNotification = (
    addNotificationProps: Omit<notifications_i, "id">
  ) => {
    setNotifications([
      ...notifications,
      {
        id: Date.now(),
        heading: addNotificationProps.heading,
        removeAuto: addNotificationProps.removeAuto,
      },
    ])
  }

  const data = useStaticQuery(graphql`
    query {
      icon: file(relativePath: { eq: "icon/icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      googleAssistantIcon: file(
        relativePath: { eq: "icon/googleAssistantIcon.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const login = async () => {
    if (!loginBusy && checkEmail({ email }) && password.length > 0) {
      setLoginBusy(true)
      console.log(
        "now logging In for GA Authorization : " + window.location.href
      )

      let serverAdd = `https://huelite.in/${
        clientID?.includes("dev") ? "development" : "backend"
      }/ga/auth`

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
          if (res.data.authCode && redirectURI && stateParam) {
            let uri = redirectURI
            uri += "?code="
            uri += res.data.authCode
            uri += "&state="
            uri += stateParam
            console.log(
              "redirecting to google redirectURI ==> " + JSON.stringify(uri)
            )
            console.log("------------")
            window.location.replace(uri)
          } else {
            console.log("cannot redirect as parameters are missing")
          }
          //return res
        })
        .catch(err => {
          setLoginBusy(false)
          console.log("error in GA aurh === " + JSON.stringify(err))
          addNotification({
            heading: "Login Failed",
            subHeading:
              "Kindly, enter correct email and password. Ensure that your device is connected to the internet",
            removeAuto: true,
          })
          return err
        })
    } else if (!checkEmail({ email })) {
      addNotification({
        heading: "Invalid Email ID",
        subHeading: "Kindly, enter valid email address",
        removeAuto: true,
      })
    } else if (!password.length) {
      addNotification({
        heading: "Password field cannot be empty",
        removeAuto: true,
      })
    }
  }

  const checkEmail = (props: { email: string }) => {
    var filter =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/

    if (props.email.length && props.email.match(filter)) return true

    return false
  }

  return (
    <FadeInSection
      style={{ flex: 1, display: "flex", flexDirection: "column" }}
    >
      <NotificationComp
        containerStyles={{
          top: 50,
        }}
        notifications={notifications}
        removeNotification={({ id: removeID }) => {
          setNotifications(notifications.filter(temp => temp.id != removeID))
        }}
      />
      <div
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          display: "flex",
        }}
      >
        <div /// link heading & images section
          style={{
            flex: 1,
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 25,
          }}
        >
          <Img fluid={data.icon.childImageSharp.fluid} style={{ width: 100 }} />
          <h2
            style={{
              textAlign: "center",
              margin: "0px 5vw",
            }}
          >
            Huelite
          </h2>
          <p
            style={{
              textAlign: "center",
              margin: "0px 5vw",
              marginTop: "1rem",
            }}
          >
            By signing in, you are authorizing Google to control your devices
          </p>

          {/*   <div // link images container
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              height: "fit-content",
              marginTop: "2rem",
            }}
          >
            <Img
              fluid={data.icon.childImageSharp.fluid}
              style={{ width: 100 }}
            />
            <LinkIcon
              name="link"
              style={{ fontWeight: "bold", color: "#aaaaaaa", fontSize: 50 }}
            />
            <Img
              fluid={data.googleAssistantIcon.childImageSharp.fluid}
              style={{ width: 80, marginLeft: 20 }}
            />
          </div> */}
        </div>
        <div /// login form
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          {/*  <p
            style={{
              textAlign: "center",
              maxWidth: 300,
            }}
          >
            SignIn using your HUElite account Email-ID & password
          </p> */}
          <input
            placeholder="Email"
            style={{
              height: 50,
              borderWidth: 0,
              borderBottomWidth: 1,
              width: "90%",
              marginLeft: 20,
              marginRight: 20,
              maxWidth: 400,
              //marginTop: "1rem",
            }}
            value={email}
            onChange={event => {
              setEmail(event.target.value)
            }}
          />
          <input
            placeholder="Password"
            style={{
              height: 50,
              borderWidth: 0,
              borderBottomWidth: 1,
              width: "90%",
              marginLeft: 20,
              marginRight: 20,
              maxWidth: 400,
              marginTop: 20,
            }}
            type="password"
            value={password}
            onChange={event => {
              setPassword(event.target.value)
            }}
          />
          <button ///GA login button
            onClick={() => {
              login()
            }}
            style={{
              padding: "10px 20px",
              margin: 20,
              marginTop: "5rem",
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
            {loginBusy ? (
              <Spinner radius={25} />
            ) : (
              <h3 style={{ color: "white" }}>Login</h3>
            )}
          </button>
          <button ///policy button
            onClick={() => {
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
            <p style={{ color: "#444", padding: "5px 0px" }}>
              Privacy policies can be found <b>here</b>
            </p>
          </button>
        </div>
      </div>
    </FadeInSection>
  )
}

export default GoogleAuthPage
