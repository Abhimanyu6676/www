import { baseAction_Props, getBaseAction, reduxConstant_e } from "../baseAction"
import { product_i, varient_i } from "../../products"

const initialState: notificationReducer_i = {
  notifications: [],
}

interface notificationsListReduxAction_Props {
  notifications: notification_i[]
}

interface newNotificationActionProps {
  newNotification: notification_i
}

type notificationReducerActionReturnTypes =
  | (baseAction_Props<notificationsListReduxAction_Props> & {
      type: reduxConstant_e.NOTIFICATIONLIST
    })
  | (baseAction_Props<newNotificationActionProps> & {
      type: reduxConstant_e.NEW_NOTIFICATION
    })

const notificationReducer = (state = initialState, action: notificationReducerActionReturnTypes) => {
  switch (action.type) {
    case reduxConstant_e.NOTIFICATIONLIST:
      return { ...state, notifications: action.props.notifications }
    case reduxConstant_e.NEW_NOTIFICATION:
      console.log("new notification came to redix store")
      let newState = {
        ...state,
        notifications: [
          ...state.notifications,
          {
            ...action.props.newNotification,
            id: uuid({ uuid: "xxxx-xx" }),
          },
        ],
      }
      console.log(newState)
      return newState
    default:
      return state
  }
}

export const notificationReducerActions = {
  notificationListAction: getBaseAction<notificationsListReduxAction_Props>(reduxConstant_e.NOTIFICATIONLIST),
  newNotificationAction: getBaseAction<newNotificationActionProps>(reduxConstant_e.NEW_NOTIFICATION),
}
export default notificationReducer

const uuid = (props: { uuid?: string }) => {
  let uuid = props.uuid ? props.uuid : "xxxx"

  return uuid.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}
