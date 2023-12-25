const root = document.getElementById("root");
const header = document.createElement("div");
header.setAttribute("class", "header");

let levelC = 0;
const level = document.createElement("p");
level.innertext = "Level" + levelC;

const startButton = document.createElement("button");
startButton.setAttribute("id", "startButton");
startButton.innerText = "Start";

let chanceC = 3;

const chance = document.createElement("p");
chance.setAttribute("class", "chance");
chance.innerText = "Chance " + chanceC;

header.appendChild(level);
header.appendChild(startButton);
header.appendChild(chance);
const gameBody = document.createElement("div");
gameBody.setAttribute("class", "gameBody");
const boxes = document.createElement("div");
boxes.setAttribute("class", "boxes");
root.appendChild(header);
root.appendChild(gameBody);
startButton.addEventListener("click", startGame);

function addBoxes() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  
}
