import { NotImplementedError } from '../extensions/index.js';

/**
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
export default class VigenereCipheringMachine {
  constructor(direction = true) {
    this.direction = direction;

    this.list = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  }

  encrypt(message, key) {
      if (!message || !key) {
        throw new Error('Incorrect arguments!');
      }

      message = message.toUpperCase();
      key = key.toUpperCase();

      while (message.length > key.length) {
        key = `${key}${key}`
      }


      let result = [];

      for (let i = 0, j = 0; i < message.length; i++) {
        if (!this.list.includes(message[i])) {
          result.push(message[i])
        } else {
          let num = (this.list.indexOf(message[i]) + this.list.indexOf(key[j])) % 26;
          result.push(this.list[num]);
          j++;
        }
        
      }

      return this.direction == true ? result.join('') : result.reverse().join('');
  }
  decrypt(message, key) {

    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    while (message.length > key.length) {
      key = `${key}${key}`
    }

    let result = [];

    for (let i = 0, j = 0; i < message.length; i++) {
      if (!this.list.includes(message[i])) {
        result.push(message[i])
      } else {
        let num = (this.list.indexOf(message[i]) - this.list.indexOf(key[j]) +26 ) % 26;
        result.push(this.list[num]);
        j++;
      }
      
    }

    return this.direction == true ? result.join('') : result.reverse().join('');
    
  }
}


// let v = new VigenereCipheringMachine();

// console.log(v.decrypt('LXFOPV!EFRNHR', 'lemon'))