const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

class DepthCalculator {
  count = 1;
  maxCount = 1;
  calculateDepth(arr) {
    for (let value of arr) {
      if (Array.isArray(value)) {
        ++this.count;
        this.calculateDepth(value);
      }
    }
    this.maxCount = Math.max(this.count, this.maxCount);
    this.count = 1;
    return this.maxCount;
  }
}

module.exports = {
  DepthCalculator
};
