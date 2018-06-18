//string
let myName: string = 'Anthony';
// myName = 28;

//number
let myAge: number = 28;
// myAge = 'Anthony';

//boolean
let hasHobbies: boolean = true;
// hasHobbies = 1;

//assign types
let myRealAge: number;
myRealAge = 28;
// myRealAge = '28';

//array
let hobbies: any[] = ['Sports', 'Cooking'];
hobbies = [100];
// hobbies = 100;

//tuples
let address: [string, number] = ['Somestreet', 99];

//enum
enum Color {
    Blue,
    Yellow,
    Red
}
let myColor: Color = Color.Yellow;
console.log(myColor);

//any
let car: any = 'Chevy';
console.log(car);
car = { brand: 'Chevrolet', model: 'Cruze Eco' };
console.log(car);

//functions
function returnMyName(): string {
    return myName;
}
console.log(returnMyName());

//void
function sayHello(): void {
    console.log("Hello!");
    // return myName;
}

//argument types
function multiply(value1: number, value2: number): number {
    return value1 * value2;
}
// console.log(multiply(2, 'Max'));
console.log(multiply(54, 1289));

//function types
let myMultiply: (val1: number, val2: number) => number;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(2, 10));

//objects
let userData: { name: string, age: number } = {
    name: 'Anthony',
    age: 28
};
// userData = {
//     a: 'Hello',
//     b: 22
// };

//complex object
let complex: { data: number[], output: (all: boolean) => number[] } = {
    data: [100, 3.99, 10],

    output: function (all: boolean): number[] {
        return this.data;
    }
};
// complex = {};

//type alias
type Complex = { data: number[], output: (all: boolean) => number[] };
let complex2: Complex = {
    data: [100, 3.99, 10],

    output: function (all: boolean): number[] {
        return this.data;
    }
};

//union types
let myRealRealAge: number | string = 28;
myRealRealAge = '28';
// myRealRealAge = true;

//check types
let finalValue = 'A string';
if (typeof finalValue == 'string') {
    console.log('Final value is a string');
}

//never
function neverReturns(): never {
    throw new Error('An error!');
}

//Nullable Types
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
let canThisBeAny = null;
canThisBeAny = 12;
