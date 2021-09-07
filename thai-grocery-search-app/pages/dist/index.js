"use strict";
exports.__esModule = true;
var head_1 = require("next/head");
var Layout_1 = require("../component/Layout");
var Search_1 = require("../component/Search");
var Home_module_css_1 = require("../styles/Home.module.css");
var Home = function () {
    return (React.createElement("div", { className: Home_module_css_1["default"].container },
        React.createElement(head_1["default"], null,
            React.createElement("title", null, "Thai Grocery Search App"),
            React.createElement("meta", { name: 'description', content: 'Thai Grocery Search App is a search application of Thai grocery with Thai grocery product with brand, info, ingredients, weight, and price.' }),
            React.createElement("link", { rel: 'icon', href: '/favicon.ico' })),
        React.createElement(Layout_1["default"], null,
            React.createElement("header", { className: 'align-middle text-center' },
                React.createElement("h1", { className: 'text-lg' }, "Thai Grocery Search App")),
            React.createElement("section", { className: 'py-5' },
                React.createElement(Search_1["default"], null)))));
};
exports["default"] = Home;
