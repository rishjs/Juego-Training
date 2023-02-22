// From effect field from API[https://wizard-world-api.herokuapp.com/Elixirs], 
// Find all the data which includes keywords (poison, ringworm, portion, hair)
// If no data found return empty array 
// In a string even if poisonous is included that full object should be returned.

const request=require('request');
const task4=(limit=10,pageNumber=1,callback)=>{
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
let array=[];
let keywords=['Advanced','poison', 'ringworm', 'portion', 'hair']
  task4(limit,pageNumber,(error,data)=>{
      if(error){
          return console.log(error);
      }
      else{
        for(let i=data.start-1;i<data.stop;i++)
        {
            search(data.body[i]);
        }
        console.log(array)
    } 
  })
  function search(data){
    let text=JSON.parse(JSON.stringify(data));
    for(let j in text){
            if(text[j]!=null)
            {
                if(typeof text[j]=="object") 
                {
                    search(text[j]);
                }         
                else{          
                let myArray = text[j].split(" ");
                for(let k=0;k<myArray.length;k++)
                {
                    for(let u=0;u<keywords.length;u++){ 
                    if(myArray[k].startsWith(keywords[u])){
                        array.push(Object.assign({},data))
                    }
                }
                }
            }
            }
    } 
}
