// Decorators
function logged(constructorFn: Function) {
  console.log(constructorFn);
}

@logged
class Person9 {
  constructor() {
    console.log('Hi');
  }
}

// Factory
function logging(value: boolean) {
  return value ? logged : null;
}

@logging(true)
class Car9 {}

// Advanced
function printable(constructorFn: Function) {
  constructorFn.prototype.print = function() {
    console.log(this);
  };
}

@logging(false)
@printable
class Plant9 {
  name = 'Green Plant';
}

const plant9 = new Plant9();
(<any>plant9).print();

// Method Decorator
// Property Decorator
function editable(value: boolean) {
  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.writable = value;
  };
}

function overwritable(value: boolean) {
  return function(target: any, propName: string): any {
    const newDescriptor: PropertyDescriptor = {
      writable: value
    };
    return newDescriptor;
  };
}

class Project9 {
  @overwritable(false)
  projectName: string;

  constructor(name: string) {
    this.projectName = name;
  }

  @editable(false)
  calcBudget() {
    console.log(1000);
  }
}

const project9 = new Project9('Super Project');
console.log(Project9);
project9.calcBudget();
project9.calcBudget = function() {
  console.log(2000);
};
project9.calcBudget();

// Parameter Decorator
function printInfo(target: any, methodName: string, paramIndex: number) {
  console.log('Target: ', target);
  console.log('methodName ', methodName);
  console.log('paramIndex ', paramIndex);
}

class Course {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  printStudentNumbers(mode: string, @printInfo printAll: boolean) {
    if (printAll) {
      console.log(10000);
    } else {
      console.log(2000);
    }
  }
}
const course = new Course('Super Course');
course.printStudentNumbers('anything', true);
course.printStudentNumbers('anything', false);
