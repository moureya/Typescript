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
