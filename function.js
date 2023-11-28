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
let month = findMonth(235);
console.log(month);

let day = 32;
if (day >= 1 && day <= 31) {
  console.log("January");
} else if (day <= 59) {
  console.log("February");
} else if (day <= 90) {
  console.log("March");
} else if (day <= 120) {
  console.log("April");
} else if (day <= 151) {
  console.log("May");
} else if (day <= 181) {
  console.log("June");
} else if (day <= 212) {
  console.log("July");
} else if (day <= 243) {
  console.log("August");
} else if (day <= 273) {
  console.log("September");
} else if (day <= 304) {
  console.log("October");
} else if (day <= 334) {
  console.log("November");
} else if (day <= 365) {
  console.log("December");
} else "error";
