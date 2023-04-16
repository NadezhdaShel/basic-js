const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (arguments.length === 0) value = "";
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if ((Number.isFinite(position) === false) || (position > this.chain.length) || (position <= 0) || (position % 1 != 0)) {
      this.chain = [];
      throw new Error("You can\'t remove incorrect link!")
    }
    this.chain = this.chain.filter((v, i) => i != position - 1);
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    let rez = this.chain.map(value => `( ${String(value)} )`).join('~~');
    this.chain = [];
    return rez;
  }
};

module.exports = {
  chainMaker
};
