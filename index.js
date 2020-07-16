// Code your solution here
const findMatching = (arr, cond) => arr.filter( a => a.toLowerCase() === cond.toLowerCase());
const fuzzyMatch = (arr, cond) => arr.filter( a => a.slice(0,cond.length) === cond);
const matchName = (arr, cond) => arr.filter( a => a.name === cond )