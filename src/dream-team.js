const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (Array.isArray(members) === false) return false;
  let rez = members.reduce((a, b) => {
    if (typeof b === "string") { return [...a, b.trimStart()[0].toUpperCase()] }
      return a;
    }, []).sort().join('');
  return rez === '' ? false : rez;
}

module.exports = {
  createDreamTeam
};
