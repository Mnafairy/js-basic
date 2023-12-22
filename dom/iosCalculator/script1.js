let root = document.querySelector("#root");
let calc = document.createElement("div");
calc.className = "calc";
root.appendChild(calc);
let display = document.createElement("div");
display.className = "display";
calc.appendChild(display);
let text = document.createElement("p");
display.appendChild(text);
let btnCont = document.createElement("div");
btnCont.className = "buttonContainer";
calc.appendChild(btnCont);
let num1 = "";
let num2 = "";
let answer="";
content = [
  "AC",
  "+/-",
  "%",
  "/",
  "7",
  "8",
  "9",
  "x",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
  "=",
];
const writeOnClick = (a) => {
  text.innerText += a;
};
const reset = () => {
  text.innerText = "";
  num1="";
};
const checkNum = (num) => {
  let result = false;
  let n = Number(num);
  for (let i = 0; i < 10; i++) {
    n === i ? (result = true) : null;
  }
  !(answer=="") ? text.innerText="" : null
  return result;
};
const checkOp = (op) => {
  let result = "";
  op == "/" || op == "x" || op == "-" || op == "+" ? (result = true) : null;
  return result;
};
const nextNum = () => {
  if(!(num1=="")){
    calculate();
  } else{
    num1 = Number(text.innerHTML)
    text.innerHTML = "";
  }
};
const calculate = () => {
  num2 = Number(text.innerHTML);
  answer = num1 + num2;
  text.innerText = answer;
  num1= text.innerText
};
for (let i = 0; i < 19; i++) {
  let btn = document.createElement("div");
  btn.innerText = content[i];
  btn.id = i;
  btnCont.appendChild(btn);
  i == 16
    ? (btn.className = "calcButton wide")
    : (btn.className = "calcButton");
  btn.addEventListener("click", () => {
    checkNum(btn.innerText) || i == 17
      ? writeOnClick(btn.innerText)
      : checkOp(btn.innerText)
      ? nextNum()
      : i == 18
      ? calculate()
      : i == 0
      ? reset(btn)
      : i == 1
      ? negate(btn)
      : null;
  });
}
 