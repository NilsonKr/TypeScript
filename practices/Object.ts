let person2: object = {
	name: 'Nilson',
	age: 22,
};

// console.log(person2.name); //Error due type object

const newPerson = { ...person2, city: 'Seoul' };

const isJSObjectInstance = newPerson instanceof Object;

console.log(isJSObjectInstance); //true

console.log(newPerson.city);

// <-------------------PROPERTYS TYPES--------------------->

let someObject = {
	x: 'Hello',
	y: 'World',
};

someObject.x = 'Happy';
someObject.y = 'Hacking';

// someObject.x = 2323 //Error because the property is asigned as a String
