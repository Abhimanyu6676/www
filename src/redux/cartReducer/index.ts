import { baseAction_Props, getBaseAction, reduxConstant_e } from "../baseAction"

export const initialState: cartReducer_i = {
  cartList: [],
  count: 1,
}

interface cartListReduxAction_Props {
  cartList: cartProduct_i[]
}

interface countReduxAction_Props {
  count: number
}

type cartReducerActionReturnTypes =
  | (baseAction_Props<cartListReduxAction_Props> & {
      type: reduxConstant_e.CART
    })
  | (baseAction_Props<countReduxAction_Props> & {
      type: reduxConstant_e.COUNT
    })

const cartReducer = (state = initialState, action: cartReducerActionReturnTypes) => {
  switch (action.type) {
    case reduxConstant_e.CART:
      return { ...state, cartList: action.props.cartList }
    case reduxConstant_e.COUNT:
      return { ...state, count: action.props.count }
    default:
      return state
  }
}

export const cartReducerActions = {
  cartAction: getBaseAction<cartListReduxAction_Props>(reduxConstant_e.CART),
  countAction: getBaseAction<countReduxAction_Props>(reduxConstant_e.COUNT),
}
export default cartReducer
