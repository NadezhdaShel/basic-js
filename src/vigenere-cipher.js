const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }
  encrypt(message, key) {
    if (message == undefined || key == undefined) {
      throw new Error('Incorrect arguments!');
    }
    let i = 0;
    message = message.toUpperCase();
    key = key.toUpperCase();
    let code = message.replace(/[a-z]/ig, word => {
      let posMessage = word.codePointAt(0) - 65;
      let posKey = key.codePointAt(i) - 65;
      let result = String.fromCodePoint((posMessage + posKey) % 26 + 65);
      i = (i < key.length - 1) ? i + 1 : 0;
      return result;
    });
    return (this.isDirect === true) ? code : code.split('').reverse().join('');
  }
  decrypt(encryptedMessage, key) {
    if (encryptedMessage == undefined || key == undefined) {
      throw new Error('Incorrect arguments!');
    }
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    let i = 0;
    let message = encryptedMessage.replace(/[a-z]/ig, word => {
      let posCode = word.codePointAt(0) - 65;
      let posKey = key.codePointAt(i) - 65;
      let result = String.fromCodePoint((posCode + 26 - posKey) % 26 + 65);
      i = (i < key.length - 1) ? i + 1 : 0;
      return result;
    });
    return (this.isDirect === true) ? message : message.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
