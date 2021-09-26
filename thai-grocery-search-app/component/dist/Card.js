"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_bootstrap_1 = require("react-bootstrap");
function Card() {
    return (react_1["default"].createElement(Card, null,
        react_1["default"].createElement(Card.Img, { variant: 'top', src: 'holder.js/100px180' }),
        react_1["default"].createElement(Card.Body, null,
            react_1["default"].createElement(Card.Title, null, "Card Title"),
            react_1["default"].createElement(Card.Text, null, "Some quick example text to build on the card title and make up the bulk of the card's content."),
            react_1["default"].createElement(react_bootstrap_1.Button, { variant: 'primary' }, "Go somewhere"))));
}
exports["default"] = Card;
