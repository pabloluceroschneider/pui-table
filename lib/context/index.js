"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.useTableContext = exports.TableContextProvider = void 0;
var react_1 = __importStar(require("react"));
var utils_1 = require("./utils");
var reducer_1 = __importDefault(require("./reducer"));
var defaultFn = function (e) { return console.error(e); };
var defaultState = {
    state: {
        headers: [],
        data: [],
        className: 'pui-table',
        options: {
            draggable: false
        },
        onOrderByColumn: '',
    },
    actions: {
        onClickRow: defaultFn,
        onDropRow: defaultFn,
        onOrderBy: defaultFn,
    },
};
var TableContext = (0, react_1.createContext)(defaultState);
var useTableReducer = function (initialProps) {
    var _a, _b, _c;
    var _d = (0, react_1.useReducer)(reducer_1.default, __assign(__assign(__assign({}, defaultState.state), initialProps), { data: initialProps.data.map(utils_1.addRowIndex) })), state = _d[0], dispatch = _d[1];
    var defaultActions = {
        onClickRow: function () { return dispatch({ type: null }); },
        onDropRow: function (param) { return dispatch({ type: 'ROW_DND', payload: param }); },
        onOrderBy: function (param) { return dispatch({ type: 'ORDER_BY', payload: param }); },
    };
    var actions = {
        onClickRow: ((_a = initialProps.actions) === null || _a === void 0 ? void 0 : _a.onClickRow) || defaultActions.onClickRow,
        onDropRow: ((_b = initialProps.actions) === null || _b === void 0 ? void 0 : _b.onDropRow) || defaultActions.onDropRow,
        onOrderBy: ((_c = initialProps.actions) === null || _c === void 0 ? void 0 : _c.onOrderBy) || defaultActions.onOrderBy,
    };
    return { state: state, actions: actions };
};
var TableContextProvider = function (_a) {
    var children = _a.children, value = _a.value;
    var context = useTableReducer(value);
    return react_1.default.createElement(TableContext.Provider, { value: __assign({}, context) }, children);
};
exports.TableContextProvider = TableContextProvider;
var useTableContext = function () {
    var context = (0, react_1.useContext)(TableContext);
    return context;
};
exports.useTableContext = useTableContext;
//# sourceMappingURL=index.js.map