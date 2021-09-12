import { NotImplementedError } from '../extensions/index.js';

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
export default function getDNSStats( domains ) {

  const obj = {

  }

  for (let i = 0; i < domains.length; i++) {
    let tempDomain = domains[i].split('.').reverse();
    let length = tempDomain.length;

    for (let j = 0; j < length; j++) {

      let tempDNS;
      if (tempDomain.length == 1) {
        tempDNS = `.${tempDomain}`
      }
      
      tempDNS = `.${tempDomain.join('.')}`

      if (!Object.keys(obj).includes(tempDNS)) {
        obj[tempDNS] = 1;
      } else {
        obj[tempDNS] += 1;
      }



      tempDomain.splice(tempDomain.length - 1 , 1);

      
    }
  }
    return obj;
}
