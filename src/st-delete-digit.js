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
export default function deleteDigit(n) {
  let m = n;
  let c = n.toString().split('');
  m = m.toString().split('').sort((a, b) => b - a).pop();
  c.splice(c.indexOf(m), 1, '');
  return +c.join('');
}
