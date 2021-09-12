import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit( n ) {
  let arr = n.toString().split('');
  let resArr = [];


  for (let i = 0; i < arr.length; i++) {
    let temp = [...arr];
    temp.splice(i, 1);
    let value = +temp.join('');
    resArr.push(value);
  }

  return Math.max(...resArr)

}
