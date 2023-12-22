const root = document.querySelector("#root");
//container
const container = document.createElement("div");
container.setAttribute("class", "container");
//number
const number = document.createElement("div");
number.setAttribute("class", "number");
number.innerText = 0;
//numpad
const numpad = document.createElement("div");
numpad.setAttribute("class", "numpad");

root.appendChild(container);
container.appendChild(number);
container.appendChild(numpad);

let content = [
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
for (let i = 0; i < content.length; i++) {
  //button
  const button = document.createElement("div");
  button.setAttribute("class", "button");
  button.setAttribute("id", i);
  numpad.appendChild(button);
  button.innerText = content[i];
  button.addEventListener("click", () => {});
}
