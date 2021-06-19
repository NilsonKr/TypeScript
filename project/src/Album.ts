import Item from './General';
import Picture from './Picture';

interface AlbumInterface {
	pictures: Picture[];
	addPicture: (newPicture: Picture) => void;
}

class Album extends Item implements AlbumInterface {
	pictures: Picture[];

	constructor(id: number, title: string) {
		super(id, title);
		this.pictures = [];
	}

	addPicture(newPicture: Picture) {
		this.pictures.push(newPicture);
	}
}

export default Album;
