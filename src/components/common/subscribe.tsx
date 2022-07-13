import axios from "axios"
import React, { useState } from "react"
import Button from "../Button"

type Props = {
  style?: React.CSSProperties
  className?: any
}

export const Subscribe = (props: Props) => {
  const [email, setEmail] = useState("")

  const checkEmail = () => {
    var filter =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/

    if (email.length && email.match(filter)) return true

    return false
  }

  return (
    <div
      className={props.className}
      style={{
        backgroundColor: "#eee",
        padding: "100px 10vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        ...props.style,
      }}
    >
      <div // text container
      >
        <h1 style={{ textAlign: "center" }}>Sign up & save</h1>
        <p style={{ textAlign: "center", marginTop: 10 }}>
          Sign up to our mailing list to receive setup tips, product launches
          and exclusive offers
        </p>
      </div>
      <div // subscribe feild container
        style={{
          display: "flex",
          width: "80vw",
          flexDirection: "row",
          justifyContent: "center",
          maxWidth: 500,
          marginTop: 50,
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            height: 50,
            flex: 1,
            display: "flex",
          }}
        >
          <input
            onChange={txt => {
              setEmail(txt.currentTarget.value)
            }}
            value={email}
            placeholder="Enter Email ID"
            style={{
              height: 50,
              flex: 1,
              borderWidth: 0,
            }}
          />
        </div>
        <Button
          onClick={async () => {
            console.log("now subscribing")
            //TODO add email to subscribe list
            if (checkEmail()) {
              const res = await axios.request({
                method: "post",
                url: "https://huelite.in/backend/admin/api",
                data: {
                  query: `mutation($email:String!){
                    createSubscribers(data:{data:{email:$email}}){
                     id
                      email
                    }
                  }`,
                  variables: { email },
                },
                timeout: 5000,
              })
              console.log("test response")
              console.log(res)
            } else console.log("incorrect mail id ", email)
          }}
          style={{
            backgroundColor: "black",
            height: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 0,
          }}
        >
          <h3
            style={{
              color: "white",
              textAlign: "center",
              margin: "0px 10px",
            }}
          >
            SUBSCRIBE
          </h3>
        </Button>
      </div>
    </div>
  )
}
