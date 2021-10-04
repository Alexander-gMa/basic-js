import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 export default function createDreamTeam(members) {
  let teamName = [];

  if (Array.isArray(members)) {
      members.forEach((element) => {
          if (
              typeof element === 'string' &&
              !/[0-9]/.test(element) &&
              /[A-Za-z]/.test(element.trim().split('')[0])
          ) {
              teamName.push(element.trim().split('')[0].toUpperCase());
          }
      });

      return teamName.sort().join('');
  }
  return false;
}
