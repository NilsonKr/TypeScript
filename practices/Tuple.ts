// //<------------------------TUPLE--------------------->
export {};

let userInfo: [string, number, string];
userInfo = ['Nilson', 2312434, 'Diaz'];

// // userInfo = [2323, 'Nilson', 232323]; //Type Errror

let arrayOfTuples: Array<[string, number]>;
arrayOfTuples = [
	['Nilson', 2323],
	['Diaz', 232323],
];

// // arrayOfTuples = [[23123123, 'Error']]; // Type Error

let tuplesArray: [boolean, string][] = [
	[true, 'isPremium'],
	[false, 'isPremium'],
];

tuplesArray[0] = [false, 'isPremium'];
//tuplesArray[0] = ['Hello', 23232] //Type Error

//<------------------------PRACTICE------------------------->

const randomTuple: [string, number][] = [
	['Minari', 1],
	['Momo', 2],
	['Nayeonnie', 3],
];

function changeName(list: [string, number][], actualName: string, newName: string): [string, number][] {
	const findIndex = list.findIndex(userTuple => userTuple[0] === actualName);
	const newUsers: [string, number][] = [...list];

	//Supressing the 'Object might be undefined error with non-null assertion operator'
	newUsers[findIndex] = [newName, newUsers[findIndex]![1]];

	return newUsers;
}

const newUsers = changeName(randomTuple, 'Momo', 'Momoring');

console.log(newUsers);
