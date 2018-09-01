// Simple Generic
function echo(data: any) {
  return data;
}

console.log(echo('Anthony'));
console.log(echo(28));
console.log(echo({ name: 'Anthony', age: 28 }));

// Better Generic
function betterEcho<T>(data: T) {
  //Using <T> is a way to get Typescript to find what the type is automatically
  return data;
}

console.log(betterEcho('Anthony').length);
console.log(betterEcho<number>(28));
console.log(betterEcho({ name: 'Anthony', age: 28 }));

// Built-in Generics
const testResults8: Array<number> = [1.94, 2.33];
testResults8.push(-2.99);
console.log(testResults8);

// Arrays
function printAll<T>(args: T[]) {
  args.forEach(element => console.log(element));
}
printAll<string>(['Apple', 'Banana']);

// Generic Types
const echo2: <T>(data: T) => T = betterEcho;

console.log(echo2<string>('Something'));

// Generic Class
class SimpleMath<T extends number | string, U extends number | string> {
  baseValue!: T;
  multiplyValue!: U;
  calculate(): number {
    return +this.baseValue * +this.multiplyValue;
  }
}

const simpleMath = new SimpleMath<string, number>();
simpleMath.baseValue = '10';
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());
