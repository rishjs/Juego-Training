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
