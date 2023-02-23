// Group all difficulty level in in one object.
//If difficult level is null then in key NULL the data must be grouped  


const request=require('request');
let array=[];
let keywords=['Advanced','poison', 'ringworm', 'portion', 'hair']
    const url='https://wizard-world-api.herokuapp.com/Elixirs';
    request({url,json:true},(error,{body}={})=>{
        if(error){
            console.log('Unable to connect to weather service')
        }

        else{
            for(let i=0;i<body.length;i++)
            {
              array.push(body[i]); 
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
     
     
