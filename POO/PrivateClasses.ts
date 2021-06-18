//<----------------------PRIVATE&PUBLIC CLASSES----------------->
export {};

class Dish {
	#id: number; //Only Accessing within the class
	#name: string;
	ingredients: string[];

	constructor(id: number, name: string, ingredients: Array<string>) {
		this.#id = id;
		this.#name = name;
		this.ingredients = ingredients;
	}
}

class Menu {
	private id: number; //Read out but cannot be modified
	private title: string;
	private dishes: Dish[];

	constructor(id: number, title: string) {
		this.id = id;
		this.title = title;
		this.dishes = [];
	}

	addDish(dish: Dish) {
		this.dishes.push(dish);
	}
}

const mainMenu = new Menu(1, 'Main Menu');
const Pizza = new Dish(1, 'Pizza ', ['Pepperoni', 'Cheese', 'Mass', 'Sauce']);
mainMenu.addDish(Pizza);
console.log(mainMenu);

// Changing Props
// mainMenu.title = 'Second Menu'; //Private Prop
// Pizza.name = 'Burguer'; //Private Prop
