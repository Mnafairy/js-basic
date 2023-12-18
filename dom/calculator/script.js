// DOM -> document object model
function add() {
  let num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);
  let sum = num1 + num2;
  //   console.log(typeof num1);
  console.log(sum);
  document.getElementById("answer").innerText = sum;
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
}
function subtract() {
  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);
  let subtract = num1 - num2;
  console.log(subtract);
  document.getElementById("answer").innerText = subtract;
}
function multiply() {
  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);
  let multiply = num1 * num2;
  console.log(multiply);
  document.getElementById("answer").innerText = multiply;
}
function divide() {
  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);
  let divide = num1 / num2;
  console.log(divide);
  document.getElementById("answer").innerText = divide;
}


//  <body>
//   <div id="root"></div>
// </body>;
// document.getElementById("root").innerHTML = '<input type="text" class="text">';
// div dotor shine div neej chadna class ugchchadna */}

// arr.push(x)
// Math.floor(9.1); buhel bolgoh
// Math.ceil(9.1); butarhai toog buhel bolgoh
// Math.round(9.5);
// Math.max(10,20); ihiig ni oloh
// Math.pow(3,4); zereg avah
