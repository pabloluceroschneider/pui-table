"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var context_1 = require("../../context");
var THeader = function (_a) {
    var children = _a.children, header = _a.header;
    var _b = (0, context_1.useTableContext)(), _c = _b.state, className = _c.className, orderByColumn = _c.orderByColumn, orderBy = _b.actions.orderBy;
    var _d = (0, react_1.useState)(false), isDesc = _d[0], setIsDesc = _d[1];
    var headerClasses = (0, classnames_1.default)(className, 't-header');
    var headercontainerClasses = (0, classnames_1.default)(className, 't-header__container');
    var headerTitleClasses = (0, classnames_1.default)(className, 't-header__title');
    var headerOrderByClasses = (0, classnames_1.default)(className, 't-header__order-by', {
        't-header__order-by--active': orderByColumn === header.accesor,
    });
    var handleOrder = function () {
        setIsDesc(function (prev) { return !prev; });
        orderBy({ accesor: header.accesor, asc: isDesc });
    };
    return (react_1.default.createElement("th", { onClick: handleOrder, className: headerClasses },
        react_1.default.createElement("div", { className: headercontainerClasses },
            react_1.default.createElement("div", { className: headerTitleClasses }, children),
            react_1.default.createElement("div", { className: headerOrderByClasses }, isDesc ? '↓' : '↑'))));
};
exports.default = THeader;
//# sourceMappingURL=index.js.map