import axios from "axios"
import React, { useEffect, useState } from "react"
import { NotificationComp, notifications_i } from "../NotificationComp"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { Spinner } from "../spinner"

type Props = {
  style?: React.CSSProperties
  className?: any
}
export const Subscribe = (props: Props) => {
  const [email, setEmail] = useState("")
  const [notifications, setNotifications] = useState<notifications_i[]>([])
  const [subscribeApiStatus, setSubscribeApiStatus] = useState<
    "idle" | "busy" | "success" | "error"
  >("idle")
  /**
   * if (emailPlaceHolder == "Enter valid email address"); than placeHolder color will be warning
   */
  const [emailPlaceHolder, setEmailPlaceHolder] = useState<
    "Enter email ID" | "Enter valid email address"
  >("Enter email ID")

  const checkEmail = () => {
    var filter =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/

    if (email.length && email.match(filter)) return true

    return false
  }

  const subscribeFunc = async () => {
    console.log("subscribe button hit")
    if (checkEmail() && subscribeApiStatus != "busy") {
      setSubscribeApiStatus("busy")
      await axios
        .request({
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
        .then(res => {
          console.log("subscribe api response = ", res)
          if (res?.data?.data?.createSubscribers) {
            console.log("res data = ", res.data.data.createSubscribers)
            addNotification({
              heading: "Subscribed Successfully",
              removeAuto: true,
              severity: "success",
            })
          } else if (
            res?.data?.errors[0]?.message &&
            res.data.errors[0].message?.includes("duplicate key")
          ) {
            console.log("email already registered")
            addNotification({
              heading: "Already registered",
              removeAuto: true,
              severity: "success",
            })
          }
        })
        .catch(err => {
          console.log("catch block :: ", err)
          addNotification({
            heading: "Unknown Error",
            removeAuto: true,
          })
        })
        .finally(() => {
          setSubscribeApiStatus("idle")
        })
    } else {
      console.log("either busy or invalid email")
      if (!checkEmail()) {
        setEmail("")
        setEmailPlaceHolder("Enter valid email address")
      }
    }
  }

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

  return (
    <div
      className={props.className}
      style={{
        backgroundColor: "#eee",
        padding: "5rem 5vw",
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
      <div // subscribe field container
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: "90%",
          maxWidth: 500,
          marginTop: "2rem",
        }}
      >
        <div
          style={{
            backgroundColor: "#ffffff",
            height: 50,
            display: "flex",
            alignItems: "center",
            flex: 1,
          }}
        >
          <input
            onChange={txt => {
              setEmail(txt.currentTarget.value)
            }}
            value={email}
            placeholder={emailPlaceHolder}
            style={{
              height: 50,
              borderWidth: 0,
              flex: 1,
              backgroundColor: "#ffffff",
            }}
          />
          <button
            onClick={subscribeFunc}
            style={{
              position: "absolute",
              right: 0,
              //backgroundColor: "red",
              height: "100%",
              padding: "0px 10px",
            }}
          >
            {subscribeApiStatus != "busy" ? (
              <ArrowForwardIcon />
            ) : (
              <Spinner radius={25} />
            )}
          </button>
        </div>
      </div>

      <NotificationComp
        containerStyles={{
          maxWidth: 400,
        }}
        notifications={notifications}
        removeNotification={({ id: removeID }) => {
          setNotifications(notifications.filter(temp => temp.id != removeID))
        }}
      />
    </div>
  )
}
