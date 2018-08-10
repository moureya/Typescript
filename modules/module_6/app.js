"use strict";
// Importing namespaces from outside files
exports.__esModule = true;
// /// <reference path="circleMath.ts"/> 
// /// <reference path="rectangleMath.ts"/>
// import CircleMath = MyMath.Circle;
// const PI = 2.99;
// console.log(MyMath.calculateRectangle(10, 20));
// console.log(CircleMath.calculateCircumference(3));
// Importing Modules from outside files
var Circle = require("./math/circle");
var rectangle_1 = require("./math/rectangle");
console.log(Circle.PI);
console.log(Circle.calculateCircumference(10));
console.log(rectangle_1["default"](20, 50));
