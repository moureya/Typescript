interface NamedPerson {
    firstName: string;
    age?: number;
    [propName: string]: any;
    greet(lastName: string): void;
}

function greetSomeone(person: NamedPerson) {
    console.log("Hello, " + person.firstName);
}

function changeName(person: NamedPerson) {
    human.firstName = "Dani"
}

const human: NamedPerson = {
    firstName: 'Anthony',
    age: 28,
    hobbies: ['Cooking', 'Sports'],
    greet(lastName: string) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    }
};

// greetSomeone({ firstName: "Anthony", age: 28 });
changeName(human);
greetSomeone(human);
human.greet("Mourey");

class Humanoid implements NamedPerson {
    firstName!: string;
    lastName!: string;
    greet(lastName: string) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    };
}

const myPerson = new Humanoid();
myPerson.firstName = "Anthony";
myPerson.lastName = "Mourey";
greetSomeone(myPerson);
myPerson.greet(myPerson.lastName);

// Function Types

interface DoubleValueFunc {
    (number1: number, number2: number): number;
}

let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = function (value1: number, value2: number) {
    return (value1 + value2) * 2;
};

console.log(myDoubleFunction(10, 20));

// Interface Inheritance

interface AgedPerson extends NamedPerson {
    age: number;
}

const oldPerson: AgedPerson = {
    age: 28,
    firstName: 'Anthony',
    greet(lastName: string) {
        console.log("Hello!");
    }
};

console.log(oldPerson);