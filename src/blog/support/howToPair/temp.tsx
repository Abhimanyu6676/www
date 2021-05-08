import { Link } from "gatsby"
import React from "react"



export const NoteBox = ({ compId, ...props }: { compId?: string, children?: any }) => {


    return (
        <div
            id={compId}
            style={{
                backgroundColor: "#E5E7E9",
                width: "100%",
                paddingLeft: 50,
                paddingRight: 10,
                borderLeftWidth: 4,
                borderLeftColor: "#909497",
                borderLeftStyle: "solid",
                color: "#666666",
                paddingTop: 10,
                paddingBottom: 10,
                borderRadius: 5
            }}>
            <h3>Troubleshoot:</h3>
            <h4 style={{ marginTop: 10, marginBottom: 10 }}>FAQ: Huelite device doesn't appear in the avaliable Wi-Fi network list?</h4>
            <ul>
                <li>
                    <p>Make sure the Huelite device is installed within your home network range. (While pairing your smartphone is required to be within 5 meter radius of huelite device providing no direct obstruction)</p>
                </li>
                <li>
                    <p>If the device Wi-Fi doesnt appear in the Wi-Fi settings kindly factory reset the device. Check <Link to="/faq/howtoreset">here</Link></p>
                </li>
            </ul>
        </div>
    )
}