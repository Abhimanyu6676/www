const React = require("react")

// Wraps every page in a component
exports.wrapRootElement = ({ element }) => {
    return <div>{element}</div>
}