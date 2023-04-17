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
  return Number.parseInt(n.toString().split("")
  .map((value, index, arr) => {
    return arr.join("").slice(0, index) + arr.join("").slice(index + 1);
  }).sort().reverse()[0]);
}

module.exports = {
  deleteDigit
};
