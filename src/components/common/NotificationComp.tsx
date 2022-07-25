import { Alert, AlertTitle, AlertColor } from "@mui/material"
import React, { useEffect } from "react"
import CloseIcon from "@mui/icons-material/Close"

export interface notifications_i {
  id: number
  heading: string
  subHeading?: string
  removeAuto?: boolean
  severity?: AlertColor
}

type Props = {
  notifications: notifications_i[]
  removeNotification?: (removeNotificationProps: { id: number }) => void
}
/**
 * @description returns an absolute notification container
 *
 * @note this function requires a relative parent.
 *
 */
export const NotificationComp = ({
  notifications,
  removeNotification,
}: Props) => {
  useEffect(() => {
    const itrl = setInterval(() => {
      notifications.forEach(it => {
        //console.log("item id ", it.id, " , diff - ", Date.now() - it.id)
        if (Date.now() - it.id >= 5000) {
          it.removeAuto &&
            removeNotification &&
            removeNotification({ id: it.id })
        }
      })
    }, 1000)

    return () => {
      clearInterval(itrl)
    }
  }, [notifications])

  return (
    <div // notifications container
      style={{
        position: "absolute",
        width: "100%",
        maxWidth: 400,
        bottom: 0,
        right: 0,
        padding: "0vw 5vw 10px 5vw",
      }}
    >
      {notifications.map((notificationItem, notificationItemIndex) => {
        return (
          <NotificationItem
            key={"__" + notificationItemIndex}
            notification={notificationItem}
            removeNotification={removeNotification}
          />
        )
      })}
    </div>
  )
}

const NotificationItem = ({
  notification,
  removeNotification,
}: {
  notification: notifications_i
  removeNotification?: (removeNotificationProps: { id: number }) => void
}) => {
  return (
    <Alert
      style={{ marginBottom: 20 }}
      severity={notification.severity ? notification.severity : "info"}
      action={
        <div>
          <button
            onClick={() => {
              removeNotification && removeNotification({ id: notification.id })
            }}
          >
            <CloseIcon fontSize="small" />
          </button>
        </div>
      }
    >
      <AlertTitle>{notification.heading}</AlertTitle>
    </Alert>
  )
}
