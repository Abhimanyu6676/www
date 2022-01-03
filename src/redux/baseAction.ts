export enum reduxConstant_e {
  CART = "ACT_1",
  COUNT = "ACT_2",
  NOTIFICATIONLIST = "ACT_3",
  NEW_NOTIFICATION = "ACT_4",
}

export interface baseAction_Props<R> {
  props: R
}
type getBaseAction_t<R> = (props: R) => baseAction_Props<R> & { type: reduxConstant_e }

export const getBaseAction: <R>(type: reduxConstant_e) => getBaseAction_t<R> = type => {
  return props => {
    return {
      type,
      props,
    } as const
  }
}
