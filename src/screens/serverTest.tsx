import axios from "axios"
import { useQueryParam, StringParam } from "use-query-params"
import React, { useEffect, useState } from "react"
import { FullScreen } from "../components/layouts/FullScreen"
import appColors from "../styles/appColors"
//@ts-ignore
import * as mqtt from "react-paho-mqtt"

type Props = {}
export default (props: Props) => {
  const [environment, setEnvironment] = useQueryParam(
    "environment",
    StringParam
  )
  const serverAdd = `https://huelite.in/${
    environment?.length ? environment : "development"
  }`
  const [checkBusy, setCheckBusy] = useState(false)
  const [customServerTest, setCustomServerTest] = useState<string>("undefined")
  const [mailServerTest, setMailServerTest] = useState<string>("undefined")
  const [alexaServerTest, setAlexaServerTest] = useState<string>("undefined")
  const [graphqlServerTest, setGraphqlServerTest] =
    useState<string>("undefined")

  useEffect(() => {
    if (typeof window != "undefined") {
    }
    return () => {}
  }, [])

  const checkCustomServer = async () => {
    //console.log("running custom server test")
    await axios
      .get<{ versionName: string; string: string; environment: string }>(
        `${serverAdd}/test`,
        {
          timeout: 5000,
        }
      )
      .then(res => {
        if (res.data && res.data.versionName) {
          //console.log("custom server response :: ", res.data.versionName)
          setCustomServerTest(
            `Test passed. \nversionName : ${res.data.versionName}`
          )
        } else {
          //console.log("no data present in response ", res)
          setCustomServerTest("failed")
        }
      })
      .catch(err => {
        //console.log("custom server test failed. error :: ", err)
        setCustomServerTest("failed")
      })
  }

  const checkGraphqlServer = async () => {
    //console.log("checking graphql server")
    await axios
      .post(
        `${serverAdd}/admin/api`,
        {
          query: `query{
          allUsers{
            id
            email
            userName
          }
        }`,
        },
        { timeout: 10000 }
      )
      .then(res => {
        console.log("graphql server response :: ", res)
        if (res.data.data.allUsers) {
          setGraphqlServerTest(
            `Test passed. total no. of users :: ${res.data.data.allUsers?.length}`
          )
        } else {
          setGraphqlServerTest("failed")
        }
      })
      .catch(err => {
        console.log("graphql server test failed error :: ", err)
        setGraphqlServerTest("failed")
      })
  }

  const checkMailServer = async () => {
    console.log("now testing mail server")
    await axios
      .post(
        `${serverAdd}/test-mail`,
        {
          email: "iamlive24@gmail.com",
        },
        { timeout: 5000 }
      )
      .then(res => {
        console.log("graphql server response :: ", res)
        setMailServerTest("Test passed. mail sent.")
      })
      .catch(err => {
        console.log("graphql server test failed error :: ", err)
        setMailServerTest("failed")
      })
  }

  const checkAlexaServer = async () => {
    console.log("now testing alexa & mqtt")
    await axios
      .post(
        `${serverAdd}/alexa/intent`,
        {
          directive: {
            header: {
              messageId: "2b94003d-8390-41ad-b530-0f394ec261a2",
              namespace: "Alexa.PowerController",
              name: "TurnOn",
              payloadVersion: "3",
              correlationToken:
                "SUdTVEs6AAE6AAg6eyJpZCI6IjRiYzQ1ZmNjLTAzYmQtNGQ1NS1hMGI1LTg0MjYzNjc0ZGYxMSIsInVyaSI6Imh0dHBzOi8vZC1hY3JzLWV1LXAtNWMyLWQzZmJiYTg3LmV1LXdlc3QtMS5hbWF6b24uY29tOjk0NDQifQ==",
            },
            endpoint: {
              scope: {
                type: "BearerToken",
                token:
                  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYWEyMDI0MTRjMWIxMjI1ZDllZjY1MSIsImlhdCI6MTY1NzY4ODg4OH0.yd4Y4B82u3wt5yoypstfUIr-d2Aw6Z6rHKZnwM9e7yk",
              },
              endpointId: "58:BF:25:D9:95:AF",
              cookie: {},
            },
            payload: {},
          },
        },
        { timeout: 5000 }
      )
      .then(res => {
        console.log("alexa server response :: ", res)
        setAlexaServerTest("Test passed. alexa command sent over mqtt")
      })
      .catch(err => {
        console.log("graphql server test failed error :: ", err)
        setAlexaServerTest("failed")
      })
  }

  const check = async () => {
    if (checkBusy) {
      console.log("check already running")
    } else {
      setCheckBusy(true)
      console.log("check function")
      await checkCustomServer()
      await checkGraphqlServer()
      await checkMailServer()
      await checkAlexaServer()
      setCheckBusy(false)
    }
  }

  return (
    <FullScreen
      style={{
        backgroundColor: "#fff",
      }}
    >
      <div style={{ margin: "100px 10%" }}>
        <div>
          <h2 style={{ textAlign: "center", margin: "20px 0px" }}>
            server-test
          </h2>
        </div>
        <Block heading={"Custom app server test"} result={customServerTest} />
        <Block heading={"graphql server test"} result={graphqlServerTest} />
        <Block heading={"mail server test"} result={mailServerTest} />
        <Block heading={"Alexa server test"} result={alexaServerTest} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          style={{ backgroundColor: appColors.success_1, padding: "10px 30px" }}
          onClick={check}
        >
          <h3>{checkBusy ? "Test Running" : "Run Test"}</h3>
        </button>
      </div>
      <LoadTest serverAdd={serverAdd} testCount={20} />
    </FullScreen>
  )
}

const Block = (props: {
  heading?: string | number
  result?: string | number | boolean
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        border: "solid 1px #000000",
      }}
    >
      <div
        style={{
          flex: 1,
          backgroundColor: "#ff00ff11",
          minHeight: 40,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "5px 30px",
          borderRight: "solid 1px #000000",
        }}
      >
        <h3>{props.heading}</h3>
      </div>
      <div
        style={{
          flex: 1,
          backgroundColor: "#00ffff22",
          minHeight: 40,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>
          {props.result == "undefined"
            ? "unchecked"
            : props.result == "failed"
            ? "Test failed"
            : props.result}
        </p>
      </div>
    </div>
  )
}

interface loadTest_props {
  serverAdd: string
  testCount?: number
}
const LoadTest = ({ serverAdd, testCount = 10 }: loadTest_props) => {
  return (
    <div
      style={{
        margin: "0px 10%",
        marginTop: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        style={{
          padding: "10px 30px",
          backgroundColor: appColors.primaryHighlight,
        }}
        onClick={async () => {
          const arr: {
            requestTime?: number
            responseTime?: number
            status: "fail" | "pass" | "undefined"
          }[] = []

          for (let index = 0; index < testCount; index++) {
            arr.push({ status: "undefined" })
          }
          console.log(" now sending ", testCount, " requests async")
          await Promise.all(
            arr.map(async (item, index) => {
              console.log("this is request - ", index + 1)
              arr[index].requestTime = Date.now()
              await axios
                .post(
                  `${serverAdd}/admin/api`,
                  {
                    query: `query{
                      allUsers(where:{email:"iamlive24@gmail.com"}){
                        id
                        userName
                        email
                      }
                    }`,
                  },
                  { timeout: 20000 }
                )
                .then(res => {
                  console.log(
                    `graphql server response for request :: ${index} => `,
                    res
                  )
                  arr[index].responseTime = Date.now()
                  arr[index].status = "pass"
                })
                .catch(err => {
                  console.log(
                    `graphql server test failed error for request :: ${index} => `,
                    err
                  )
                  arr[index].status = "fail"
                })
            })
          )
          console.log("--------------------------------------------")
          console.log("--------------------------------------------")
          console.log("--------------------------------------------")
          console.log("--------------------------------------------")
          console.log("all requests completed")
        }}
      >
        <h3 style={{ color: "#ffffff" }}>loadtest</h3>
      </button>
    </div>
  )
}
