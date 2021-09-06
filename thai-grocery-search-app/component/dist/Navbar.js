"use strict";
exports.__esModule = true;
var react_1 = require("react");
var link_1 = require("next/link");
var react_bootstrap_1 = require("react-bootstrap");
var Navigationbar = function (_a) {
    var className = _a.className;
    return (react_1["default"].createElement(react_bootstrap_1.Navbar, { className: className },
        react_1["default"].createElement(react_bootstrap_1.Container, null,
            react_1["default"].createElement(react_bootstrap_1.Navbar.Brand, { href: '#home' }, "LOGO"),
            react_1["default"].createElement(react_bootstrap_1.Navbar.Toggle, null),
            react_1["default"].createElement(react_bootstrap_1.Navbar.Collapse, { className: 'justify-content-end' },
                react_1["default"].createElement(react_bootstrap_1.Navbar.Text, null,
                    react_1["default"].createElement(link_1["default"], { href: '#login' }, "Login"))))));
};
exports["default"] = Navigationbar;
// <nav className={`${className} 'w-full grid grid-cols-2'`}>
// 	<li>Logo</li>
// 	<li>Login</li>
// </nav>
