const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  return domains.reduce((result, elem) => {
    let arr = elem.split('.').reverse();
    let s = '';
    for (let i = 0; i < arr.length; i++) {
      s += `.${arr[i]}`;
      let count = (result[s]) ? result[s] + 1 : 1;
      result[s] = count;
    }
    return result;
  }, {});
}

module.exports = {
  getDNSStats
};
