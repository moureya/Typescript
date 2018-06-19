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
var greet = function () {
    console.log('Hello!');
};
greet();
var greetFriend = function (friend) { return console.log(friend); };
greetFriend('Manu');
//Default Parameters
console.log('DEFAULT PARAMETERS');
var countdown = function (start) {
    if (start === void 0) { start = 10; }
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
var numbers = [1, 10, 99, -5];
console.log(Math.max(33, 99, 10, -3));
console.log(Math.max.apply(Math, numbers));
function makeArray(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return args;
}
console.log(makeArray('Max', 1, 2, 6));
// Descructuring
console.log('DESCTRUCTURING');
var myHobbies = ['Cooking', 'Sports'];
var hobby1 = myHobbies[0], hobby2 = myHobbies[1];
console.log(hobby1, hobby2);
var userData1 = { userName: 'Anthony', age: 28 };
var userName = userData1.userName, age = userData1.age;
console.log(userName, age);
//Template Literals
console.log('TEMPLATE LITERALS');
var firstName = 'Anthony';
var hello = "Hello, my name is " + firstName;
console.log(hello);
