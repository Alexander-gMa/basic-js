import { NotImplementedError } from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(names) {
  let t = {};
  let res = [];

  names.forEach(e => {
    if(t[e]) {
      t[e + `(${t[e]})`] = 1;
      t[e]++;
    }
    else t[e] = 1;
  });

  for(let key in t) res.push(key);

  return res;
}
