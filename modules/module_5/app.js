class Person {
    constructor(name, userName) {
        this.userName = userName;
        this.type = "Cool dude";
        this.age = 28;
        this.name = name;
    }
    printAge() {
        console.log(this.age);
        this.setType('Old Guy');
    }
    setType(type) {
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
    constructor(username) {
        super('Anthony', username);
        this.age = 31;
        // console.log(this.type);
    }
}
const anthony = new Anthony('anthony');
console.log(anthony);
//Getters & Setters
class Plant {
    constructor() {
        this._species = "Default";
    }
    get species() {
        return this._species;
    }
    set species(value) {
        if (value.length > 3) {
            this._species = value;
        }
        else {
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
    static calcCircumference(diameter) {
        return this.PI * diameter;
    }
}
Helpers.PI = 3.141592;
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));
//Abstract Classes
class Project {
    constructor() {
        this.projectName = "Default";
        this.budget = 1000;
    }
    calcBudget() {
        return this.budget * 2;
    }
}
class ItProject extends Project {
    changeName(name) {
        this.projectName = name;
    }
}
let newProject = new ItProject();
console.log(newProject);
newProject.changeName("Super IT Project");
console.log(newProject);
//Private Constructors
class OnlyOne {
    constructor(name) {
        this.name = name;
    }
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
