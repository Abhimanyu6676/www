import { useQueryParam, NumberParam, StringParam } from "use-query-params"
import { TextField } from "@mui/material"
import { styled } from "@mui/material/styles"
import Button, { ButtonProps } from "@mui/material/Button"
import { graphql, useStaticQuery } from "gatsby"
import React, { useEffect, useState } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import Link from "@mui/icons-material/Link"
import axios from "axios"
//@ts-ignore
import * as Styles from "./alexaLogin.module.css"
import NotificationContainer, {
  getNewNotificationUUID,
  notification_i,
} from "../../NotificationContainer"

interface Props {}
export default (props: Props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [clientID, setClientID] = useQueryParam("client_id", StringParam)
  const [stateParam, setStateParam] = useQueryParam("state", StringParam)
  const [redirectUri, setRedirectUri] = useQueryParam(
    "redirect_uri",
    StringParam
  )
  const [notifications, setNotifications] = useState<notification_i[]>([])
  const [loginBusy, setLoginBusy] = useState(false)

  useEffect(() => {
    console.log("Alexa Login useEffect. clientId : " + clientID)
    return () => {}
  }, [])

  const data = useStaticQuery(graphql`
    {
      icon: file(relativePath: { eq: "icon/icon.png" }) {
        childImageSharp {
          gatsbyImageData(width: 200, layout: CONSTRAINED)
        }
      }
      bdeIcon: file(relativePath: { eq: "icon/bdeIcon.png" }) {
        childImageSharp {
          gatsbyImageData(width: 200, layout: CONSTRAINED)
        }
      }
      alexaIcon: file(relativePath: { eq: "icon/alexaIcon.png" }) {
        childImageSharp {
          gatsbyImageData(width: 200, layout: CONSTRAINED)
        }
      }
    }
  `)

  const login = async () => {
    if (!loginBusy) {
      setLoginBusy(true)
      console.log("now logging In for Authorization : " + window.location.href)

      let serverAdd =
        clientID == "BDE"
          ? "https://huelite.in/development/auth/alexa/aa"
          : "https://huelite.in/backend/auth/alexa/aa"

      console.log("serverAdd : " + serverAdd)
      console.log("clientID : " + clientID)
      console.log("redirectURI : " + redirectUri)
      console.log("stateParam : " + stateParam)

      let res = await axios
        .post(
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
              uuid: getNewNotificationUUID({}),
              tittle: "username or password incorrect",
              color: "warning",
            },
          ])
          return err
        })
    }
  }

  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    //color: theme.palette.getContrastText("#31c4f3"),
    color: "#ffffff",
    backgroundColor: "#31c4f3",
    fontSize: 20,
    fontWeight: "bold",
    flex: 1,
    "&:hover": {
      backgroundColor: "#31c4f3",
    },
  }))

  return (
    <div
      style={{
        backgroundColor: "#31c4f3",
        display: "flex",
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <NotificationContainer
        notifications={notifications}
        setNotifications={setNotifications}
      />

      <div //main container
        className={Styles.mainContainer}
        style={{
          backgroundColor: "#ffffff",
          display: "flex",
          flexDirection: "column",
          flex: 1,
          padding: "0px 5%",
          boxShadow: "0 2px 10px #273746",
          marginBottom: 15,
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,
          position: "relative",
        }}
      >
        <div //image and textFields container
          style={{
            display: "flex",
            flexDirection: "column",
            //backgroundColor: "#0000ff",
            flex: 1,
          }}
        >
          <div //Image container
            style={{
              display: "flex",
              flex: 1,
              //backgroundColor: "#ff00ff",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "flex-end",
              height: "fit-content",
            }}
          >
            <GatsbyImage
              image={data.icon.childImageSharp.gatsbyImageData}
              style={{ width: 100 }}
              alt="HUElite"
            />
            <Link style={{ fontSize: 50 }} color="disabled" />
            <GatsbyImage
              image={data.alexaIcon.childImageSharp.gatsbyImageData}
              style={{ width: 90, marginLeft: 15 }}
              alt="HUElite"
            />
          </div>
          <div // textfields and login button
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 2,
              //backgroundColor: "#ff00ff",
            }}
          >
            <TextField
              onChange={_text => {
                setEmail(_text.target.value)
              }}
              id="outlined-basic"
              label="Email"
              variant="outlined"
              style={{ backgroundColor: "#F4F6F6", marginTop: 40 }}
            />
            <TextField
              onChange={_text => {
                setPassword(_text.target.value)
              }}
              id="outlined-basic"
              label="Enter Password"
              variant="outlined"
              style={{ marginTop: 40, backgroundColor: "#F4F6F6" }}
            />
            <div // loginButton container
              style={{
                marginTop: 40,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <ColorButton
                onClick={() => {
                  login()
                }}
                variant="contained"
              >
                {loginBusy ? "Linking" : "Login"}
              </ColorButton>
            </div>
          </div>
        </div>
        <div // linking requirement text
          style={{
            textAlign: "center",
            //background: "red",
            bottom: 10,
            left: 0,
            fontSize: 15,
            margin: "10px 0px",
          }}
        >
          Your HUElite Account is required to link your devices with Alexa and
          other Voice Assistants.
        </div>
      </div>

      <div //bottom container
        style={{
          backgroundColor: "#31c4f3",
          width: "100%",
          height: 60,
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bold",
          color: "#ffffff",
        }}
      >
        Privacy policies can be found here
      </div>
    </div>
  )
}
