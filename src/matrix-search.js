/**
 * m x n grid
 * no of columns is very large
 * A row can be
 * 1) all zeroes
 * 2) all ones
 * 3) A mix
 *  a) all 0s at beginning followed by 1s
 */
/* [
  [0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 1, 1],
];
 */

function getRowIDWithLeastZeroes(input) {
  let maxCols = input[0].length;
  let result = maxCols + 1;
  let rowIndex = -1;
  for (let index = 0; index < input.length; index += 1) {
    // const firstIndex = input[index].indexOf(1);
    const rowRes = checkForOne(input[index], 0, maxCols);
    if (result < rowRes) {
      result = rowRes;
      rowIndex = index;
    }
  }
}

function checkForOne(row, start, end) {
  if (row.length > 1) {
    // split into half
    const middleIndex = parseInt((end - start) / 2);
    const middleElement = row[middleIndex];
    // if (middleIndex === 0) return checkForOne(row, start, start);

    if (middleElement === 1 && row[middleIndex - 1] !== middleElement) {
      return middleIndex - 1;
    } else if (middleElement === 1 && row[middleIndex - 1] === middleElement) {
      return checkForOne(row, start, middleIndex);
    } else {
      return checkForOne(row, middleIndex, end);
    }
  } else {
    return row[0] === 1 ? start : -1;
  }
}

console.log(
  getRowIDWithLeastZeroes([
    [0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 1, 1],
  ]),
);
