//<----------------GETTERS & SETTERS------------------------->

class User {
	id: number;
	private _username: string;
	private _email: string;

	constructor(id: number, username: string, email: string) {
		this.id = id;
		this._username = username;
		this._email = email;
	}

	get username() {
		return this._username;
	}

	set username(newUsername) {
		if (newUsername.length > 10) {
			throw new Error('The Name is too long');
		}

		this._username = newUsername;
	}

	get email() {
		return this._email;
	}

	set email(newEmail) {
		if (!newEmail.includes('@')) {
			throw new Error('Has To be An Email');
		}

		this._email = newEmail;
	}
}

const myUser = new User(1, 'Nilson', 'nilson@gmail.com');

console.log(myUser);

myUser.email = 'nilsonkr@hotmail.com';
myUser.username = 'NilsonKr';

console.log(myUser);

// myUser.email = 'sdsASDAS'; //Set Error
// myUser.username = 'Nilson Diaz Perez'; //Set Error
