let num1 = (document.getElementById("num1").value = Math.floor(
  Math.random() * 100 + 1
));
let num2 = (document.getElementById("num2").value = Math.floor(
  Math.random() * 100 + 1
));
// document.getElementById("sum").value = num1 + num2;

// function sumN() {
//   document.getElementById("sum").value = num1 + num2;
//   let sum = document.getElementById("sum").value;
//   if (num1 + num2 == sum) {
//     document.getElementById("result").innerText = "True";
//   } else num1 + num2 != sum;
//   document.getElementById("result").innerText = "False";
// }

function sumN() {
  let sum = num1 + num2;
  if (Number(document.getElementById("sum").value) == sum) {
    document.getElementById("result").innerText = "True";
  } else 
//   Number(document.getElementById("sum").value) != sum;
  document.getElementById("result").innerText = "False";
}

function renew() {
  num1 = document.getElementById("num1").value = Math.floor(
    Math.random() * 100 + 1
  );
  num2 = document.getElementById("num2").value = Math.floor(
    Math.random() * 100 + 1
  );
}
