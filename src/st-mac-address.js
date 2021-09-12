import { NotImplementedError } from '../extensions/index.js';



export default function isMAC48Address( n ) {
    let arr = n.split('-');

    let res = true;

    if (arr.length !== 6) {
      return false;
    }

    arr.forEach(element => {
      
      if (!Number.isInteger(parseInt(element, 16))) {
        res = false;
      }
    });

    return res;
}
