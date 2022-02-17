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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("../../utils/classnames"));
var context_1 = require("../../context");
var TBody = function (_a) {
    var children = _a.children, dataRow = _a.dataRow;
    var _b = (0, context_1.useTableContext)(), state = _b.state, actions = _b.actions;
    var className = state.className, options = state.options;
    var onDropRow = actions.onDropRow;
    var draggable = options.draggable;
    var bodyRowClasses = (0, classnames_1.default)(className, 't-body__t-row');
    var rowId = "row-" + dataRow.rowIndex;
    function allowDrop(event) {
        event.preventDefault();
    }
    function drag(ev) {
        var stringified = JSON.stringify(dataRow);
        ev.dataTransfer.setData("dataRow", stringified);
    }
    function drop(ev) {
        var data = ev.dataTransfer.getData("dataRow");
        var parsed = JSON.parse(data);
        onDropRow({
            dragged: parsed,
            dropped: dataRow,
        });
        ev.preventDefault();
    }
    var draggableProps = {
        draggable: draggable,
        onDragStart: drag,
        onDrop: drop,
        onDragOver: allowDrop
    };
    return (react_1.default.createElement("tr", __assign({ id: rowId, className: bodyRowClasses }, draggableProps), children));
};
exports.default = TBody;
//# sourceMappingURL=index.js.map