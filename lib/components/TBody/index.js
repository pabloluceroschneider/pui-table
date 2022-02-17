"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("../../utils/classnames"));
var context_1 = require("../../context");
var TRow_1 = __importDefault(require("../TRow"));
var TData_1 = __importDefault(require("../TData"));
var TBody = function () {
    var state = (0, context_1.useTableContext)().state;
    var headers = state.headers, data = state.data, className = state.className;
    var bodyClasses = (0, classnames_1.default)(className, 't-body');
    return (react_1.default.createElement("tbody", { className: bodyClasses }, data.map(function (row) { return (react_1.default.createElement(TRow_1.default, { key: row.rowIndex, dataRow: row }, headers.map(function (header) {
        return (react_1.default.createElement(TData_1.default, { key: header.accesor, row: row }, row["" + header.accesor]));
    }))); })));
};
exports.default = TBody;
//# sourceMappingURL=index.js.map