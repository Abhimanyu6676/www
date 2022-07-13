import AlternateEmailIcon from "@mui/icons-material/AlternateEmail"
import CallIcon from "@mui/icons-material/Call"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import React from "react"

type Props = {
  style?: React.CSSProperties
}
export const ContactUs = (props: Props) => {
  return (
    <div
      style={{
        backgroundColor: "#eee",
        padding: "50px 10vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        ...props.style,
      }}
    >
      <div // text container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Connect with us</h1>
        <p style={{ textAlign: "center", marginTop: 20 }}>
          Leave your enquiry or request. On sunny days we reply within 30 mins.
          or if it's about troubleshoot than call us right away
        </p>
        <div style={{ marginTop: 50 }}>
          <div>
            <a href="mailto:support@huelite.in?subject=I%20need%20assistance%20with%20my%20HUElite%20product.">
              <div style={{ display: "flex", alignItems: "center" }}>
                <AlternateEmailIcon fontSize="medium" />
                <p style={{ marginLeft: 10 }}>suport@huelite.in</p>
              </div>
            </a>
          </div>

          <div
            style={{
              marginTop: 20,
            }}
          >
            <a href="tel:+919871532573">
              <div style={{ display: "flex", alignItems: "center" }}>
                <CallIcon fontSize="medium" />
                <p style={{ marginLeft: 10 }}>+91 9871532573</p>
              </div>
            </a>
          </div>

          <div
            style={{
              marginTop: 20,
            }}
          >
            <a href="https://wa.me/+919871532573?text=Hi,%20I%20need%20support">
              <div style={{ display: "flex", alignItems: "center" }}>
                <WhatsAppIcon fontSize="medium" />
                <p style={{ marginLeft: 10 }}>Tap to connect on whatsapp</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
