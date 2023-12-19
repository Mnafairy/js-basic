let num1 = (document.getElementById("num1").value = Math.floor(
  Math.random() * 100 + 1
));
let num2 = (document.getElementById("num2").value = Math.floor(
  Math.random() * 100 + 1
));
function sumN() {
  let sum = num1 + num2;
  if (Number(document.getElementById("sum").value) == sum) {
    alert("Answer is correct");
  } else alert("Answer is wrong");
}

function renew() {
  num1 = document.getElementById("num1").value = Math.floor(
    Math.random() * 100 + 1
  );
  num2 = document.getElementById("num2").value = Math.floor(
    Math.random() * 100 + 1
  );
  document.getElementById("sum").value = "";
}
