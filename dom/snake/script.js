const width = 20;
let height = 20;
const root = document.getElementById("root");
let multiArr = [];
for (let i = 0; i < 40; i++) {
  let row = [];
  for (let j = 0; j < 40; j++) {
    row.push(j);
  }
  multiArr.push(row);
}
console.log(multiArr);

function drawInterface() {
  const container = document.createElement("div");
  container.setAttribute("class", "container");
  for (let i = 0; i < multiArr.length; i++) {
    for (let j = 0; j < i < multiArr[i].length; j++) {
      const newBox = document.createElement("div");
      newBox.setAttribute("class", "box");
      newBox.setAttribute("id", i + 1);
      container.appendChild(newBox);
    }
  }
  root.appendChild(container);
}
drawInterface();
function mySnake() {
  let length = 5;
  let snakePos = [
    [20, 20],
    [20, 21],
    [20, 22],
    [21, 22],
    [22, 22],
  ];
  let direction = `left`;
}
