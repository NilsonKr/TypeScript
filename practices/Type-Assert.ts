//<------------------------TYPE-ASSERTION------------------------>
export {};

//Angle Brackets
let user: any;
user = 'Nilson_Kr';

const message = (<string>user).length > 5 ? `Welcome ${user}` : 'Username Too Short';

console.log(message);

//as Operator

let greeting: any = 'Hello, Nilson_Kr';

const userMessage = (greeting as string).substr(7);

console.log(userMessage);
