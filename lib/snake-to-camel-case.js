"use strict";
/**
 * { [k:string]: string }
 */
var outputCache = {};
/**
 *
 * @param { string } inputString
 * @returns string
 */
function getCamelCaseFromSnakeCase(inputString) {
    if (!outputCache[inputString]) {
        var split = inputString.split('_');
        var resultStr = '';
        for (var i = 0; i < split.length; i += 1) {
            var str = split[i];
            if (str) {
                if (i === 0)
                    resultStr = str;
                else if (str) {
                    resultStr = "" + resultStr + str[0].toUpperCase() + str.slice(1);
                }
            }
        }
        outputCache[inputString] = resultStr;
    }
    return outputCache[inputString];
}
module.exports = getCamelCaseFromSnakeCase;
