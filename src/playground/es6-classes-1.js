
class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGretting() {
        return `Hi, I am ${this.name}`
    }
    getDescription() {
        return `${this.name} is ${this.age} years old`
    }
}
// ---------> extend Person from student to continue using the functions

class Student extends Person { 
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` their major is ${this.major}`
        }

        return description;
    }
}


//-------------->

class Traveler extends Person {
    constructor(name, age,location) {
        super(name, age);
        this.location = location;
    }
    homeLocation() {
        return !!this.location;
    }
    getGretting() {
        let gretting = super.getGretting();

        if (this.homeLocation()) {
            gretting += `I am visiting from ${this.location}`
        }
        return gretting;
    }
}

const me = new Traveler('Eddy Caldas', 26, 'Denver');
console.log(me.getGretting()); // Person {name: "eddy Caldas"}

const other = new Traveler();
console.log(other.getGretting()); // Person {name: undefined}getGretting
