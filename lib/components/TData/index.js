"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("../../utils/classnames"));
var context_1 = require("../../context");
var TData = function (_a) {
    var children = _a.children, row = _a.row;
    var _b = (0, context_1.useTableContext)(), state = _b.state, actions = _b.actions;
    var className = state.className;
    var bodyDataClasses = (0, classnames_1.default)(className, 't-body__t-data');
    var handleClick = function (event) {
        event.preventDefault();
    };
    return (react_1.default.createElement("td", { onClick: handleClick, className: bodyDataClasses }, children));
};
exports.default = TData;
//# sourceMappingURL=index.js.map