const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  for (let i = 0; i < arr.length; i++) {
    let ii = 0;
    let iii = 1
    while (arr[i + ii] == -1) {ii++;}
    while (arr[i + iii] == -1 || i + iii == i + ii) {iii++;}
    if (arr[i + ii] > arr[i + iii]) {
      let a = arr[i + ii]
      let b = arr[i + iii]
      arr[i + ii] = b
      arr[i + iii] = a
    }
  }
  return arr;
}

module.exports = {
  sortByHeight
};
