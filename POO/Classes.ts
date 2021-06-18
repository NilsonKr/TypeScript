//<-------------------------------CLASSES-------------------------->
export {};

enum PictureOrientation {
	LandScape = 'LandScape',
	Portrait = 'Portrait',
	Panoram = 'Panoram ',
	Square = 'Square',
}

class Picture {
	id: number;
	name: string;
	orientation: PictureOrientation;

	constructor(id: number, name: string, orientation: PictureOrientation) {
		this.id = id;
		this.name = name;
		this.orientation = orientation;
	}

	genPicture(): object {
		const newPicture = { id: this.id, name: this.name, orientation: this.orientation };

		return newPicture;
	}
}

//<---------------------------CLASSES WITH INTERFACE--------------------------->

interface AlbumInterface {
	id: number;
	title: string;
	pictures: Array<Picture>;
	addPicture: (picture: Picture) => void;
}

class Album implements AlbumInterface {
	id: number;
	title: string;
	pictures: Picture[];

	constructor(id: number, title: string) {
		this.id = id;
		this.title = title;
		this.pictures = [];
	}

	addPicture(picture: Picture) {
		this.pictures.push(picture);
	}
}

//<--------------------USING CLASSES------------------>

const firstPicture = new Picture(1, 'Vacays', PictureOrientation.LandScape);
const otherPicture = new Picture(2, 'At Seoul', PictureOrientation.Portrait);
const myAlbum = new Album(1, 'Vacays Album');

myAlbum.addPicture(firstPicture);
myAlbum.addPicture(otherPicture);

console.log(myAlbum);
