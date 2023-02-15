//nput - arr = [‘12/02/2023’, ‘11/02/2023’, ‘10/02/2023’] 
//output -  {  
  //  ‘10/02/2023’: “MONDAY”,             ‘11/02/2023’: “TUESDAY”, 
     //       ‘12/02/2023’: “WEDNESDAY” } 

let input_arr = new Array();
input_arr = ["1/02/2023", "9/02/2023", "10/02/2023","11/02/2023"] ;
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let day=new Array();
input_arr.forEach((elem, i) => {
    const d = new Date(elem);
    day[i] = weekday[d.getDay()];
})

const obj = {}

day.forEach((elem, i) => {
   obj[`${input_arr[i]}`] = elem
})

 console.log(obj)




