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
var reducer = function (state, action) {
    var type = action.type, payload = action.payload;
    var actionsStrategy = {
        LOGGER: function () {
            console.log("payload", payload);
            return __assign(__assign({}, state), { log: payload });
        },
        ORDER_BY: function () {
            var data = state.data;
            var accesor = payload.accesor, asc = payload.asc;
            var orderedByAttr = data.sort(function (a, b) {
                if (asc) {
                    if (a[accesor] > b[accesor]) {
                        return 1;
                    }
                    if (a[accesor] < b[accesor]) {
                        return -1;
                    }
                    return 0;
                }
                if (!asc) {
                    if (a[accesor] < b[accesor]) {
                        return 1;
                    }
                    if (a[accesor] > b[accesor]) {
                        return -1;
                    }
                    return 0;
                }
            });
            return __assign(__assign({}, state), { data: orderedByAttr, orderByColumn: accesor });
        },
    };
    return actionsStrategy[type]() || state;
};
exports.default = reducer;
//# sourceMappingURL=reducer.js.map