"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var Footer_1 = require("../Footer");
var Layout_module_css_1 = require("./Layout.module.css");
var Layout = function (_a) {
    var children = _a.children;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("section", { className: Layout_module_css_1["default"].background + " " + Layout_module_css_1["default"].header },
            react_1["default"].createElement(react_bootstrap_1.Container, null,
                react_1["default"].createElement(react_bootstrap_1.Row, null,
                    react_1["default"].createElement(react_bootstrap_1.Col, { md: 12 },
                        react_1["default"].createElement("header", { className: Layout_module_css_1["default"].header + " align-middle d-flex justify-content-center align-items-center" },
                            react_1["default"].createElement("h1", { className: Layout_module_css_1["default"].title + " text-lg" }, "Thai Grocery Search App")))))),
        react_1["default"].createElement("main", null, children),
        react_1["default"].createElement(Footer_1["default"], { className: 'container' })));
};
exports["default"] = Layout;
