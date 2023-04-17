const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let encodeStr = '';
  let indx = -1;
  str.split("").map((value, index, arr) => {
    if (index > indx) {
      if (value === arr[index + 1]) {
        let i = 0;
        
        while (arr[index + i] === value) {
          i++;
        }

        indx = index + i - 1;
        encodeStr += i + value;
    } else {
      encodeStr += value;
      }
    }
  });

  return encodeStr;
}

module.exports = {
  encodeLine
};
