//<---------------------HERITANCE--------------->

abstract class ItemGeneral {
	protected id: number;
	protected name: string;
	constructor(id: number, name: string) {
		this.id = id;
		this.name = name;
	}
}

class Food extends ItemGeneral {
	ingredients: string[];

	constructor(id: number, name: string, ingredients: string[]) {
		super(id, name);
		this.ingredients = ingredients;
	}

	static greet() {
		console.log('Hey Im A food ');
	}
}

const myFood = new Food(1, 'Pizza', ['cheese', 'pepperoni', 'mass']);

// myFood.id // Type Error private prop
// const item = new ItemGeneral() // Type Error asbtract Class
console.log(myFood);
Food.greet();
