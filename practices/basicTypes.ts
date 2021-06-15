//<--------------------NUMBER---------------------------->

//Explicit
let phoneNumber: Number = 32083347;
//Implicit
let phoneNumber2 = 323232323;
// phoneNumber = 'Hola' //Type Error

let hex: Number = 0x4fd3;
let binary: Number = 0b00101;
let octal: Number = 0o2403;

//<--------------------BOOLEAN---------------------------->

//Explicit
let isUserPro: Boolean = true;
isUserPro = false;
//Implicit
let isPlanPro = false;
isPlanPro = true;

//isPlanPro = 'Hello' //Type Error

//<--------------------STRING---------------------------->

//Explicit
let userName: String = 'Nilson_Kr';
userName = 'NilsonKr';
//Implicit
let email = 'nilson@gmail.com';
email = 'nilsonkr@gmail.com';

// userName = 23245343; //Type Error

const userInfo: String = `
  User Info 
  username : ${userName}
  email : ${email}
  phone : ${phoneNumber}
  isPlanPro : ${isPlanPro} 
`;

console.log('Information', userInfo);
