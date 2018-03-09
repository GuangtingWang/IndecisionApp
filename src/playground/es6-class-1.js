
//Car class
//make 
//model 
//vin
//getDescription

class Person {
    constructor(name = 'Anonymous',age = 0){
        this.name = name;
        this.age = age;
    }
    getDescription(){
        return `${this.name} is ${this.age} years old.`;
    }
    getGretting(){
        return `Hi I am ${this.name}.`
    }
}

class Student extends Person {
    constructor (name,age,major='Undecided'){
        super(name,age);
        this.major = major;
    }

    hasMajor(){
        return !!this.major;
    }

    getDescription(){
        if(this.hasMajor()){
            return `${super.getDescription()} Their major is ${this.major}.`;
        }
    }
}

class Traveler extends Person{
    constructor (name,age,homeLocation='nowhere'){
        super(name,age);
        this.homeLocation = homeLocation;
    }
    getGretting(){
        if(this.homeLocation){
            return `${super.getGretting()} I am visiting from ${this.homeLocation}.`;
            }
        }
}
const me = new Traveler('Jeremy',26,'Pittsburgh');
console.log(me.getGretting());




