const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let index = +0;

  s1.split("").filter((value) => {
    if(s2.includes(value)) {
      s2 = s2.substring(0, s2.indexOf(value)) + s2.substring(s2.indexOf(value) + 1);
      index++;
    }
  });

  return index;
}

module.exports = {
  getCommonCharacterCount
};
