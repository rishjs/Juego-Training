//  Given the name of elixirs call the https://wizard-world-api.herokuapp.com/Elixirs/{id} from the master data https://wizard-world-api.herokuapp.com/Elixirs
// If the given name in elixirs is not present then appropriate error message must be returned


const request=require('request');
const task6=(limit=10,pageNumber=1,callback)=>{
    const url='https://wizard-world-api.herokuapp.com/Elixirs';
    request({url,json:true},(error,{body}={})=>{
        if(error){
            callback('Unable to connect to weather service',undefined)
        }
        else if(body.error){
            callback('Unable to find the location',undefined)
        }
        else{
            let start=(pageNumber*limit)-(limit-1);
            let stop=pageNumber*limit;
            callback(undefined,
              { body,
               start,
               stop
              }
            )
        }
    })
}
const limit=process.argv[2];
const pageNumber=process.argv[3];
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
  task6(limit,pageNumber,(error,data)=>{
      if(error){
          return console.log(error);
      }
      else{
        for(let i=data.start-1;i<data.stop;i++)
        {
            array.push(data.body[i]);   
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
        console.log(element);
        flag=1;
        return;
     }
});
if(flag===0)
{
console.log(`No data available for ${name} in pageno ${pageNumber}`);
}
}
