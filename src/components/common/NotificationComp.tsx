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
  containerStyles?: React.CSSProperties
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
  containerStyles,
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
        top: 0,
        left: 0,
        width: "100%",
        padding: "20px 5vw",
        zIndex: 10,
        ...containerStyles,
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
