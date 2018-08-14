function greetSomeone(person) {
    console.log("Hello, " + person.firstName);
}
function changeName(person) {
    human.firstName = "Dani";
}
var human = {
    firstName: 'Anthony',
    age: 28,
    hobbies: ['Cooking', 'Sports'],
    greet: function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    }
};
// greetSomeone({ firstName: "Anthony", age: 28 });
changeName(human);
greetSomeone(human);
human.greet("Mourey");
var Humanoid = /** @class */ (function () {
    function Humanoid() {
    }
    Humanoid.prototype.greet = function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    };
    ;
    return Humanoid;
}());
var myPerson = new Humanoid();
myPerson.firstName = "Anthony";
myPerson.lastName = "Mourey";
greetSomeone(myPerson);
myPerson.greet(myPerson.lastName);
var myDoubleFunction;
myDoubleFunction = function (value1, value2) {
    return (value1 + value2) * 2;
};
console.log(myDoubleFunction(10, 20));
var oldPerson = {
    age: 28,
    firstName: 'Anthony',
    greet: function (lastName) {
        console.log("Hello!");
    }
};
console.log(oldPerson);
