"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("./utils/classnames"));
var context_1 = require("./context");
var THead_1 = __importDefault(require("./components/THead"));
var TBody_1 = __importDefault(require("./components/TBody"));
var Table = function (props) {
    var className = props.className;
    var tableClasses = (0, classnames_1.default)(className, 't-table');
    return (react_1.default.createElement("table", { className: tableClasses, "data-testid": "t-table" },
        react_1.default.createElement(context_1.TableContextProvider, { value: props },
            react_1.default.createElement(THead_1.default, null),
            react_1.default.createElement(TBody_1.default, null))));
};
Table.defaultProps = {
    className: 'pui-table'
};
exports.default = Table;
//# sourceMappingURL=index.js.map