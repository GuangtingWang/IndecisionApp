
//es5 function
const square = function(x){
    return x * x;
}
console.log(square(8));

//es6 function ,all arrow functions are anonymous function , if you want to use it later, have to assign to a variable
// const squareArrow = (a)=>{
//     return a * a;
// }

//if only one expression in your function body, then use this:
const squareArrow = (x) => x * x;
console.log(squareArrow(100));

//challenge
//get first name using es6 function
const getFirstName = (a) => a.split(' ')[0];
console.log(getFirstName('Guangting Wang'));



