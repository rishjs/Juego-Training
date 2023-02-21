//callback function
setTimeout(()=>{
    console.log('Two seconds are up');
  },2000)
  
  const names=['Andrew','Jen','Jess'];
  const shortNames=names.filter((name)=>{
    return name.length<=4;
  })
  
  const geocode1=(address,callback)=>{
   setTimeout(()=>{
    const data={
      latitutde:0,
      longitude:0
    }
    callback(data);
   },4000)
   
  }
  geocode1('Philadelphia',(data)=>{
    console.log(data);
  });
  
  const add=(a,b,callback)=>{
    setTimeout(()=>{
       let sum=a+b;
      callback(sum);
     },2000)
  }
  add(1,4,(sum)=>{
    console.log(sum);
  })



//OBJECT PROPERTY SHORTHEND
const name='Andrew';
const userAge=27;

const user={
    name,
    age:userAge,
    location:'Philadelpia'
}
console.log(user);

//object destructuring
const product={
    label:'Red notebook',
    price:3,
    stock:201,
    salePrice:undefined
}

// const label=product.label;
// const stock=product.stock;

const {label:productLabel, stock,rating=5}=product
console.log(stock)
console.log(productLabel)
console.log(rating)

const transaction=(type,{label,stock})=>{
    console.log(type,label,stock);
}
transaction('order',product)

//http.js
const http=require('http');
const url='http://api.weatherstack.com/current?access_key=1f098ce9c4b273056a0fe04ed767e85f&query=37.8267,-122.4233&units=f';

const request=http.request(url,(response)=>{
    let data='';
    response.on('data',(chunk)=>{
        data=data+chunk.toString();
       
    })
    response.on('end',()=>{
        const body=JSON.parse(data)
        console.log(body);
    })
})
request.on('error',(error)=>{
    console.log('An error',error);
})

request.end();

//weather api



const address=process.argv[2];
if(!address){
  console.log('Please provide an address')
}
else{
  geocode(address,(error,{latitude,longitude,location}={})=>{
      if(error){
          return console.log(error);
      }
      forecast(latitude,longitude,(error,forecastdata)=>{
          if(error){
              return console.log(error);
          }
          console.log(location)
          console.log(forecastdata)
      })
  })
}


const forecast=(lat,lon,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=1f098ce9c4b273056a0fe04ed767e85f&query='+lat+','+lon+'&units=f';
    request({url,json:true},(error,{body})=>{
        if(error){
            callback('Unable to connect to weather service!',undefined)
        }
        else if(body.error){
            callback('Unable to find the location',undefined)
        }
        else{
            callback(undefined,body.current.weather_descriptions[0]+". It is currently "+body.current.temperature+" degrees out.It feels like "+body.current.feelslike+" degrees out")
        }
    })
}

const geocode=(address,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1Ijoic2hldHR5ZGVla3NoYSIsImEiOiJjbGVjaDN5YzQxaXd0M25wNmJ2MGEyY28xIn0.AvXBbpaTo_iLmbQIWYO-3w&limit=1';
    request({url,json:true},(error,{body})=>{
        if(error){
            callback('Unable to connect to weather service',undefined)
        }
        else if(body.error){
            callback('Unable to find the location',undefined)
        }
        else if(body.features.length===0){
            callback('Unable to find the location.Retry',undefined)
        }
        else{
            callback(undefined,{
                latitude:body.features[0].center[1],
                longitude:body.features[0].center[0],
                location:body.features[0].place_name
            })
        }
    })
}


