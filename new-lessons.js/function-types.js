function doSomething() {
  console.log(doSomething);
}
let doAnotherThing = () => {
  // Arrow function
  console.log("Doing Anotherthing");
};

() => {}; // Anonymous arrow function
//const - constant a keyword that defines a variable or pointer as unchangeable.

let multiF = (a, b) => {
  return a * b;
};
let sumf = (a, b) => {
  return a + b;
};
const mathOperation = (num1, num2, operation) => {
  return operation(num1, num2);
};
const result = mathOperation(10, 20, multiF);
console.log(result);