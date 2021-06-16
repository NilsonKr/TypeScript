//<---------------------FUNCTIONS----------------->

function printUser(id: number, name: string, isPremium?: boolean): void {
	console.log(`User Info id: ${id}, name: ${name}, isPremium: ${isPremium}`);
}

// printUser(1213, 'Nilson_Kr');

//<-------------------ARROW-FUNCTIONS------------->

type pictureSize = '1000x1000' | '500x500' | '200x200';

const genPicture = (title: string, size: pictureSize, date?: string): object => {
	const id: number = Math.floor(Math.random() * (100 + 1));

	const picture = { id, title, size, date: '-' };

	if (date) {
		picture.date = date;
	}

	return picture;
};

const myPicture: object = genPicture('Seoul Trip', '500x500');

console.log(myPicture);
