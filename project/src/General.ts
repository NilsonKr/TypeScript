export enum PhotoOrientation {
	LandScape = 'LandScape',
	Portrait = 'Portrait',
	Panorama = 'Panorama',
	Square = 'Square',
}

abstract class Item {
	protected id: number;
	protected name: string;

	constructor(id: number, name: string) {
		this.id = id;
		this.name = name;
	}
}

export default Item;
