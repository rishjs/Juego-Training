//  Given the name of elixirs call the https://wizard-world-api.herokuapp.com/Elixirs/{id} from the master data https://wizard-world-api.herokuapp.com/Elixirs
// If the given name in elixirs is not present then appropriate error message must be returned


//  Given the name of elixirs call the https://wizard-world-api.herokuapp.com/Elixirs/{id} from the master data https://wizard-world-api.herokuapp.com/Elixirs
// If the given name in elixirs is not present then appropriate error message must be returned


//  Given the name of elixirs call the https://wizard-world-api.herokuapp.com/Elixirs/{id} from the master data https://wizard-world-api.herokuapp.com/Elixirs
// If the given name in elixirs is not present then appropriate error message must be returned


const request=require('request');
const url='https://wizard-world-api.herokuapp.com/Elixirs';
let flag=0;
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let name = "";
rl.question("Enter the name\n", function (string) {
  name = string;
  let array=[];
 
    request({url,json:true},(error,{body}={})=>{
        if(error){
            callback('Unable to connect to weather service',undefined)
        }
        else{
          for(let i=0;i<body.length;i++)
          {
              array.push(body[i]);   
          }
          search(array);
        }
    })
  rl.close();
});
function search(body){
body.forEach(element => {

    let newName = element.name;  
     if(newName===name){
      const url2=`https://wizard-world-api.herokuapp.com/Elixirs/${element.id}`;
      request({url:url2,json:true},(error,{body}={})=>{
          if(error){
              callback('Unable to connect to weather service',undefined)
          }
          else{
            console.log(body)
          }
      })
        flag=1;
        return;
     }
});
if(flag===0)
{
console.log(`No data available for ${name} `);
}
}
