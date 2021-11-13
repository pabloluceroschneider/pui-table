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
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var reducer = function (state, action) {
    var type = action.type, payload = action.payload;
    var actionsStrategy = {
        LOGGER: function () {
            return __assign(__assign({}, state), { log: payload });
        },
        ORDER_BY: function () {
            var data = state.data;
            var accesor = payload.accesor, asc = payload.asc;
            var orderedByAttr = (0, utils_1.sortByAttr)({ data: data, attr: accesor, asc: asc });
            orderedByAttr = orderedByAttr.map(utils_1.addRowIndex);
            return __assign(__assign({}, state), { data: orderedByAttr, orderByColumn: accesor });
        },
        ROW_DND: function () {
            var data = state.data;
            var dragged = payload.dragged, dropped = payload.dropped;
            var draggedItem = __assign(__assign({}, dragged), { rowIndex: dropped.rowIndex });
            var droppedItem = __assign(__assign({}, dropped), { rowIndex: dragged.rowIndex });
            var newData = data;
            newData.splice(dragged.rowIndex, 1, droppedItem);
            newData.splice(dropped.rowIndex, 1, draggedItem);
            newData = newData.map(utils_1.addRowIndex);
            return __assign(__assign({}, state), { data: newData, orderByColumn: '' });
        },
    };
    return actionsStrategy[type]() || state;
};
exports.default = reducer;
//# sourceMappingURL=reducer.js.map