//array functions
const numbers = [1, 4, 9];
const doubles = numbers.map((num) => num * 2);

console.log(doubles); 
console.log(numbers);

//map function for non-array objects
const arrayLike = {
    length: 3,
    0: 2,
    1: 3,
    2: 4,
  };
  console.log(Array.prototype.map.call(arrayLike, (x) => x ** 2));

  //some function
 console.log( [2, 5, 8, 1, 4].some((x) => x > 10)); 
 console.log([7, 50, 8, 1, 4].some((x) => x > 10)); 

 //sort function
 const items = [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic", value: 13 },
    { name: "Zeros", value: 37 },
  ];
  
  // sort by value
  console.log(items.sort((a, b) => a.value - b.value));
  
  // sort by name
  console.log(items.sort((a, b) => {
    const nameA = a.name.toUpperCase(); 
    const nameB = b.name.toUpperCase(); 
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  }));

  //API calls Get method
  const http = require('http');

const options = {
  hostname: 'jsonplaceholder.typicode.com',
  path: '/posts',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

const getPosts = () => {
  let data = '';

  const request = http.request(options, (response) => {
   
    response.setEncoding('utf8');

   
    response.on('data', (chunk) => {
    // console.log(chunk);
      data += chunk;
   
    });

  
    response.on('end', () => {
     // console.log(data);
    });
  });

  
  request.on('error', (error) => {
    console.error(error);
  });

 
  request.end();
};

getPosts();
 
//API calls Post method


const postData = JSON.stringify({
  title: 'foo',
  body: 'bar',
  userId: 1,
});

const options1 = {
  hostname: 'jsonplaceholder.typicode.com',
  path: '/posts',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData),
  },
};

const makePost = () => {
  let data = '';

  const request = http.request(options1, (response) => {
    response.setEncoding('utf8');

    response.on('data', (chunk) => {
      data += chunk;
    });

    response.on('end', () => {
      //console.log(data);
    });
  });

  request.on('error', (error) => {
    console.error(error);
  });

 
  request.write(postData);

  request.end();
};

makePost();

//arrow function
let sum = (a, b) => a + b;

console.log( sum(1, 2) );

//without arrow function
// let sum1 = function(a, b) {
//   return a + b;
// };

//switch operator
let age = 18;
let result=age%2;
switch (result) {
  case 0:
    console.log("Even number"); // the result of prompt is a string, not a number
    break;

  case 1:
    console.log("Odd number");
    break;

  default:
    console.log("undefined");
}



//promises

const alert=require('alert');
// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Succesfull"), 1000);
// })
//  promise.finally(() => alert("Promise ready")) // triggers first
//   promise.then(result => alert(result)); 


let promise1 = new Promise(function(resolve, reject){
  setTimeout(() => reject(new Error("OOPS")), 1000);
})
 promise1.finally(() => alert("Promise ready")) // triggers first
 promise1.catch(err => alert(err)); 