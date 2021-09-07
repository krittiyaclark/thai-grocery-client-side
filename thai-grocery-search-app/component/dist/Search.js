"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var Search = function () {
    var _a = react_1.useState(''), brandInput = _a[0], setBrandInput = _a[1];
    var handleInput = function () {
        console.log(brandInput);
    };
    return (react_1["default"].createElement(react_bootstrap_1.InputGroup, { className: 'mb-3' },
        react_1["default"].createElement(react_bootstrap_1.FormControl, { placeholder: 'Search for Thai Grocery Brands', "aria-label": "Recipient's username", "aria-describedby": 'basic-addon2', onChange: function (e) { return setBrandInput(e.target.value); } }),
        react_1["default"].createElement(react_bootstrap_1.Button, { variant: 'outline-secondary', id: 'button-addon2', onClick: function () { return handleInput(); } }, "Button")));
};
exports["default"] = Search;
