// const user  = {
//     id: '009',
//     email: 'abc@linuxhint.com',
//     contactInfo: {
//     name: 'Harry',
//     address: {
//     city: 'Berlin',
//     country: 'Germany'
//     }
//     }
//     }
//     const user1=user;
//     user1.id='007';
// console.log(user);

// const user  = {
//     id: '009',
//     email: 'abc@linuxhint.com',
//     contactInfo: {
//     name: 'Harry',
//     address: {
//     city: 'Berlin',
//     country: 'Germany'
//     }
//     }
//     }
//     const user1=user;
//     user1.id='007';
// console.log(user);

//const cloneDeep = require('lodash.clonedeep')

// const user  = {
//         id: '009',
//         email: 'abc@linuxhint.com',
//         contactInfo: {
//          name: 'Harry',
//          address: {
//          city: 'Berlin',
//         country: 'Germany'
//          }
//          }
//          }


//          const user1 = { ...user };


// user1.contactInfo.name = 'yhn';


// console.log(user1)



// console.log(user)

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
  console.log(a);
  console.log(a.contactInfo.name);  
  const clone = JSON.parse(JSON.stringify(a));
  clone.contactInfo.name = 'yhn';
  console.log(clone);
  console.log( clone.contactInfo.name); 
  console.log( a); 
