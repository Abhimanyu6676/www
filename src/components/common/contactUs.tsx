import React from "react"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid"
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail"
import CallIcon from "@mui/icons-material/Call"

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
        <p style={{ textAlign: "center" }}>
          Leave your enquiry or request. On sunny days we reply within 30 mins.
          or if it's about troubleshoot than call us right away
        </p>
        <div style={{ marginTop: 50 }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <AlternateEmailIcon fontSize="medium" />
            <p style={{ marginLeft: 10 }}>suport@huelite.in</p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <CallIcon fontSize="medium" />
            <p style={{ marginLeft: 10 }}>+91 9582463222</p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <WhatsAppIcon fontSize="medium" />
            <p style={{ marginLeft: 10 }}>Tap to connect on whatsapp</p>
          </div>
        </div>
      </div>
    </div>
  )
}
