import { combineReducers } from "redux"
import cartReducer, { cartReducerActions } from "./cartReducer"
import notificationReducer, { notificationReducerActions } from "./notificationReducer"
import { createStore } from "redux"

export default createStore(combineReducers({ cartReducer, notificationReducer }))

export const storeActions = { cartReducerActions, notificationReducerActions }
