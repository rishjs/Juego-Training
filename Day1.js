console.log('Hello');

const args = process.argv.slice(2);

args.forEach(arg => {
  console.log(process.env[arg]);
});


const args1 = process.argv.slice(2);

args1.forEach(arg => {
  let envVar = process.env[arg];
  if (envVar !== undefined) {
    console.error(`Could not find "${arg}" in environment`);
  } else {
    console.log(envVar);
  }
});

