const getUuid = ({ length }) => {
  let uuidString = ""
  if (length && length >= 4) {
    for (let index = 1; index <= length; index++) {
      uuidString += "x"
      if (index % 4 == 0 && length > index) uuidString += "-"
    }
  } else uuidString = "xxxx-xx"
  return uuidString.replace(/[xy]/g, char => {
    var r = (Math.random() * 16) | 0,
      v = char == "x" ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

console.log("-----------------: " + getUuid({ length: 6 }))
