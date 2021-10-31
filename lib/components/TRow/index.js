"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var context_1 = require("../../context");
var TBody = function (_a) {
    var children = _a.children;
    var _b = (0, context_1.useTableContext)().state, className = _b.className, draggable = _b.draggable;
    var bodyRowClasses = (0, classnames_1.default)(className, 't-body__t-row');
    return (react_1.default.createElement("tr", { className: bodyRowClasses, draggable: draggable }, children));
};
exports.default = TBody;
//# sourceMappingURL=index.js.map