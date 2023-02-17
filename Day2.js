// const add = require('./util.js');
// console.log(add(4,-2));
//modules
const validator=require('validator');
const chalk=require('chalk');
const getNotes=require('./util.js');

console.log(getNotes());

console.log(validator.isEmail('rishika@example.com'));

console.log(validator.isURL('https/mead.io'));


console.log(chalk.bgRed.bold("Success!"));

//object creation 1

const user = {
    id: '009',
     email: 'abc@linuxhint.com',
    contactInfo: {
     name: 'Harry',
     address: {
     city: 'Berlin',
     country: 'Germany'
     }
    }
  };
  
  const user1 = Object.create(user);
  
  user1.contactInfo.name = 'Rishika'; 
 
  
 console.log(user1.contactInfo.name);
 console.log(user1);

 //object creation 2
 o = {};

o = Object.create(Object.prototype);

o = Object.create(Object.prototype, {

  foo: {
    writable: true,
    configurable: true,
    value: "hello",
  }, 
  bar: {
    configurable: false,
    get() {
      return 10;
    },
    set(value) {
      console.log("Setting `o.bar` to", value);
    },
  },
});
console.log();

o = Object.create({}, { p: { value: 42 } });

//object assign
const a = {
    id: '009',
     email: 'abc@linuxhint.com',
    contactInfo: {
    name: 'Harry',
     address: {
     city: 'Berlin',
     country: 'Germany'
     }
    }
  }
const copy=Object.assign({},a);
copy.contactInfo.name="ujj";
console.log( a); 

//while looping
let n = 0;
let y = 0;
while (n < 3) {
  n++;
  y += n;
}
console.log(y);

//break

let x = 0;
let z = 0;
labelCancelLoops: while (true) {
  console.log("Outer loops: ", x);
  x += 1;
  z = 1;
  while (true) {
    console.log("Inner loops: ", z);
    z += 1;
    if (z === 10 && x === 10) {
      break labelCancelLoops;
    } else if (z === 10) {
      break;
    }
  }
}
