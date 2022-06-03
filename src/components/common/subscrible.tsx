import { maxWidth } from "@mui/system"
import React from "react"
import Button from "../Button"

type Props = {
  style?: React.CSSProperties
}

export const Subscrible = (props: Props) => {
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
      >
        <h1 style={{ textAlign: "center" }}>Sign up & save</h1>
        <p style={{ textAlign: "center" }}>
          Sign up to our mailing list to receive setup tips, product launches
          and exclusiv offers
        </p>
      </div>
      <div // subscribe feild container
        style={{
          display: "flex",
          width: "80vw",
          flexDirection: "row",
          justifyContent: "center",
          maxWidth: 500,
          marginTop: 30,
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            height: 50,
            flex: 1,
            display: "flex",
          }}
        >
          <input
            style={{
              height: 50,
              flex: 1,
              borderWidth: 0,
            }}
          />
        </div>
        <Button
          onClick={() => {
            console.log("now subscribing")
            //TODO add email to subscribe list
          }}
          style={{
            backgroundColor: "black",
            height: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 0,
          }}
        >
          <h3
            style={{
              color: "white",
              textAlign: "center",
              margin: "0px 10px",
            }}
          >
            SUBSCRIBE
          </h3>
        </Button>
      </div>
    </div>
  )
}
