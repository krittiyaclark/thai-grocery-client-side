"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var CardList_1 = require("./CardList");
var Search = function () {
    var _a = react_1.useState(''), search = _a[0], setSearch = _a[1];
    var _b = react_1.useState(true), isLoading = _b[0], setIsLoading = _b[1];
    var _c = react_1.useState(), errors = _c[0], setErrors = _c[1];
    var _d = react_1.useState({}), dataApi = _d[0], setDataApi = _d[1];
    react_1.useEffect(function () {
        var API_URL = 'https://thai-grocery-api.herokuapp.com/api/thai-grocery-product';
        setIsLoading(true);
        function getData() {
            return __awaiter(this, void 0, void 0, function () {
                var response, data, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 3, 4, 5]);
                            return [4 /*yield*/, fetch(API_URL)];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, response.json()];
                        case 2:
                            data = _a.sent();
                            console.log(data);
                            setDataApi(data);
                            setIsLoading(false);
                            return [3 /*break*/, 5];
                        case 3:
                            error_1 = _a.sent();
                            setErrors(errors);
                            return [3 /*break*/, 5];
                        case 4:
                            setIsLoading(false);
                            return [7 /*endfinally*/];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        }
        getData();
    }, []);
    // console.log(data)
    console.log(isLoading);
    console.log(dataApi);
    if (isLoading) {
        return React.createElement("p", null, "Loading...");
    }
    var handleInput = function () {
        console.log(search);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(react_bootstrap_1.InputGroup, { className: 'mb-3' },
            React.createElement(react_bootstrap_1.FormControl, { placeholder: 'Search for Thai Grocery Product', "aria-label": "Recipient's username", "aria-describedby": 'basic-addon2', onChange: function (e) { return setSearch(e.target.value); } }),
            React.createElement(react_bootstrap_1.Button, { variant: 'outline-secondary', id: 'button-addon2', onClick: function () { return handleInput(); } }, "Button")),
        React.createElement(react_bootstrap_1.Row, null,
            React.createElement(react_bootstrap_1.Col, { md: 12 },
                React.createElement("section", null,
                    React.createElement(CardList_1["default"], { dataApi: dataApi }))))));
};
exports["default"] = Search;
