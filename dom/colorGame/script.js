const root = document.getElementById("root");
const startButton = document.createElement("button");
startButton.innerText = "Start";
root.appendChild(startButton);
const container = document.createElement("div");
root.appendChild(container);
container.setAttribute("id", "container");
startButton.addEventListener("click", startGame);

function createBox() {
  const red = Math.floor(Math.random() * 245) + 10;
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const rando = Math.floor(Math.random() * 8);
  const diffBox = document.createElement("div");
  const differentColor = `rgb(${red - 50},${green},${blue})`;

  diffBox.setAttribute("class", "box");

  for (let i = 0; i < 8; i++) {
    const box = document.createElement("div");
    box.setAttribute("class", "box");
    box.style.backgroundColor = `rgb(${red},${green},${blue})`;
    container.appendChild(box);
    if (rando == i) {
      diffBox.style.backgroundColor = differentColor;
      container.appendChild(diffBox);
    }
  }
}
function startGame() {
  container.innerHTML = "";
  container.appendChild(createBox());
}

// localStorage.setItem("item", [1, 2, 3]);
// console.log(localStorage.getItem("item"));
