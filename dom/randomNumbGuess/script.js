// const numb = (document.getElementById("randomNumb").innerHTML = Math.floor(
//   Math.random() * 100 + 1
// ));

// const numb = 1;
// function randomNumbGenerate() {
//   let num1 = Number(document.getElementById("numb").value);
//   if (num1 > numb) {
//     document.getElementById("Result1").innerText = "Ih too bn";
//   } else if (num1 < numb) {
//     document.getElementById("Result1").innerText = "Bag too bn";
//   } else {
//     document.getElementById("Result1").innerText = "Congrats";
//   }
// }

// let randomNumb = Math.floor(Math.random() * 100 + 1);
let randomNumb = (document.getElementById("rando").innerText = Math.floor(
  Math.random() * 100 + 1
));
function numbGuesser() {
  let inpNum = Number(document.getElementById("num").value);
  if (inpNum > randomNumb) {
    document.getElementById("result").innerText = "Number is greater";
  } else if (inpNum < randomNumb) {
    document.getElementById("result").innerText = "Number is lesser";
  } else {
    document.getElementById("result").innerText = "Congrats";
  }
}
function resetter() {
  randomNumb = Math.floor(Math.random() * 100 + 1);
  document.getElementById("result").innerText = "";
  document.getElementById("num").value = "";
}
