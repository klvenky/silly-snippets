function matrixPrinter(n) {
  if (!n % 2) {
    throw new Error('only +ve odd numbers are expected');
  }
  let str = '';
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (i === 0 || j === 0 || i === n - 1 || j === n - 1 || i === j || i + j === n - 1)
        str += '*';
      else str += ' ';
      str += ' ';
    }
    str += '\n';
  }
  console.log(str);
};
matrixPrinter(11);
