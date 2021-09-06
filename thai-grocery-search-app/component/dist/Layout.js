"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Footer_1 = require("./Footer");
var Navbar_1 = require("./Navbar");
var Layout = function (_a) {
    var children = _a.children;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(Navbar_1["default"], { className: 'container' }),
        react_1["default"].createElement("main", null, children),
        react_1["default"].createElement(Footer_1["default"], { className: 'container' })));
};
exports["default"] = Layout;
