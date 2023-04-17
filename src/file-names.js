const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  while (new Set(names).size !== names.length) {
    let newNames = [];

    names.filter((value) => {
      if (newNames.includes(value, 0)) { 
        value = new String(value);
        value += "(" + Number.parseInt(value.slice(value.length - 2, value.length - 1)) + ")";
      }
      newNames.push(value) ;
      return value;
    })

    names = newNames;
  }

  return names;
}

module.exports = {
  renameFiles
};
