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
    var draggable = options.draggable;
    var onClickRow = actions.onClickRow, onDropRow = actions.onDropRow;
    var bodyRowClasses = (0, classnames_1.default)(className, 't-body__t-row');
    var rowId = "row-" + dataRow.rowIndex;
    var handleClick = function (event) {
        event.preventDefault();
        onClickRow(dataRow);
    };
    function onDragOver(event) {
        event.preventDefault();
    }
    function onDragStart(event) {
        var stringified = JSON.stringify(dataRow);
        event.dataTransfer.setData('pui-table:draggedRow', stringified);
    }
    function onDrop(event) {
        var dataTransfer = event.dataTransfer.getData('pui-table:draggedRow');
        var dragged = JSON.parse(dataTransfer);
        var dropped = dataRow;
        onDropRow({ dragged: dragged, dropped: dropped });
        event.preventDefault();
    }
    var draggableProps = {
        draggable: draggable,
        onDragStart: onDragStart,
        onDrop: onDrop,
        onDragOver: onDragOver,
    };
    return (react_1.default.createElement("tr", __assign({ id: rowId, onClick: handleClick, className: bodyRowClasses }, draggableProps), children));
};
exports.default = TBody;
//# sourceMappingURL=index.js.map