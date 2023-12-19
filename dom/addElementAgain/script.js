const root = document.getElementById("root");
const container = document.createElement("div");
container.setAttribute("id", "container");
const button = document.createElement("button");
button.setAttribute("onclick", `createBox()`);
root.appendChild(button);
root.appendChild(container);
button.innerText = "Add";

let count1 = 0;
function createBox() {
  const box = document.createElement("div");
  box.setAttribute("class", "box");
  let count = document.createElement("p");
  box.appendChild(count);
  count.innerText = count1;
  container.appendChild(box);
  count1 = count1 + 1;
  return box;
}
