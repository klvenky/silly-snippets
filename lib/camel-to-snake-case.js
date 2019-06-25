"use strict";
/**
 * { [k:string]: string }
 */
var ouputCache = {};
/**
 *
 * @param {string} inputString
 * @returns {string}
 */
function getCamelCaseFromSnake(inputString) {
    if (/^[A-Z]/.test(inputString))
        throw new Error('first.letter.should.be.lower.case');
    if (!ouputCache[inputString]) {
        var tmp = inputString;
        ouputCache[inputString] = tmp
            .split(/(?=[A-Z])/g)
            .map(function (x) {
            return /[A-Z]/.test(x[0]) ? "_" + x.toLowerCase() : "" + x.toLowerCase();
        })
            .join('');
    }
    return ouputCache[inputString];
}
module.exports = getCamelCaseFromSnake;
