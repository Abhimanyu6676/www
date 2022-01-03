import React from "react"
import { Provider } from "react-redux"
import store from "."

//@ts-ignore
export default ({ element }) => <Provider store={store}>{element}</Provider>
