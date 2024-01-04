const root = document.getElementById("root");
const boards = document.createElement("div");
boards.className = "boards";
root.appendChild(boards);

let taskArr = [
  {
    title: "Task1",
    description: "task1",
    status: "todo",
    priority: "high",
    id: 1,
  },
  {
    title: "Task2",
    description: "task2",
    status: "inprogress",
    priority: "high",
    id: 2,
  },
  {
    title: "Task3",
    description: "task3",
    status: "stuck",
    priority: "high",
    id: 3,
  },
  {
    title: "Task4",
    description: "task4",
    status: "done",
    priority: "high",
    id: 4,
  },
  {
    title: "Task5",
    description: "task5",
    status: "done",
    priority: "high",
    id: 5,
  },
];

function renderTasks(list) {
  boards.innerHTML = "";

  const taskTodo = list.filter((todo) => {
    return todo.status == "todo";
  });
  const todoStatusDiv = document.createElement("div");
  todoStatusDiv.setAttribute("class", "board");

  taskTodo.map((task) => {
    const newTask = createTask(task);

    todoStatusDiv.appendChild(newTask);
    boards.appendChild(todoStatusDiv);
  });

  const taskInProgress = list.filter((todo) => {
    return todo.status == "inprogress";
  });

  const InProgressStatusDiv = document.createElement("div");
  InProgressStatusDiv.setAttribute("class", "board");

  taskInProgress.map((task) => {
    const newTask = createTask(task);

    InProgressStatusDiv.appendChild(newTask);
    boards.appendChild(InProgressStatusDiv);
  });

  const taskStuck = list.filter((todo) => {
    return todo.status == "stuck";
  });
  const stuckStatusDiv = document.createElement("div");
  stuckStatusDiv.setAttribute("class", "board");

  taskStuck.map((task) => {
    const newTask = createTask(task);

    stuckStatusDiv.appendChild(newTask);
    boards.appendChild(stuckStatusDiv);
  });

  const taskDone = list.filter((todo) => {
    return todo.status == "done";
  });
  const doneStatusDiv = document.createElement("div");
  doneStatusDiv.setAttribute("class", "board");

  taskDone.map((task) => {
    const newTask = createTask(task);

    doneStatusDiv.appendChild(newTask);
    boards.appendChild(doneStatusDiv);
  });
}
function createTask(task) {
  const card = document.createElement("div");
  card.className = "card";
  //checkmark
  const checkmark = document.createElement("div");
  checkmark.className = "checkmark";
  const checkIcon = document.createElement("i");
  checkIcon.setAttribute("class", "fa-solid fa-check fa-sm");
  checkmark.appendChild(checkIcon);
  //card text containing div
  const cardTxt = document.createElement("div");
  cardTxt.className = "cardText";
  //task title
  const cardStatus = document.createElement("h4");
  //description
  const cardDesc = document.createElement("p");
  //right side buttons
  const rightDiv = document.createElement("div");
  rightDiv.className = "rightBtn";
  //delete button
  const deleteBtn = document.createElement("div");
  deleteBtn.setAttribute("class", "deleteBtn");
  deleteBtn.innerText = "X";
  //   const deleteIcon = document.createElement("i");
  //   deleteIcon.setAttribute("class", "fa-regular fa-x fa-xs");
  //   deleteBtn.appendChild(deleteIcon);
  // edit button
  const editBtn = document.createElement("div");
  editBtn.setAttribute("class", "editBtn");
  const editIcon = document.createElement("i");
  editIcon.setAttribute("class", "fa-solid fa-pen-to-square fa-sm");
  editBtn.appendChild(editIcon);
  // priority
  const prio = document.createElement("div");
  prio.setAttribute("class", "prio");
  //delete button eventlistener
  deleteBtn.setAttribute("id", `${task.id}`);
  deleteBtn.addEventListener("click", (event) => {
    deleteTask(event.target.id);
  });
  //edit button eventlistener
  //   editBtn.setAttribute("id", `${task.id}`);
  //   editBtn.addEventListener("click", (edit) => {
  //     editTask(edit.target.id);
  //   });

  cardStatus.innerText = task.title;
  cardDesc.innerText = task.description;
  prio.innerText = task.priority;

  card.appendChild(checkmark);
  cardTxt.appendChild(cardStatus);
  cardTxt.appendChild(cardDesc);
  cardTxt.appendChild(prio);
  card.appendChild(cardTxt);
  rightDiv.appendChild(deleteBtn);
  rightDiv.appendChild(editBtn);
  card.appendChild(rightDiv);

  return card;
}
function deleteTask(id) {
  taskArr = taskArr.filter((task) => {
    return task.id != id;
  });
  renderTasks(taskArr);
}

// function editTask(id) {
//   taskArr = taskArr.map((task) => {
//     if (task.id == id) {
//       return {
//         ...task,
//       };
//     } else {
//       return task;
//     }
//   });
//   renderTasks(taskArr);
// }

renderTasks(taskArr);
for (let i = 0; i < taskArr.length; i++) {}

taskArr.push({
//   title: ,
  description: "task1",
  status: "todo",
  priority: "high",
  id: `${i}`,
});
//modal creating
const modal = document.createElement("div");
modal.setAttribute("class", "modal hidden");
const h2 = document.createElement("h2");
h2.innerText = "Add Task";
const modalP = document.createElement("p");
modalP.innerText = "Title";
const title = document.createElement("input");
title.setAttribute("id", "title");
const modalPa = document.createElement("p");
modalPa.innerText = "Description";
const description = document.createElement("input");
description.setAttribute("id", "description");
const labelStat = document.createElement("label");
labelStat.setAttribute("name", "status");
labelStat.innerText = "Status";
//selectStat
const selectStat = document.createElement("select");
selectStat.setAttribute("name", "status");
selectStat.setAttribute("id", "status");

modal.appendChild(h2);
modal.appendChild(modalP);
modal.appendChild(title);
modal.appendChild(modalPa);
modal.appendChild(description);
modal.appendChild(labelStat);
modal.appendChild(selectStat);
root.appendChild(modal);

//map for option dropdown
let statusArr = ["todo", "inprogress", "stuck", "done"];
statusArr.map((e) => {
  // for (let i = 0; i < boardTitle.length; i++) {
  const option = document.createElement("option");
  option.setAttribute("value", e);
  option.innerText = e;
  selectStat.appendChild(option);
  // }
});

const labelPrio = document.createElement("label");
labelPrio.setAttribute("name", "priority");
labelPrio.innerText = "Priority";
modal.appendChild(labelPrio);
const selectPrio = document.createElement("select");
selectPrio.setAttribute("name", "priority");
selectPrio.setAttribute("id", "priority");
modal.appendChild(selectPrio);

//loop for priority
const arrPrio = ["low", "medium", "high"];
for (let i = 0; i < arrPrio.length; i++) {
  const option = document.createElement("option");
  option.setAttribute("value", arrPrio[i]);
  option.innerText = arrPrio[i];
  selectPrio.appendChild(option);
}
//add task button
const addBtn = document.createElement("input");
addBtn.setAttribute("type", "button");
addBtn.value = "Add task";
modal.appendChild(addBtn);
root.appendChild(modal);
