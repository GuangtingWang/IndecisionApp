
//arguments object - no longer bound with arrow function

const add = function(a,b){
    console.log(arguments);
    return a + b;
}

const addConst = (a,b) => {
    return a + b;
}

console.log(add(1,3)); //console.log(addConst(1,3)) will not work

//this keyword - no longer bound 
//this is es5, have to use const that = this 
const user = {
    name:'Jeremy',
    cities:['Pittsburgh','NYC'],
    printPlacesLived: function(){
        const that = this;
        console.log(this.cities);
        this.cities.forEach(function(city){
            console.log(that.name + ' has lived in '+ city);
        })
    }
}
//es6 function use parent level this
const userConst = {
    name:'Jeremy',
    cities:['Pittsburgh','NYC'],
    printPlacesLived() {
        //map will return a new array
        return this.cities.map((city) => this.name+' has lived in ' + city);

        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in '+city);
        // });
    }
}

console.log(userConst.printPlacesLived()); 


//chalenge

const multiplier = {
    numbers:[1,2,3,4],
    multiplyBy:3,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}
console.log(multiplier.multiply());

