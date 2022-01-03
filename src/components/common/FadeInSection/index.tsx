import React from "react"

export const FadeInSection = (props: { style?: React.CSSProperties; children: any }) => {
  const [isVisible, setVisible] = React.useState(false)
  const domRef = React.useRef()
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting))
    })
    observer.observe(domRef.current)
    return () => {
      observer.disconnect()
    }
  }, [])
  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
      style={
        {
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "none" : "translateY(30px)",
          visibility: isVisible ? "visible" : "hidden",
          willChange: "opacity, transform, visibility",
          transition: "opacity 1200ms ease-out, transform 600ms ease-out, visibility 1200ms ease-out",
        } && props.style
      }
    >
      {props.children}
    </div>
  )
}
