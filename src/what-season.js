const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {

  
  let newDate = new Date(date);

  if(newDate.getMonth() <= 1 || newDate.getMonth() > 10) {
    return 'winter';
  }

  if(newDate.getMonth() > 1 && newDate.getMonth() <= 4) {
    return 'spring';
  }

  if(newDate.getMonth() > 4 && newDate.getMonth() <= 7) {
    return 'summer';
  }

  if(newDate.getMonth() > 7 && newDate.getMonth() <= 10) {
    return 'autumn';
  }

  return 'Unable to determine the time of year!';
}


module.exports = {
  getSeason
};
