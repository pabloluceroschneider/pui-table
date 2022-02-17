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
exports.sortByAttr = exports.addRowIndex = void 0;
var addRowIndex = function (row, index) { return (__assign(__assign({}, row), { rowIndex: index })); };
exports.addRowIndex = addRowIndex;
var sortByAttr = function (_a) {
    var data = _a.data, attr = _a.attr, asc = _a.asc;
    return data.sort(function (a, b) {
        if (asc) {
            if (a[attr] > b[attr]) {
                return 1;
            }
            if (a[attr] < b[attr]) {
                return -1;
            }
            return 0;
        }
        if (!asc) {
            if (a[attr] < b[attr]) {
                return 1;
            }
            if (a[attr] > b[attr]) {
                return -1;
            }
            return 0;
        }
    });
};
exports.sortByAttr = sortByAttr;
//# sourceMappingURL=utils.js.map