// argument object - no longer bound with arrow function

const add = (a, b) => {
    // console.log(arguments); not longer bound
    return a + b
}
console.log(add(55, 1));


//this keyword - no longer bound
const user = {
    name: 'eddy',
    cities: ['New York', 'Denver', 'LA'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
console.log(user.printPlacesLived());

// ---------->

const multiplier = {
    numbers: [4, 8, 10],
    oneNumber: 5,
    multiply() {
        return this.numbers.map((newNumber) => this.oneNumber * newNumber);
    }
};
console.log(multiplier.multiply());