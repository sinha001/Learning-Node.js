/*import {x,y} from './app'; --> used in javascript*/

const app = require('./app');

console.log("Learning Node"); // Node Js Module..

let a =20 ,b= 30,c = 10;
console.warn(a+b+c);

console.error("This is not Javascript");

//Fundamentals:

//interview question "===" or "=="
var x = 20;
if(x===20){
    console.log("matched");
}

var str = "30";
if(str===30){ //=== checks type as well.. if we use == then it will print matched
    console.log("matched");
}else{
    console.log("unmatched");
}

//looping..

let i = 10;
for(let j = 0;j<=5;j++){
    console.log(i);
    i++;
}

// Array:
const arr = [1,5,3,6];
console.log(arr);

console.log(app); // importing data from app.js file
console.log(app.x);
console.log(app.z());

let evenArr = arr.filter((items)=>{
    return items%2===0;
}); // even number array..
console.log(evenArr);