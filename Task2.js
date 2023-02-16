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

const cloneDeep = require('lodash.clonedeep')

const user  = {
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


let user1 = cloneDeep(user)


user1.contactInfo.name = 'Rishika';


console.log(user1)



console.log(user)
