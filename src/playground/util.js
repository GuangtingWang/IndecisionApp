console.log('util.js is running');

const square = (n) => n*n ;

const subtract = (a,b) => a-b ;

//inline export
export default (a,b) => a+b ;

//named export
export { square };

//import  add,{square,subtract} from './playground/util.js';