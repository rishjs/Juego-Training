//async&await
 const alert=require('alert');
class Thenable {
    constructor(num) {
      this.num = num;
    }
    then(resolve, reject) {
      //alert(resolve);
   
      setTimeout(() => resolve(this.num * 2), 1000); // (*)
    }
  }
  
  async function f() {
    
    let result = await new Thenable(1);
    alert(result);
  }
  
  f();


let promise1=new Promise((resolve, reject) => {

    //setTimeout(() => resolve("Succesfull"), 1000);
    reject(new Error("Oops"));
  
  })
  promise1.catch(function(error) { // (*)
  
    if (error instanceof URIError) {
      alert("handle");
    } else {
      alert("Can't handle such error");
  
      throw error; 
    }
  
  })
  promise1.then(function() {
    alert("haii")
  })
  promise1.catch(error => { 
  
    alert(`The unknown error has occurred: ${error}`);
 
  
  });

  //promise.all()
  let names1 = ['iliakan', 'remy', 'jeresig'];

let requests = names1.map(name => fetch(`https://api.github.com/users/${name}`));

Promise.all(requests)
  .then(responses => {
  
    for(let response of responses) {
      alert(`${response.url}: ${response.status}`); 
    }

    return responses;
  })
  
  .then(responses => Promise.all(responses.map(r => r.json())))
 
  .then(users => users.forEach(user => alert(user.name)))

  //promise.allsettled()
  let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://no-such-url'
  ];
  
  Promise.allSettled(urls.map(url => fetch(url)))
    .then(results => { 
      results.forEach((result, num) => {
        if (result.status == "fulfilled") {
          alert(`${urls[num]}: ${result.value.status}`);
        }
        if (result.status == "rejected") {
          alert(`${urls[num]}: ${result.reason}`);
        }
      });
    });

//API Fetch()
async function call(){
let response = await fetch("https://api.github.com/users/iliakan");

if (response.ok) { 
  let json = await response.json();
  console.log(json);
} else {
  alert("HTTP-Error: " + response.status);
}
}
call();

Post
let user = {
    name: 'John',
    surname: 'Smith'
  };
async function call1(){
   response = await fetch('https://api.github.com/users/iliakan', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(user)
  });

let result = await response.json();
  console.log(result);

}
  call1();

abort()
let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
];  

let controller = new AbortController();
controller.abort() 

async function call2()
{
    let fetchJobs = urls.map(url => fetch(url, {
    signal: controller.signal
    }));
    console.log(controller.signal.aborted);
    await Promise.all(fetchJobs) 
        .then(responses => {
  
            for(let response of responses) {
            alert(`${response.url}: ${response.status}`); 
            }
            return responses;
        })
  
        .then(responses => Promise.all(responses.map(r => r.json())))
        
        .then(users => users.forEach(user => alert(user.name)));
}
call2();

URL
let url = new URL('https://google.com/search');

url.searchParams.set('q', 'test me!'); 

alert(url); 
url.searchParams.set('tbs', 'qdr:y'); 


alert(url);


for(let [name, value] of url.searchParams) {
  alert(`${name}=${value}`); 
}

let url1 = encodeURI('http://site.com/привет');

alert(url1);

let music = encodeURIComponent('Rock&Roll');

let url2 = `https://google.com/search?q=${music}`;

alert(url2);

//request()
const request=require('request');

const url3='https://api.mapbox.com/geocoding/v5/mapbox.places/12what.json?access_token=pk.eyJ1Ijoic2hldHR5ZGVla3NoYSIsImEiOiJjbGVjaDN5YzQxaXd0M25wNmJ2MGEyY28xIn0.AvXBbpaTo_iLmbQIWYO-3w&limit=1';
request({url:url3,json:true},(error,response)=>{
  if (error){
    console.log('Unable to connect to weather service');
  }
  else if(response.body.error){
    console.log('Unable to find the location');
  }
  else if(response.body.features.length===0){
    console.log('Unable to find the location.Retry');
  }
  else{
    const latitude = response.body.features[0].center[0];
    const longitude = response.body.features[0].center[1];
    console.log(latitude,longitude)
  }
})

//callback function
setTimeout(()=>{
  console.log('Two seconds are up');
},2000)

const names=['Andrew','Jen','Jess'];
const shortNames=names.filter((name)=>{
  return name.length<=4;
})

const geocode=(address,callback)=>{
 setTimeout(()=>{
  const data={
    latitutde:0,
    longitude:0
  }
  return data;
 },2000)
 
}
const data=geocode('Philadelphia');
console.log(data);
  