"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var context_1 = require("../../context");
var TH_1 = __importDefault(require("../TH"));
var THead = function () {
    var _a = (0, context_1.useTableContext)().state, headers = _a.headers, className = _a.className;
    var headClasses = (0, classnames_1.default)(className, 't-head');
    return (react_1.default.createElement("thead", { className: headClasses },
        react_1.default.createElement("tr", null, headers.map(function (header) {
            return (react_1.default.createElement(TH_1.default, { key: header.accesor, header: header }, header.Header));
        }))));
};
exports.default = THead;
//# sourceMappingURL=index.js.map