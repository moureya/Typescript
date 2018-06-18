// let & const
console.log('LET & CONST');
//let has a block scope
var variable = "Let Test";
console.log(variable);
//var has a global scope
var variable1 = "Var Test";
console.log(variable1);
//const has a constant value that cannot be changed
var maxLevels = 100;
console.log(maxLevels);
// maxLevels = 99;
//Block scope
function reset() {
    var variable = null;
    console.log(variable);
}
reset();
console.log(variable);
// Arrow Functions
console.log('ARROW FUNCTIONS');
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(10, 4));
var multiplyNumbers = function (number1, number2) {
    return number1 * number2;
};
console.log(multiplyNumbers(10, 4));
