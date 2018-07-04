// Exercise 1 - How was your TypeScript Class?
class Car {
    constructor(name) {
        this.acceleration = 0;
        this.name = name;
    }
    honk() {
        console.log('Toooooooooot!');
    }
    ;
    accelerate(speed) {
        this.acceleration = this.acceleration + speed;
    }
}
let car1 = new Car('BMW');
car1.honk();
console.log(car1.acceleration);
car1.accelerate(10);
console.log(car1.acceleration);
//Exercise 2 - Two objects, based on each other ...
class baseObject {
    constructor() {
        this.width = 0;
        this.length = 0;
    }
}
;
class Rectangle extends baseObject {
    calcSize() {
        return this.width * this.length;
    }
}
const rectangle = new Rectangle();
rectangle.width = 13;
rectangle.length = 23;
console.log(rectangle.calcSize());
// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
class PersonClass {
    constructor() {
        this._firstName = "";
    }
    get firstName() {
        return this._firstName;
    }
    ;
    set firstName(value) {
        if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = "";
        }
    }
    ;
}
;
const person1 = new PersonClass();
console.log(person1.firstName);
person1.firstName = "Ma";
console.log(person1.firstName);
person1.firstName = "Anthony";
console.log(person1.firstName);
