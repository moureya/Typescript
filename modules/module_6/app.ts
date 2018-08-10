// Importing namespaces from outside files

// /// <reference path="circleMath.ts"/> 
// /// <reference path="rectangleMath.ts"/>

// import CircleMath = MyMath.Circle;
// const PI = 2.99;

// console.log(MyMath.calculateRectangle(10, 20));
// console.log(CircleMath.calculateCircumference(3));


// Importing Modules from outside files
import * as Circle from "./math/circle";
import calc from "./math/rectangle";

console.log(Circle.PI);
console.log(Circle.calculateCircumference(10));
console.log(calc(20, 50));