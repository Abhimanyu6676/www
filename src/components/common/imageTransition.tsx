import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import { animated, useTransition } from "react-spring"

type Props = {
  imgArray: { node: any }[]
  index?: number
  setIndex?: React.Dispatch<React.SetStateAction<number>>
  containerStyle?: React.CSSProperties
  skipFirstTransition?: boolean
}
/**
 * ### => this components renders with an absolute child thus, => parent with fixed width & height is required for this content
 *
 * # description
 * A transitionView with useTransition implemented on the `props.imgArray`
 *
 * ### note
 * - if required to change container layout than styles need to be shared across all children. i.e `container > absolute-animated.div > GatsbyImage`
 *
 * #TODO Add style & className props option for container, absolute-animated.div, GatsbyImage
 *
 * @default width 100%, height - 100%
 *
 * @param containerStyle?:React.CSSProperties
 * @param imgArray : {node:any}[] => image array via graphql query
 * @param index : current view index
 * @param setIndex?:React.Dispatch<React.SetStateAction<number>> => to handle index updates from within
 *
 */
export const GatsbyImageTransition = ({ index = 0, ...props }: Props) => {
  const transition = useTransition(index % props.imgArray.length, {
    from: { opacity: index == 0 && props.skipFirstTransition ? 1 : 0 },
    enter: { opacity: 1 },
    leave: { opacity: 1 },
    config: { duration: 1000 },
  })

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        ...props.containerStyle,
      }}
    >
      {transition((transitionItemStyles, transitionItemIndex) => {
        return (
          <animated.div // desktop slides
            key={"_" + transitionItemIndex}
            style={{
              ...transitionItemStyles,
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
            }}
          >
            {typeof window !== "undefined" && (
              <GatsbyImage
                image={getImage(props?.imgArray[transitionItemIndex].node)}
                style={{
                  width: "100%",
                  height: "100%",
                }}
                alt=""
              />
            )}
          </animated.div>
        )
      })}
    </div>
  )
}
