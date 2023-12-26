const root = document.getElementById("root");
const title = document.createElement("h1");
title.innerText = "To-Do-List";
const taskContainer = document.createElement("div");
const input = document.createElement("input");
input.setAttribute("placeholder", "Enter task here...");
input.setAttribute("id", "");

const addButton = document.createElement("button");
addButton.innerText = "Add Task";
const botContainer = document.createElement("div");
botContainer.className = "botContainer";
root.appendChild(title);
root.appendChild(taskContainer);
root.appendChild(botContainer);
taskContainer.appendChild(input);
taskContainer.appendChild(addButton);
addButton.addEventListener("click", addTask);

function addTask() {
  const task = document.createElement("div");
  task.innerText = input.value;
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";

  botContainer.appendChild(task);
  task.appendChild(deleteButton);
  deleteButton.addEventListener("click", deleted);

  function deleted() {
    task.remove();
  }
}
