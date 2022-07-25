import React, { useMemo } from "react"
import { useSpring, animated } from "react-spring"

/**
 *
 * @returns [() => JSX.Element, () => void]
 */
export const useShakeComp = () => {
  const [shakeStyles, tiggle] = useSpring(async () => ({
    to: async next => {
      next({ marginLeft: "0px}" })
    },

    config: {
      mass: 1,
      tension: 500,
      friction: 15,
    },
    from: {
      marginLeft: "-10px",
    },
    immediate: true,
    reset: true,
    reverse: true,
  }))

  const shake = () => {
    tiggle({
      marginLeft: "0px",
      config: {
        mass: 1,
        tension: 500,
        friction: 15,
      },
      from: {
        marginLeft: "-10px",
      },
      immediate: false,
      reset: true,
      reverse: true,
    })
  }

  const Comp = (props?: any) => {
    return (
      <animated.div style={{ ...shakeStyles }}>{props?.children}</animated.div>
    )
  }

  return [useMemo(() => Comp, []), shake]
}
