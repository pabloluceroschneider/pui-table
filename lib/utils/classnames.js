"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var classnames = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var classes = [];
    args.forEach(function (item) {
        if (typeof item === 'string') {
            classes.push(item);
        }
        if (typeof item === 'object') {
            if (Array.isArray(item))
                classnames(item);
            Object.keys(item).forEach(function (key) {
                if (item[key]) {
                    classes.push(item[key]);
                }
            });
        }
    });
    return classes.join(" ");
};
exports.default = classnames;
//# sourceMappingURL=classnames.js.map