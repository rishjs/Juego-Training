//nput - arr = [‘12/02/2023’, ‘11/02/2023’, ‘10/02/2023’] 
//output -  {  
  //  ‘10/02/2023’: “MONDAY”,             ‘11/02/2023’: “TUESDAY”, 
     //       ‘12/02/2023’: “WEDNESDAY” } 
let input_arr = new Array();
input_arr = ["02/14/2023", "02/15/2023", "02/16/2023","02/17/2023"] ;
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let day=new Array();
const obj = {}
input_arr.forEach((elem, i) => {
    const d = new Date(elem);
    day[i] = weekday[d.getDay()];
    obj[`${input_arr[i]}`] = day[i]
})
 console.log(obj)


//for all possible input format
//nput - arr = [‘12/02/2023’, ‘11/02/2023’, ‘10/02/2023’] 
//output -  {  
  //  ‘10/02/2023’: “MONDAY”,             ‘11/02/2023’: “TUESDAY”, 
     //       ‘12/02/2023’: “WEDNESDAY” } 
let input_arr = new Array();
input_arr = ["02/14/2023", "19/02/2023", "2023/02/16","02/17/2023","2023/16/03","02/23/2023","05/23/2023","07/23/2023","09/23/2023"] ;
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let day=new Array();
const obj = {}
function monthSwap(myArray){
    let swap=myArray[0];
    myArray[0]=myArray[1];
    myArray[1]=swap;
}
function yearSwap(myArray){
    let swap=myArray[0];
    myArray[0]=myArray[2];
    myArray[2]=swap;
}
input_arr.forEach((elem, i) => {
    const myArray = elem.split("/");
    if(myArray[0]>=13 && myArray[0]<32){
       monthSwap(myArray);
    }
    if(myArray[0].length==4){
       yearSwap(myArray);
       if(myArray[0]>=13){
        monthSwap(myArray);
     }
    }
    let text = myArray.toString();
    const d = new Date(text);
    day[i] = weekday[d.getDay()];
    obj[`${input_arr[i]}`] = day[i];
})
 console.log(obj)




