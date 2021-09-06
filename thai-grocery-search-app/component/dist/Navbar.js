"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Navbar = function (_a) {
    var className = _a.className;
    return (react_1["default"].createElement("nav", { className: className + " 'w-full grid grid-cols-2'" },
        react_1["default"].createElement("li", null, "Logo"),
        react_1["default"].createElement("li", null, "Login")));
};
exports["default"] = Navbar;
