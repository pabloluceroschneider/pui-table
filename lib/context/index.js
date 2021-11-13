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
        orderByColumn: '',
    },
    actions: {
        log: defaultFn,
        orderBy: defaultFn,
        onDropRow: defaultFn,
    },
};
var TableContext = (0, react_1.createContext)(defaultState);
var useTableReducer = function (initialProps) {
    var _a = (0, react_1.useReducer)(reducer_1.default, __assign(__assign(__assign({}, defaultState.state), initialProps), { data: initialProps.data.map(utils_1.addRowIndex) })), state = _a[0], dispatch = _a[1];
    var actions = {
        log: function (param) { return dispatch({ type: 'LOGGER', payload: param }); },
        orderBy: function (param) { return dispatch({ type: 'ORDER_BY', payload: param }); },
        onDropRow: function (param) { return dispatch({ type: 'ROW_DND', payload: param }); },
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