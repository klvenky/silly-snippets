"use strict";
function timing(name, startDt) {
    console.log(name + " took \"" + (Date.now() - startDt) + "\" milliseconds");
}
var arr = [];
for (var i = 0; i < 9999999; i += 1)
    arr.push(Math.random() * 100);
var t1 = Date.now();
Array.from(arr);
timing('Array.from', t1);
var t2 = Date.now();
// eslint-disable-next-line no-unused-vars
var spread = arr.slice();
timing('spread', t2);
var t3 = Date.now();
[].concat(arr);
timing('concat', t3);
