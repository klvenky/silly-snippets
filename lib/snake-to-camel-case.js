"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var out = {};
function getCamelCaseFromSnake(str) {
    if (!out[str]) {
        out[str] = str.split('_')
            .reduce(function (acc, a, i) {
            if (a)
                return (i === 0) ? a : (a ? "" + acc + a[0].toUpperCase() + a.slice(1) : '');
            else
                return acc;
        }, '');
    }
    return out[str];
}
exports.default = getCamelCaseFromSnake;
