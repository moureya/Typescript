class Person {
    name: string;
    private type: string = "Cool dude";
    protected age: number = 28;

    constructor(name: string, public userName: string) {
        this.name = name;
    }

    printAge() {
        console.log(this.age);
        this.setType('Old Guy');
    }

    private setType(type: string) {
        this.type = type;
        console.log(this.type);
    }
}

const person = new Person('Anthony', 'amourey');
console.log(person.name, person.userName);
person.printAge();
// person.setType('Cool guy'); Won't work with private method

//Inheritance
class Anthony extends Person {
    // name = 'Anthony';

    constructor(username: string) {
        super('Anthony', username);
        this.age = 31;
        // console.log(this.type);
    }
}
const anthony = new Anthony('anthony');
console.log(anthony);

//Getters & Setters
class Plant {
    private _species: string = "Default";

    get species() {
        return this._species;
    }

    set species(value: string) {
        if (value.length > 3) {
            this._species = value;
        } else {
            this._species = "Default";
        }
    }
}

let plant = new Plant();
console.log(plant.species);
plant.species = "AB";
console.log(plant.species);
plant.species = "Hibiscus";
console.log(plant.species);

// Static Properties & Methods
class Helpers {
    static PI: number = 3.141592;
    static calcCircumference(diameter: number): number {
        return this.PI * diameter;
    }
}
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));

//Abstract Classes
abstract class Project {
    projectName: string = "Default";
    budget: number = 1000;

    abstract changeName(name: string): void;

    calcBudget() {
        return this.budget * 2;
    }
}

class ItProject extends Project {
    changeName(name: string): void {
        this.projectName = name;
    }
}

let newProject = new ItProject();
console.log(newProject);
newProject.changeName("Super IT Project");
console.log(newProject);

//Private Constructors
class OnlyOne {
    private static instance: OnlyOne;

    private constructor(public readonly name: string) { }

    static getInstance() {
        {
            if (!OnlyOne.instance) {
                OnlyOne.instance = new OnlyOne('The Only One');
            }
            return OnlyOne.instance;
        }
    }
}
// let wrong = new OnlyOne('The Only One');
let correct = OnlyOne.getInstance();
console.log(correct.name);
// right.name = 'Something else';