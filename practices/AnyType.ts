//<------------------------ANY---------------------->

//Explicit
let myName: any;
myName = 'Nilson';
myName = 232343;
myName = ['Nlson', 'Diaz'];

//Implicit
let city;
city = 'City';
city = 1001001;
city = ['Seoul', 'Korea'];

//Tricky Error

let person;

person = 'Nilson Diaz';

// const greting = person.sayHi(); // Error
const lastName = person.substring(7); //It Works

console.log(lastName);
