// const add = require('./util.js');
// console.log(add(4,-2));
const validator=require('validator');

const getNotes=require('./util.js');

console.log(getNotes());

console.log(validator.isEmail('rishika@example.com'));

console.log(validator.isURL('https/mead.io'));

