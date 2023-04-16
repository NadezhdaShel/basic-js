const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    result.push([]);
    for (let j = 0; j < matrix[i].length; j++) {
      result[i].push(0);
      let sum = 0;
      let n1 = ((i - 1) > 0) ? i - 1 : 0;
      let m1 = ((i + 1) < matrix.length) ? i + 1 : matrix.length - 1;
      let n2 = ((j - 1) > 0) ? j - 1 : 0;
      let m2 = ((j + 1) < matrix[i].length) ? j + 1 : matrix[i].length - 1;
      for (let a = n1; a <= m1; a++) {
        for (let b = n2; b <= m2; b++) {
          if (matrix[a][b] === true) sum++;
        }
      }
      if (matrix[i][j] === true) sum--;
      result[i][j] = sum;
    }
  }
  return result;
}

module.exports = {
  minesweeper
};
