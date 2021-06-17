//<------------------------INTERFACES---------------------->

enum PictureOrientation {
	LandScape = 'LandScape',
	Portrait = 'Portrait',
	Panoram = 'Panoram ',
	Square = 'Square',
}

interface PictureInterface {
	name: string;
	orientation: PictureOrientation;
	date: Date | string;
}

const buildPicture = (picture: PictureInterface): void => {
	console.table({ picture });
};

buildPicture({ name: 'Vacays', orientation: PictureOrientation.LandScape, date: new Date() });
// buildPicture({ name: 'Vacays', orientation: 'landScape', date: 17062021 }); //Type Error
