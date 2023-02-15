//nput - arr = [‘12/02/2023’, ‘11/02/2023’, ‘10/02/2023’] 
//output -  {  
  //  ‘10/02/2023’: “MONDAY”,             ‘11/02/2023’: “TUESDAY”, 
     //       ‘12/02/2023’: “WEDNESDAY” } 

let input_arr = new Array();
input_arr = ["12/02/2023", "11/02/2023", "10/02/2023"] ;
input_arr1 = ["Monday", "Tuesday", "Wednesday"] ;
input_arr.reverse();


const obj = {}

input_arr1.forEach((elem, i) => {
   obj[`${input_arr[i]}`] = elem
})

console.log(obj)

