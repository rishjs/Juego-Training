// From effect field from API[https://wizard-world-api.herokuapp.com/Elixirs], 
// Find all the data which includes keywords (poison, ringworm, portion, hair)
// If no data found return empty array 
// In a string even if poisonous is included that full object should be returned.

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
                search(body[i]);
            }
            console.log(array)
        }
    })
    function search(data){
        let text=JSON.parse(JSON.stringify(data));
                if(text["effect"]!=null)
                {      
                       
                    let myArray = text["effect"].split(" ");
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



//seraching keywords in entire field
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
                search(body[i]);
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
