"use strict";
exports.__esModule = true;
var react_bootstrap_1 = require("react-bootstrap");
var CardList = function (_a) {
    var dataApi = _a.dataApi;
    console.log(dataApi);
    // If dataApi is undefined or null, return nothing.
    if (!dataApi)
        return null;
    return (React.createElement(react_bootstrap_1.Row, { xs: 1, md: 2, className: 'g-4' }, Object.entries(dataApi).map(function (_a) {
        var productName = _a[0], data = _a[1];
        console.log(productName, data);
        return (React.createElement(react_bootstrap_1.Col, { key: productName },
            React.createElement(react_bootstrap_1.Card, null,
                React.createElement(react_bootstrap_1.Card.Img, { variant: 'top', src: 'holder.js/100px180' }),
                React.createElement(react_bootstrap_1.Card.Body, null,
                    React.createElement(react_bootstrap_1.Card.Title, null, productName),
                    React.createElement(react_bootstrap_1.Card.Text, null, data === null || data === void 0 ? void 0 : data.info),
                    React.createElement(react_bootstrap_1.Button, { variant: 'primary' }, "Go somewhere"),
                    React.createElement("p", null, data === null || data === void 0 ? void 0 : data.brand),
                    React.createElement("p", null, data === null || data === void 0 ? void 0 : data.info)))));
    })));
};
exports["default"] = CardList;
