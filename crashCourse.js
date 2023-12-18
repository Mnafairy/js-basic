function calc(a, b) {
  return 2 * (a + b);
}
calc(2, 3);
//default parameter
function calc(a, b = 0) {
  return 2 * (a + b);
}
console.log(calc(3));

//rest parameters  rest-rest of it
// rest parameters must be written in the last
function collectThings(x, ...y) {
  console.log(x);
  console.log(y);
}
collectThings(1, 2, 3, 4, 5, 6, 7, 8, 9);

// arrow function
// less syntax code
const add = function (x, y) {
  return x + y;
};
const adds = (x, y) => x + y;

//nested function

function outer() {
  console.log("Outer");
  function inner() {
    console.log("Inner");
  }
  inner();
}

outer();

// function scope
let x = 10;
const y = 20;
var z = 30;
function doSomething() {
  console.log(x, y, z);
}
doSomething();

// Closures
function outer(x) {
  function inner(y) {
    return x + y;
  }
  return inner;
}
const outerReturn = outer(10);
console.log(outerReturn(2));

//callback function
function foo(bar) {
  bar();
}
foo(function () {
  console.log("bar");
});

function named() {
  console.log("bar");
}
foo(named);

function foo(bar) {
  if (itsNight) {
    bar();
  }
  if (isDrinksOverChecksOnLine) {
    bar();
  }
}

//  HOF- Higher order function
// It takes one or more  functions as argument
// It may return a function

function returnFn() {
  return function () {
    console.log("returning");
  };
}
// console.log(returnFn());
const fn = returnFn();
fn();

//pure function 
