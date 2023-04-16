const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  return String(n).split('').reduce((maxNumber, value, index, arr) => {
    return maxNumber = Math.max(Number(arr.filter((e, i) => i != index).join('')), maxNumber);
  }, 0);
}

module.exports = {
  deleteDigit
};
