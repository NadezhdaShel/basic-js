const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  this.repeatTimes = options.repeatTimes || 1;
  this.additionRepeatTimes = options.additionRepeatTimes || 1;
  this.separator = String(options.separator || '+');
  this.addition = (options.addition !== undefined) ? String(options.addition) : '';
  this.additionSeparator = String(options.additionSeparator || '|');
  this.str = String(str);
  let addition = (this.addition + this.additionSeparator).repeat(this.additionRepeatTimes).slice(0, -this.additionSeparator.length);
  return (this.str + addition + this.separator).repeat(this.repeatTimes).slice(0, -this.separator.length);
}

module.exports = {
  repeater
};
