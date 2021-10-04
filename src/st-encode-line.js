import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let c = 0;
  let res = '';

  for(let i = 0; i < str.length; i++){
    c++;
    if(str[i] !== str[i + 1]) {
      res += (c === 1 ? '' : c) + str[i];
      c = 0;
    }
  }

  return res;
}
