import axios from "axios"
import React, { useState } from "react"
import { StringParam, useQueryParam } from "use-query-params"
import { FadeInSection } from "../../components/common/fadeInSection"
import appColors from "../../styles/appColors"
//@ts-ignore
import * as styles from "./reset-password.module.css"

enum APIstate {
  IDLE,
  BUSY,
  SUCCESS,
  ERROR,
}

interface Props {}
const ResetPassForm = (props: Props) => {
  const [tokenParam, setTokenParam] = useQueryParam("token", StringParam)
  const [password, setPassword] = useState("")
  const [re_password, setRePassword] = useState("")
  const [apiState, setApiState] = useState<APIstate>(APIstate.IDLE)

  const onClick = async () => {
    if (
      apiState != APIstate.BUSY &&
      password.length >= 8 &&
      password == re_password &&
      tokenParam
    ) {
      console.log("now changing password")
      setApiState(APIstate.BUSY)
      await axios
        .post("https://huelite.in/backend/user/reset-password", {
          password,
          token: tokenParam,
        })
        .then(res => {
          setApiState(APIstate.SUCCESS)
          console.log("reset password api response - " + res)
        })
        .catch(err => {
          setApiState(APIstate.ERROR)
          console.log("reset password api error - ")
          console.log(JSON.stringify(err, null, 2))
        })
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "0px 5vw",
        marginBottom: 100,
      }}
    >
      {apiState == APIstate.IDLE || apiState == APIstate.BUSY ? (
        <FadeInSection>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h1 style={{ marginTop: "10vh" }}>Choose your new password</h1>
            <p
              style={{
                marginTop: 20,
                color: "#777",
                maxWidth: 500,
              }}
            >
              If you did not forget your password, than you can safely skip this
              step. This link will stay valid till 5 minutes from the time of
              token generation.
            </p>
            <input
              type="password"
              placeholder="Enter password"
              color="#777"
              style={_styles.input}
              value={password}
              onChange={e => {
                setPassword(e.target.value)
              }}
            />
            {password.length > 0 &&
              password.length < 8 &&
              password == re_password && (
                <p
                  style={{
                    margin: 0,
                    padding: 0,
                    fontSize: 12,
                    color: "#F1948A",
                  }}
                >
                  password length must be minimum 8 characters
                </p>
              )}
            <input
              type="password"
              placeholder="Re-Enter password"
              color="#777"
              style={_styles.input}
              value={re_password}
              onChange={e => {
                setRePassword(e.target.value)
              }}
            />
            {password.length > 0 && password != re_password && (
              <p
                style={{
                  margin: 0,
                  padding: 0,
                  fontSize: 12,
                  color: "#F1948A",
                }}
              >
                password length must be minimum 8 characters
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
                opacity:
                  password.length >= 8 && password == re_password ? 1 : 0.5,
              }}
            >
              <h3
                style={{
                  color: "#fff",
                  margin: "5px 10px",
                  textAlign: "center",
                }}
              >
                UPDATE PASSWORD
              </h3>
            </button>
          </div>
        </FadeInSection>
      ) : apiState == APIstate.SUCCESS ? (
        <div style={{ marginTop: 100, color: "#82E0AA" }}>
          <h1>Password changed successfully</h1>
        </div>
      ) : apiState == APIstate.ERROR ? (
        <div style={{ marginTop: 100, color: "#F1948A" }}>
          <h1>Error occurred during password reset</h1>
        </div>
      ) : (
        <div />
      )}
    </div>
  )
}

const _styles = {
  input: {
    lineHeight: "150%",
    color: "#777",
    borderWidth: 0,
    borderBottomWidth: 1,
    marginTop: 50,
    fontSize: 25,
    maxWidth: 400,
    outline: "none",
  },
}

export default ResetPassForm
