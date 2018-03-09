var nameVar = 'andrew';
var nameVar = 'hello';

console.log('nameVar:',nameVar);

//can not redefine let variable
let nameLet = 'jen';
nameLet = 'jeremy';
console.log('nameLet:',nameLet);

//can not either redefine or reassign variables
const nameConst = 'World';
console.log('nameConst:',nameConst);

//const and let has block scope

var fullName = 'jeremy wang';
if(fullName){
    const firstName = fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName); //not this one, only in if scope
