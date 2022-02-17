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
            console.log(payload);
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
            var newData = [];
            for (var index = 0; index < data.length; index++) {
                if (index === dropped.rowIndex) {
                    newData.push(dragged);
                }
                if (index === dragged.rowIndex)
                    continue;
                newData.push(data[index]);
            }
            newData = newData.map(function (t, index) { return (__assign(__assign({}, t), { rowIndex: index })); });
            return __assign(__assign({}, state), { data: newData, orderByColumn: '' });
        },
    };
    return actionsStrategy[type]() || state;
};
exports.default = reducer;
//# sourceMappingURL=reducer.js.map