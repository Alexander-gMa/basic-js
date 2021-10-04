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
export default function getDNSStats(domains) {
  let res = {};
  domains.forEach(e => {
    let d = e.split('.').reverse();
    let acc = '';
    for(let i = 0; i < d.length; i++) {
      acc += '.' + d[i];
      if(res[acc]) res[acc]++;
      else res[acc] = 1;
    }
  });
  return res;
}
