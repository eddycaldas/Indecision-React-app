var nameVar = 'andrew';
var nameVar = 'mike';
console.log('nameVar', nameVar);

let nameLet = 'jen';
nameLet = 'julie'
console.log('nameLet', nameLet);

const nameConst = 'frank';
console.log('nameConst', nameConst);

const fullName = 'jen mead';
let firstName;
if (fullName) {
    firstName =fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName)