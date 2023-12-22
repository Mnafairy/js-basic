/**
 * <div class="header">
        <p>Level</p>
        <button id="startButton">Start</button>
        <p>Score</p>
      </div>
      <div class="gameBody">
        <div class="boxes">
          <div class="box"></div>
        </div>
      </div>
 */
const root = document.getElementById("root");
const header = document.createElement("div");
header.setAttribute("class", "header");

let levelC = 0;

const level = document.createElement("p");
level.innerText = "Level " + levelC;

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
  const blue = Math.floor(Math.random() * 255);
  const randomColor = `rgb(${red}, ${green}, ${blue})`;
  const random = Math.floor(Math.random() * 8);

  for (i = 0; i < 9; i++) {
    let box = document.createElement("div");
    box.setAttribute("class", "box");
    box.setAttribute("id", i);
    if (i == random) {
      box.style.backgroundColor = `rgb(${red - 50}, ${green}, ${blue})`;
    } else {
      box.style.backgroundColor = randomColor;
    }
    boxes.appendChild(box);

    box.addEventListener("click", (e) => {
      let boxId = e.target.id;
      if (boxId == random) {
        levelC++;
        boxes.innerHTML = "";
        level.innerText = "Level " + levelC;
        if (levelC == 5) {
          gameBody.innerHTML = "WIN";
        } else {
          addBoxes();
        }
      } else {
        chanceC--;
        if (chanceC == 0) {
          gameBody.innerHTML = "LOSE";
        }
        chance.innerText = "Chance " + chanceC;
      }
    });
  }

  gameBody.appendChild(boxes);
}

function startGame() {
  levelC = 0;
  level.innerText = "Level " + levelC;
  chanceC = 3;
  chance.innerText = "Chance " + chanceC;
  boxes.innerHTML = "";
  gameBody.innerHTML = "";
  addBoxes();
}
