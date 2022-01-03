import React, { useEffect } from "react"
import { View } from "react-native"
import { useSelector, useDispatch } from "react-redux"
import { storeActions } from "../../../redux"

export default (props: {}) => {
  const notifications = useSelector<storeRootState, notification_i[]>(state => state.notificationReducer.notifications)
  const dispatch = useDispatch()

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        width: "100%",
        //backgroundColor: "red",
        zIndex: 10,
      }}
    >
      {notifications.map((notification, index) => {
        return (
          <NotificationCard
            notifications={notifications}
            notification={notification}
            index={index}
            remove={id => {
              let newArray = notifications.filter(item => item.id != id)
              dispatch(
                storeActions.notificationReducerActions.notificationListAction({
                  notifications: newArray.filter(item => item != undefined),
                })
              )
            }}
          />
        )
      })}
    </div>
  )
}

const NotificationCard = (props: {
  notification: notification_i
  notifications: notification_i[]
  index: number
  remove: (id: string) => void
}) => {
  const backgroundColor =
    props.notification.type == "ALERT"
      ? "#ec7063"
      : props.notification.type == "SUCCESS"
      ? "#2ecc71"
      : props.notification.type == "WARNING"
      ? "#f5b041"
      : "#aed6f1"

  useEffect(() => {
    return () => {}
  }, [])

  return (
    <div
      style={{
        top: props.index ? (props.index + 1) * 80 : 80,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 10,
        paddingRight: 10,
        overflow: "hidden",
        borderRadius: 5,
        backgroundColor,
        minHeight: 50,
        margin: 10,
        marginBottom: 0,
        //animationName: "@keyframes notificationCardAnimation { from { opacity: 0; } to { opacity: 1; } }",
        //animationDuration: "0.3s",
      }}
      key={"" + props.index}
    >
      <h5 style={{ color: "white" }}>{props.notification.title}</h5>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "100%",
          alignItems: "center",
        }}
      >
        <div style={{ height: "100%", width: 5, backgroundColor: "white" }}></div>
        <div
          style={{
            marginLeft: 10,
            color: "white",
          }}
          onClick={() => {
            props.remove(props.notification.id)
          }}
        >
          close
        </div>
      </div>
    </div>
  )
}

const uuid = (props: { uuid?: string }) => {
  let uuid = props.uuid ? props.uuid : "xxxx"

  return uuid.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}
