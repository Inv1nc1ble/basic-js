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

export default function createDreamTeam( members ) {

  if (typeof members !== 'object' || !members || !Array.isArray(members)) return false;

  let newArr = members.filter((item) => {
    return typeof item === 'string';
  }).map(item => item.trim())
  .sort((a, b) => {
    return a.localeCompare(b)
  }).map((item) => {
    return item[0].toUpperCase()
  }).join('');

  return newArr;
}