// Group all difficulty level in in one object.
//If difficult level is null then in key NULL the data must be grouped  


const request=require('request');
const task5=(limit=10,pageNumber=1,callback)=>{
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
  task5(limit,pageNumber,(error,data)=>{
      if(error){
          return console.log(error);
      }
      else{
        for(let i=data.start-1;i<data.stop;i++)
        {
            array.push(data.body[i]);   
        }
       groupBy(array);
    } 
  })
  function groupBy(data1){
  let ObjMap ={};
  data1.forEach(element => {
    let makeKey = element.difficulty;
     if(!ObjMap[makeKey]) {
       ObjMap[makeKey] = [];
     }
    ObjMap[makeKey].push(Object.assign({},element));
   });
   console.log(ObjMap);
}
 
 
