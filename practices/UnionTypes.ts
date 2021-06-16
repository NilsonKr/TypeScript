//<--------------------UNION-TYPES--------------->
export {};

let userId: string | number = '1323232323';
userId = 38943478;

let isPremium: boolean | string = 'yes';
isPremium = true;

//isPremium = 232323 // Type Error

//<-----------------ALIAS-TYPE------------------>

type countryType = string | number;

let myCountry: countryType = 231243434;
myCountry = 'Colombia';

type photoSize = number | string;

let myPhotoSize: photoSize = '1000x1000';
myPhotoSize = 1000;

//myPhotoSize = true //Type Error

//<------------------LITERAL-TYPES--------------->

type literalSizes = '1000x1000' | '800x800' | '500x500' | '200x200';

let otherPicture: literalSizes = '500x500';
otherPicture = '200x200';

//otherPicture = '300x300' //Type Error
