const out = {};

/**
 *
 * @param {string} str
 * @returns string
 */
function getCamelCaseFromSnake(str) {
  if (!out[str]) {
    out[str] = str.split('_').reduce((acc, a, i) => {
      if (a) return i === 0 ? a : a ? `${acc}${a[0].toUpperCase()}${a.slice(1)}` : '';
      else return acc;
    }, '');
  }
  return out[str];
}

module.exports = getCamelCaseFromSnake;
