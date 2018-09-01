var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// Decorators
function logged(constructorFn) {
    console.log(constructorFn);
}
var Person9 = (function () {
    function Person9() {
        console.log('Hi');
    }
    Person9 = __decorate([
        logged
    ], Person9);
    return Person9;
}());
// Factory
function logging(value) {
    return value ? logged : null;
}
var Car9 = (function () {
    function Car9() {
    }
    Car9 = __decorate([
        logging(true)
    ], Car9);
    return Car9;
}());
// Advanced
function printable(constructorFn) {
    constructorFn.prototype.print = function () {
        console.log(this);
    };
}
var Plant9 = (function () {
    function Plant9() {
        this.name = 'Green Plant';
    }
    Plant9 = __decorate([
        logging(false),
        printable
    ], Plant9);
    return Plant9;
}());
var plant9 = new Plant9();
plant9.print();
// Method Decorator
// Property Decorator
function editable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.writable = value;
    };
}
function overwritable(value) {
    return function (target, propName) {
        var newDescriptor = {
            writable: value
        };
        return newDescriptor;
    };
}
var Project9 = (function () {
    function Project9(name) {
        this.projectName = name;
    }
    Project9.prototype.calcBudget = function () {
        console.log(1000);
    };
    __decorate([
        overwritable(false)
    ], Project9.prototype, "projectName", void 0);
    __decorate([
        editable(false)
    ], Project9.prototype, "calcBudget", null);
    return Project9;
}());
var project9 = new Project9('Super Project');
console.log(Project9);
project9.calcBudget();
project9.calcBudget = function () {
    console.log(2000);
};
project9.calcBudget();
// Parameter Decorator
function printInfo(target, methodName, paramIndex) {
    console.log('Target: ', target);
    console.log('methodName ', methodName);
    console.log('paramIndex ', paramIndex);
}
var Course = (function () {
    function Course(name) {
        this.name = name;
    }
    Course.prototype.printStudentNumbers = function (mode, printAll) {
        if (printAll) {
            console.log(10000);
        }
        else {
            console.log(2000);
        }
    };
    __decorate([
        __param(1, printInfo)
    ], Course.prototype, "printStudentNumbers", null);
    return Course;
}());
var course = new Course('Super Course');
course.printStudentNumbers('anything', true);
course.printStudentNumbers('anything', false);
