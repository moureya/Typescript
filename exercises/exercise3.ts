// Exercise 1 - How was your TypeScript Class?
class Car {
    name: string;
    acceleration: number = 0;

    constructor(name: string) {
        this.name = name;
    }

    honk() {
        console.log('Toooooooooot!');
    };
    accelerate(speed: number) {
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
    width = 0;
    length = 0;
};

class Rectangle extends baseObject {
    calcSize(): number {
        return this.width * this.length;
    }
}
const rectangle = new Rectangle();
rectangle.width = 13;
rectangle.length = 23;
console.log(rectangle.calcSize());

// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
class PersonClass {
    private _firstName: string = "";

    get firstName() {
        return this._firstName;
    };

    set firstName(value: string) {
        if (value.length > 3) {
            this._firstName = value;
        } else {
            this._firstName = "";
        }
    };
};

const person1 = new PersonClass();
console.log(person1.firstName);
person1.firstName = "Ma";
console.log(person1.firstName);
person1.firstName = "Anthony";
console.log(person1.firstName);
