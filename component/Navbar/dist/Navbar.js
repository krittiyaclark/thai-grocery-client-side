"use strict";
exports.__esModule = true;
var react_1 = require("react");
var link_1 = require("next/link");
var react_bootstrap_1 = require("react-bootstrap");
var io_1 = require("react-icons/io");
var Navbar_module_css_1 = require("./Navbar.module.css");
var Navigationbar = function (_a) {
    var className = _a.className;
    return (react_1["default"].createElement(react_bootstrap_1.Navbar, { className: className },
        react_1["default"].createElement(react_bootstrap_1.Container, null,
            react_1["default"].createElement(react_bootstrap_1.Navbar.Toggle, null),
            react_1["default"].createElement(react_bootstrap_1.Navbar.Collapse, { className: 'justify-content-end' },
                react_1["default"].createElement(react_bootstrap_1.Navbar.Text, null,
                    react_1["default"].createElement(link_1["default"], { href: '/' },
                        react_1["default"].createElement(react_bootstrap_1.Button, { className: Navbar_module_css_1["default"].btnPrimary },
                            react_1["default"].createElement(io_1.IoIosArrowBack, null),
                            "All Products")))))));
};
exports["default"] = Navigationbar;
