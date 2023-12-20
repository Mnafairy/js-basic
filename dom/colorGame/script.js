const root = document.getElementById("root");
const startButton = document.createElement("button");
startButton.innerText = "Start";
root.appendChild(startButton);
const container = document.createElement("div");
root.appendChild(container);
container.setAttribute("id", "container");
startButton.addEventListener("click", startGame);

function startGame() {
  const red = Math.floor(Math.random() * 245) + 10;
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const rando = Math.floor(Math.random() * 9);
  const diffBox = document.createElement("div");
  const differentColor = `rgb(${red - 50},${green},${blue})`;
  diffBox.setAttribute("class", "box");
  diffBox.style.backgroundColor = differentColor;
  for (let i = 1; i < 9; i++) {
      const box = document.createElement("div");
      box.setAttribute("class", "box");
      const randomColor = `rgb(${red},${green},${blue})`;
      box.style.backgroundColor = randomColor;
      container.appendChild(box);
      container.appendChild(diffBox);
    if (rando == i) {
      box.style.backgroundColor = differentColor;
    }
  }
}

// localStorage.setItem("item", [1, 2, 3]);
// console.log(localStorage.getItem("item"));

/**
 * buttsee gargah
 * start button darhad 3x3 box generate hiine
 * 1ungu ni ondoo baih yostoi busad ni adilhan ungiin
 * reset button darhad togloo reset hiigdene
 * amjilttai olson tohioldold shineer 3x3 generate
 */
