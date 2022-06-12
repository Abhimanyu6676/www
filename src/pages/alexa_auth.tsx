import React from "react"
import AlexaAuthPage from "../screens/alexaAuth"

/**
 * @description - this page is responsible for alexa account linking. Verifying the account in HUElite database and responding accordinglly
 *
 * @important -  link of this page cannot change other that `https://www.huelite.in/alexa_auth`. as it is directly linked to the alexa skill and changing it will break the Alexa authintication flow
 *
 */
const AlexaAuth = () => {
  return <AlexaAuthPage />
}

export default AlexaAuth
