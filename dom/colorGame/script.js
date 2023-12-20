const root = document.getElementById("root");
const startButton = document.createElement("button");
startButton.innerText = "Start";
root.appendChild(startButton);

startButton.addEventListener("click", startGame);

function startGame() {
  const box = document.createElement("div");
  const diffBox = document.createElement("div");
  const red = Math.floor(Math.random() * 245) + 10;
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const randomColor = `rgb(${red},${green},${blue})`;
  const differentColor = `rgb(${red - 10},${green},${blue})`;

  box.setAttribute("class", "box");
  diffBox.setAttribute("class", "box");
  box.style.backgroundColor = randomColor;
  diffBox.style.backgroundColor = differentColor;
  root.appendChild(box);
  root.appendCHild(diffBox);
}

// localStorage.setItem("item", [1, 2, 3]);
// console.log(localStorage.getItem("item"));

/**
 * buttsee gargah
 * start button darhad 3x3 box generate hiine
 * 1ungu ni ondoo baih yostoi busad ni adilhan ungiin
 * reset button darhad togloo reset hiigdene
 * amjilttai olson tohioldold shineer 3x3 generate
