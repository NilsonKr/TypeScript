//<--------------------ENUM------------------->
export {};

enum ImageOrientation {
	LandScape = 10, //Index 10
	Portrait, //Index 11
	Square, //Index 12
	Panoram, //Index 13
}

let myImage: ImageOrientation = ImageOrientation.Square;
// myImage = 'Whatever'; //Type Error

console.log(myImage); //12 #index number

//<---------------------ENUM WITH VALUES------------------------>
enum CountriesAcronym {
	Colombia = 'COL',
	EEUU = 'USA',
	KOREA = 'KR',
	CANADA = 'CA',
}

let myCountry: CountriesAcronym = CountriesAcronym.Colombia;

console.log(myCountry); // 'COL'
