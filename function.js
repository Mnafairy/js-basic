//function declaration
function doSomething(input) {
  console.log(input);
  return input * input;
}
//function calling
let result = doSomething(15);
console.log(result);

function printHello() {
  console.log("Hello world");
}
function getSomething(input) {
  console.log("Input:", input);
}
function returnSomething() {
  return "Hello World";
}
function getMultiInput(num1, num2) {
  console.log("num1 =", num1);
  console.log("num2 =", num2);
  let sum = num1 + num2;
  return sum;
}
let result = getMultiInput(20, 30);
console.log("sum", result);
getSomething("My text");

function findDay(num) {
  if (num == 1) {
    return "Monday";
  } else if (num == 2) {
    return "Tuesday";
  }
}
let dayInText = findDay(2);
console.log(dayInText);

//find month
function findMonth(day) {
  if (day >= 1 && day <= 31) {
    return "January";
  } else if (day <= 59) {
    return "February";
  } else if (day <= 90) {
    return "March";
  } else if (day <= 120) {
    return "April";
  } else if (day <= 151) {
    return "May";
  } else if (day <= 181) {
    return "June";
  } else if (day <= 212) {
    return "July";
  } else if (day <= 243) {
    return "August";
  } else if (day <= 273) {
    return "September";
  } else if (day <= 304) {
    return "October";
  } else if (day <= 334) {
    return "November";
  } else if (day <= 365) {
    return "December";
  }
}
let midterm1 = 100;
let midterm2 = 100;
let final = 50;
let month = findMonth(235);
console.log(month);

function avg(midterm1, midterm2, final) {
  if (60 > avg) {
    return "F";
  } else if (70 > avg) {
    return "D";
  } else if (80 > avg) {
    return "C", avg;
  } else if (90 > avg) {
    return "B";
  } else if (100 >= avg) {
    return "A";
  }
}

let midterm1 = 100;
let midterm2 = 100;
let final = 50;
// let finalGrade= ( midterm1+midterm2+final)/3
let finalGrade = (midterm1 + midterm2 + final * 2) / 4;
if (60 > finalGrade) {
  console.log("F");
} else if (70 > finalGrade) {
  console.log("D");
} else if (80 > finalGrade) {
  console.log("C", finalGrade);
} else if (90 > finalGrade) {
  console.log("B");
} else if (100 >= finalGrade) {
  console.log("A");
}
