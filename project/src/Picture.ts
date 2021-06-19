import Item, { PhotoOrientation } from './General';

class Picture extends Item {
	orientation: PhotoOrientation;
	date: Date;
	constructor(id: number, name: string, date: Date, orientation: PhotoOrientation) {
		super(id, name);

		this.orientation = orientation;
		this.date = date;
	}

	get title() {
		return this.name;
	}

	set title(newTitle) {
		if (newTitle.length > 10) {
			throw new Error('Name Is too Long!');
		}

		this.name = newTitle;
	}
}

export default Picture;
