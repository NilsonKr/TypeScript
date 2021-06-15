//<-------------------ARRAYS single Type----------------------->

const user: string = 'Random';

let listOfUsers: Array<string> = ['Nilson', 'Minari', 'Sana'];
let anotherUsers: string[] = ['Nilson', 'Minari', 'Sana'];

listOfUsers = [user, 'Minari', 'Jihyo'];
anotherUsers = ['Momo', 'Minari', user];

// listOfUsers = [2, 4, 6]; //Type Error

//<-------------------ARRAYS Multiple Type----------------------->

const place: string = 'house';

let listOfPlaces: Array<string | number | boolean> = ['Bogota', 100100, false];
let anotherPlaces: (string | number)[] = ['Seoul', 200023];

listOfPlaces = ['Bogota', true, place];
anotherPlaces = [place, 100083];

// anotherPlaces = [false, true]; //Type Error
