// function getsumpairzero(array){
//   for(let number of array){
// console.log("outer loop")
// for(let i =0; i<array.length; i++){
// console.log("innerloop")
// if(number + array[i] ===0){
//     return [number,array[i]];
// }}}}
  
// const result=getsumpairzero([-5,-4,-3,-2,0,2,4,6,8]);
// console.log(result);



///

let a =document.getElementById("zxc");
let b =addEventListener("click", function(){

    let a = prompt("please enter first number","");
    let b =prompt("please enter secoand number","");
    //+
    var c = parseInt(a) + parseInt(b);
    // this sum of 5 and 6 is 11
    document.write("this sum of "+a+" and "+b+" is:"+c);
    
    
});

