//<-----------------------VOID---------------------->

//Functions
function sayHi(name: String): void {
	console.log(`Hi ! ${name}`);
}

sayHi('Nilson');

//Variables
let nothing: void;
let nullHere: null = null; /* Undefined and null are subtypes of void*/
let undefinedHere: undefined = undefined;

//<----------------------NEVER------------------->

function shootError(message: string, code: number): never {
	throw new Error(`${message}, code: ${code}`);
}

try {
	shootError('Not Found', 404);
} catch (error) {
	console.log(error.message);
}

// function neverEnds(): never {
// 	let counter: number = 1;

// 	while (true) {
// 		counter += 1;
// 	}
// }

// neverEnds();
