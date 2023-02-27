//  Given the name of elixirs call the https://wizard-world-api.herokuapp.com/Elixirs/{id} from the master data https://wizard-world-api.herokuapp.com/Elixirs
// If the given name in elixirs is not present then appropriate error message must be returned


const request=require('request');
const url='https://wizard-world-api.herokuapp.com/Elixirs';
let flag=0;
let name = "Fergus Fungal Budge";
  let array=[];
   request({url,json:true},(error,{body}={})=>{
        if(error){
          console.log('Unable to connect')
        }
        else{
          for(let i=0;i<body.length;i++)
          {
              array.push(body[i]);   
          }
          search(array);
        }
    })

async function search(body){
await body.forEach(element => {

    let newName = element.name;  
      if(newName===name){
      const url2=`https://wizard-world-api.herokuapp.com/Elixirs/${element.id}`;
       request({url:url2,json:true},(error,{body}={})=>{
          if(error){
              console.log('Unable to connect')
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
