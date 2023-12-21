const root = document.getElementById("root");
const container = document.createElement("div");
container.setAttribute("id", "container");
const number = document.createElement("div");
number.setAttribute("id", "result");
const numpad = document.createElement("div");
numpad.setAttribute("id", "numpad");
root.appendChild(container);
container.appendChild(number);
container.appendChild(numpad);

function createNumpad() {
  for (let i = 0; i < 19; i++) {
    const pad = document.createElement("button");
    pad.setAttribute("class", "pad");
    pad.setAttribute("id", `pad${i}`);
    numpad.appendChild(pad);
  }
}
createNumpad();

const ac = document.getElementById("pad0");
ac.innerText = "";
