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
  if(!(date instanceof Date && !isNaN(date))){
    throw new Error("Invalid date!")
  }
  // if (isNaN(date.getTime()) || date.getTime() === undefined) { throw new Error('Invalid date!') }
  let month = date.getUTCMonth();
  if ([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].includes(month) === false || month == undefined) { throw new Error('Invalid date!') }
  return ([0, 1, 11].includes(month)) ? "winter" :
    ([2, 3, 4].includes(month)) ? "spring" :
      ([5, 6, 7].includes(month)) ? "summer" : "autumn"
  // ([8, 9, 10].includes(month)) ?  

}
module.exports = {
  getSeason
};
