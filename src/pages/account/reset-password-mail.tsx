import React from "react"
import { useState } from "react"
import {
  FadeInSection,
  FadeInSectionCSS,
} from "../../components/common/fadeInSection"
import axios from "axios"
import appColors from "../../styles/appColors"

enum APIstate {
  IDLE,
  BUSY,
  SUCCESS,
  ERROR,
}

interface Props {}
const ResetPassMailForm = (props: Props) => {
  const [email, setEmail] = useState("")
  const [apiState, setApiState] = useState(APIstate.IDLE)

  const onClick = () => {
    if (
      email.length > 0 &&
      apiState != APIstate.BUSY &&
      apiState != APIstate.SUCCESS
    ) {
      setApiState(APIstate.BUSY)
      axios
        .post(
          "https://huelite.in/backend/user/reset-password-mail",
          {
            email: email.toLowerCase().trim(),
          },
          {
            timeout: 5000,
            /* headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods":
                "GET, POST, PATCH, PUT, DELETE, OPTIONS",
              "Access-Control-Allow-Headers":
                "Origin, Content-Type, X-Auth-Token",
            }, */
          }
        )
        .then(res => {
          console.log("generate link api success - " + JSON.stringify(res))
          setApiState(APIstate.SUCCESS)
        })
        .catch(err => {
          console.log("generate link api error - " + JSON.stringify(err))
          setApiState(APIstate.ERROR)
        })
    }
  }

  return (
    <FadeInSectionCSS
      style={{
        padding: "0px 5vw",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1 style={{ marginTop: "10vh" }}>Enter your email to reset password</h1>
      <p>
        Password reset link will be sent tou your email address. The link will
        be valid till 5 minutes from token genaration
      </p>
      <input
        type="email"
        placeholder="Enter email address"
        color="#777"
        style={{
          lineHeight: "150%",
          color: "#777",
          borderWidth: 0,
          borderBottomWidth: 1,
          marginTop: 50,
          fontSize: 20,
          maxWidth: 400,
          outline: "none",
        }}
        value={email}
        onChange={e => {
          setEmail(e.target.value)
        }}
      />
      {apiState == APIstate.SUCCESS && (
        <p
          style={{
            margin: 0,
            padding: 0,
            marginTop: 10,
            fontSize: 12,
            color: "#82E0AA",
          }}
        >
          Reset link sent to email address
        </p>
      )}

      <button
        onClick={onClick}
        style={{
          marginTop: 50,
          width: 300,
          backgroundColor: appColors.primaryHighlight,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3
          style={{
            color: "#fff",
            margin: "5px 10px",
            textAlign: "center",
          }}
        >
          {apiState == APIstate.SUCCESS
            ? "EMAIL SENT"
            : apiState == APIstate.BUSY
            ? "GENERATING..."
            : apiState == APIstate.ERROR
            ? "RETRY"
            : "RESET PASSWORD"}
        </h3>
      </button>
    </FadeInSectionCSS>
  )
}

export default ResetPassMailForm
