// let & const
console.log('LET & CONST');
//let has a block scope
let variable = "Let Test";
console.log(variable);

//var has a global scope
var variable1 = "Var Test";
console.log(variable1);

//const has a constant value that cannot be changed
const maxLevels = 100;
console.log(maxLevels);
// maxLevels = 99;

//Block scope
function reset() {
    let variable = null;
    console.log(variable);
}
reset();
console.log(variable);

// Arrow Functions
console.log('ARROW FUNCTIONS');
const addNumbers = function (number1: number, number2: number): number {
    return number1 + number2;
};
console.log(addNumbers(10, 4));

const multiplyNumbers = (number1: number, number2: number) => {
    return number1 * number2;
};
console.log(multiplyNumbers(10, 4));

const greet1 = () => {
    console.log('Hello!');
};
greet1();

const greetFriend = (friend: string) => console.log(friend);
greetFriend('Manu');

//Default Parameters
console.log('DEFAULT PARAMETERS');

const countdown = (start: number = 10): void => {
    console.log(start);
    while (start > 0) {
        start--;
        console.log(start);
    }
    console.log('Done!', start);
};
countdown();

//Rest & Spread
console.log('REST & SPREAD');

const numbers1 = [1, 10, 99, -5];
console.log(Math.max(33, 99, 10, -3));
console.log(Math.max(...numbers1));

function makeArray(name: string, ...args: number[]) {
    return args;
}
console.log(makeArray('Max', 1, 2, 6));

// Descructuring
console.log('DESCTRUCTURING');

const myHobbies = ['Cooking', 'Sports'];
const [hobby1, hobby2] = myHobbies;
console.log(hobby1, hobby2);

const userData1 = { userName: 'Anthony', age: 28 };
const { userName, age } = userData1;
console.log(userName, age);

//Template Literals
console.log('TEMPLATE LITERALS');

const firstName1 = 'Anthony';
const hello = `Hello, my name is ${firstName1}`;
console.log(hello);


