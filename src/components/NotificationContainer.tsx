import React from "react"
import { Alert, AlertProps } from "@mui/material"
import NotificationIcon from "@mui/icons-material/Notifications"

export interface notification_i {
  uuid: string
  tittle: string
  subTittle?: string
  color?: "success" | "info" | "warning" | "error"
}
type Props = {
  notifications: notification_i[]
  setNotifications: any
  styles?: React.CSSProperties
}

const NotificationContainer = (props: Props) => {
  return (
    <div // absolute notification container
      style={{
        width: "100%",
        zIndex: 2,
        position: "absolute",
        top: 0,
        left: 0,
        ...props.styles,
      }}
    >
      {props.notifications.map((element, index) => {
        return (
          <Alert
            key={"_" + index}
            iconMapping={{ success: <NotificationIcon /> }}
            color="warning"
            style={{ margin: "10px 10px" }}
            onClose={() => {
              let newArray = props.notifications.filter(
                item => item.uuid != element.uuid
              )
              props.setNotifications(newArray)
            }}
          >
            {element.tittle}
          </Alert>
        )
      })}
    </div>
  )
}

export const getNewNotificationUUID = (props: { uuid?: string }) => {
  let uuid = props.uuid ? props.uuid : "xxxx"

  return uuid.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

export default NotificationContainer
