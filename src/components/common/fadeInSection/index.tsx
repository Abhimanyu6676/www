import React, { useEffect, useRef, useState } from "react"
import * as styles from "./index.module.css"

export const FadeInSection = (props: {
  style?: React.CSSProperties
  children: any
}) => {
  const [isVisible, setVisible] = useState(false)
  const domRef = useRef()
  useEffect(() => {
    const observer = new IntersectionObserver((entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.fadeInSectionIsVisible)
          observer.unobserve(entry.target)
          setVisible(entry.isIntersecting)
        }
      })
    })
    observer.observe(domRef.current)
    return () => {
      observer.disconnect()
    }
  }, [])
  return (
    <div
      className={styles.fadeInSection}
      ref={domRef}
      style={{} && props.style}
    >
      {props.children}
    </div>
  )
}

export const FadeInSectionCSS = (props: {
  style?: React.CSSProperties
  children?: any
}) => {
  return (
    <div className={styles.test} style={{} && props.style}>
      {props.children}
    </div>
  )
}
