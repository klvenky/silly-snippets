function timing(name, startDt) {
  console.log(`${name} took "${Date.now() - startDt}" milliseconds`);
}
const arr = [];
for (let i = 0; i < 9999999; i += 1) arr.push(Math.random() * 100);
const t1 = Date.now();
Array.from(arr);
timing('Array.from', t1);
const t2 = Date.now();
// eslint-disable-next-line no-unused-vars
const spread = [...arr];
timing('spread', t2);
const t3 = Date.now();
[].concat(arr);
timing('concat', t3);
