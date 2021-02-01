"use strict";
exports.__esModule = true;
exports.index = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
exports.index = function (props) {
    var Component = function (_a) {
        var children = _a.children;
        return (react_1["default"].createElement(react_native_1.View, null,
            react_1["default"].createElement(react_native_1.Text, null, "text"),
            children));
    };
    return [Component];
};
