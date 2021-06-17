//<-----------------------EXTEND INTERFACES----------------->

export {};

//Declaring Interfaces
interface General {
	id: number;
	name: string;
}

interface Album extends General {
	description: string;
}

interface Picture extends General {
	pixels: number;
}

// Stuff Using Interfaces
const myAlbum: Album = {
	id: 1,
	name: 'Vacays Album',
	description: 'Some Vacays Pictures',
};

const firstPicture: Picture = {
	id: 1,
	name: 'At Seoul',
	pixels: 500,
};

const otherPic = {
	id: 2,
	name: 'at Canada',
	pixels: 1800,
} as Picture;

console.table({ myAlbum });
console.table({ firstPicture });
console.table({ otherPic });
