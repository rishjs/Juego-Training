console.log('Hello'); //Display Hello

//To display environment variable using loop
const args = process.argv.slice(2);
args.forEach(arg => {
  console.log(process.env[arg]);
});

//To check whether given variable is undefined in environment
const args1 = process.argv.slice(2);
args1.forEach(arg => {
  let envVar = process.env[arg];
  if (envVar === undefined) {
    console.error(`Could not find "${arg}" in environment`);
  } else {
    console.log(envVar);
  }
});

//To write into file
const fs = require('fs')
fs.writeFileSync('notes.txt','This file was created by Node.js!')


