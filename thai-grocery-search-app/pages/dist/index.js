"use strict";
exports.__esModule = true;
var head_1 = require("next/head");
var Layout_1 = require("../component/Layout");
var Home_module_css_1 = require("../styles/Home.module.css");
var Home = function () {
    return (React.createElement("div", { className: Home_module_css_1["default"].container },
        React.createElement(head_1["default"], null,
            React.createElement("title", null, "Thai Grocery Search App"),
            React.createElement("meta", { name: 'description', content: 'Thai Grocery Search App is a search application of Thai grocery with Thai grocery product with brand, info, ingredients, weight, and price.' }),
            React.createElement("link", { rel: 'icon', href: '/favicon.ico' })),
        React.createElement(Layout_1["default"], null,
            React.createElement("div", { className: 'relative bg-blue-500' }),
            React.createElement("header", { className: 'w-full grid grid-flow-row align-middle text-center' },
                React.createElement("h1", { className: 'text-3xl' }, "Thai Grocery Search App")),
            React.createElement("section", { className: 'w-6/12 grid grid-flow-row align-middle text-center' },
                React.createElement("input", { className: 'w-max:500 border-transparent' })))));
};
exports["default"] = Home;
