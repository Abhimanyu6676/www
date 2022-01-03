import React from "react"
import { useState } from "react"
import { Button } from "react-bootstrap"
import { FadeInSection } from "../../components/common/FadeInSection"
import axios from "axios"
//@ts-ignore
import styles from "./reset-password-mail.module.scss"

enum APIstate {
  IDLE,
  BUSY,
  SUCCESS,
  ERROR,
}

interface Props {}
export default (props: Props) => {
  const [email, setEmail] = useState("")
  const [apiState, setApiState] = useState(APIstate.IDLE)

  const onClick = () => {
    if (email.length > 0 && apiState != APIstate.BUSY && apiState != APIstate.SUCCESS) {
      setApiState(APIstate.BUSY)
      axios
        .post(
          "https://huelite.in/backend/user/reset-password-mail",
          {
            email: email.trim(),
          },
          { timeout: 5000 }
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
    <FadeInSection>
      <div className={styles.container}>
        <h1 style={{ marginTop: 100 }}>Enter your email to reset password</h1>
        <p className={styles.note}>
          Password reset link will be sent tou your email address. The link will be valid till 5 minutes from token genaration
        </p>
        <input
          type="email"
          placeholder="Enter email address"
          color="#777"
          className={styles.input}
          value={email}
          onChange={e => {
            setEmail(e.target.value)
          }}
        />
        {apiState == APIstate.SUCCESS && (
          <p style={{ margin: 0, padding: 0, marginTop: 10, fontSize: 12, color: "#82E0AA" }}>Reset link sent to email address</p>
        )}

        <div className={styles.buttonContainer}>
          <Button onClick={onClick} className={styles.button} style={{}}>
            {apiState == APIstate.SUCCESS
              ? "EMAIL SENT"
              : apiState == APIstate.BUSY
              ? "GENERATING..."
              : apiState == APIstate.ERROR
              ? "RETRY"
              : "RESET PASSWORD"}
          </Button>
        </div>
      </div>
    </FadeInSection>
  )
}
