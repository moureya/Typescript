"use strict";
//string
var myName = 'Anthony';
// myName = 28;
//number
var myAge = 28;
// myAge = 'Anthony';
//boolean
var hasHobbies = true;
// hasHobbies = 1;
//assign types
var myRealAge;
myRealAge = 28;
// myRealAge = '28';
//array
var hobbies = ['Sports', 'Cooking'];
hobbies = [100];
// hobbies = 100;
//tuples
var address = ['Somestreet', 99];
//enum
var Color;
(function (Color) {
    Color[Color["Blue"] = 0] = "Blue";
    Color[Color["Yellow"] = 1] = "Yellow";
    Color[Color["Red"] = 2] = "Red";
})(Color || (Color = {}));
var myColor = Color.Yellow;
console.log(myColor);
//any
var car = 'Chevy';
console.log(car);
car = { brand: 'Chevrolet', model: 'Cruze Eco' };
console.log(car);
//functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
//void
function sayHello() {
    console.log("Hello!");
    // return myName;
}
//argument types
function multiply(value1, value2) {
    return value1 * value2;
}
// console.log(multiply(2, 'Max'));
console.log(multiply(54, 1289));
//function types
var myMultiply;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(2, 10));
//objects
var userData = {
    name: 'Anthony',
    age: 28
};
// userData = {
//     a: 'Hello',
//     b: 22
// };
//complex object
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
//union types
var myRealRealAge = 28;
myRealRealAge = '28';
// myRealRealAge = true;
//check types
var finalValue = 'A string';
if (typeof finalValue == 'string') {
    console.log('Final value is a string');
}
//never
function neverReturns() {
    throw new Error('An error!');
}
//Nullable Types
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
var canThisBeAny = null;
canThisBeAny = 12;
