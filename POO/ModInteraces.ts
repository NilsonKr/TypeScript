//<----------------OPTIONAL PROPS INTERFACES----------------->
interface AlbumConfig {
	name?: string;
	date?: Date | string;
}

const buildAlbum = (album: AlbumConfig): AlbumConfig => {
	let customAlbum: AlbumConfig = { name: 'Default', date: '-' };

	if (album.name) {
		customAlbum.name = album.name;
	}

	if (album.date) {
		customAlbum.date = album.date;
	}

	return customAlbum;
};

const myAlbum = buildAlbum({ name: 'Vacays' });
const secondAlbum = buildAlbum({ date: new Date() });

console.log('myAlbum', myAlbum);
console.log('secondAlbum', secondAlbum);

//<--------------READ-ONLY PROPS------------------>

interface UserConfig {
	readonly id: number;
	username: string;
}

const myUser: UserConfig = { id: 1, username: 'Nilson_kr' };
console.log(myUser);
myUser.username = 'Nilsonnie';
// myUser.id = 100; //Type Error
console.log(myUser);
