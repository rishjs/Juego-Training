// 1.Paginate all the Data from API [https://wizard-world-api.herokuapp.com/Elixirs] with following.
// There should be limit with parameter to specify the maximum items a call can have
// If data set total items items is less that limit then total items should be returned
// There should be an option to pass a Page number
// If limit is not passed server should assume a limit of 10
// If the page number is not passed it should be assumed as 1



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
  task4(limit,pageNumber,(error,data)=>{
      if(error){
          return console.log(error);
      }
      else{
        for(let i=data.start-1;i<data.stop;i++)
        {
            console.log(data.body[i]);
        }

    } 
  })
