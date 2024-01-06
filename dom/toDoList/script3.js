const root = document.getElementById("root");
const boards = document.createElement("div");
boards.className = "boards";
root.appendChild(boards);

// add task darhad 5 key tei object uud ene array luu nemegdej baih
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
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

let count = 0;
const statusArr = ["todo", "inprogress", "stuck", "done"];
//array dotor baigaa object uudiig status aar ni yalgaj card uusgene

// const todoCard = document.querySelector("#todo");
function renderTasks(list) {
  boards.innerHTML = "";
  // cards.innerHTML = "";
  const taskTodo = list.filter((todo) => {
    return todo.status == "todo";
  });
  // const todoStatusDiv = document.createElement("div");
  // todoStatusDiv.setAttribute("class", "board");
  const board = document.createElement("div");
  board.className = "board";
  const boardHeader = document.createElement("div");
  boardHeader.className = "boardHeader";
  const headerTitle = document.createElement("h3");
  headerTitle.innerText = "To do";
  //count
  const countTodo = document.createElement("span");
  countTodo.className = "count";
  countTodo.innerText = taskTodo.length;
  boardHeader.appendChild(headerTitle);
  boardHeader.appendChild(countTodo);
  board.appendChild(boardHeader);
  //cards
  const cards = document.createElement("div");
  cards.className = "cards";
  cards.setAttribute("id", "todo");
  board.appendChild(cards);
  //addBtn
  const addBtn = document.createElement("div");
  addBtn.className = "addBtn";
  const addCard = document.createElement("div");
  addBtn.addEventListener("click", openModal);
  addCard.innerText = `+ Add card`;
  addBtn.appendChild(addCard);
  board.appendChild(addBtn);
  taskTodo.map((task) => {
    const newTask = createTask(task);
    cards.appendChild(newTask);
    boards.appendChild(board);
  });
  // debugger

  const taskInProgress = list.filter((todo) => {
    return todo.status == "inprogress";
  });
  // const InProgressStatusDiv = document.createElement("div");
  // InProgressStatusDiv.setAttribute("class", "board");
  const board1 = document.createElement("div");
  board1.className = "board";
  const boardHeader1 = document.createElement("div");
  boardHeader1.className = "boardHeader";
  const headerTitle1 = document.createElement("h3");
  headerTitle1.innerText = "In Progress ";
  //count
  const countInprogress = document.createElement("span");
  countInprogress.className = "count";
  countInprogress.innerText = taskInProgress.length;
  boardHeader1.appendChild(headerTitle1);
  boardHeader1.appendChild(countInprogress);
  board1.appendChild(boardHeader1);
  //cards
  const cards1 = document.createElement("div");
  cards1.className = "cards";
  cards1.setAttribute("id", "inprogress");
  board1.appendChild(cards1);
  //addBtn
  const addBtn1 = document.createElement("div");
  addBtn1.className = "addBtn";
  const addCard1 = document.createElement("div");
  addBtn1.addEventListener("click", openModal);
  addCard1.innerText = `+ Add card`;
  addBtn1.appendChild(addCard1);
  board1.appendChild(addBtn1);

  taskInProgress.map((task) => {
    const newTask = createTask(task);

    cards1.appendChild(newTask);
    boards.appendChild(board1);
  });

  const taskStuck = list.filter((todo) => {
    return todo.status == "stuck";
  });
  // const stuckStatusDiv = document.createElement("div");
  // stuckStatusDiv.setAttribute("class", "board");
  const board2 = document.createElement("div");
  board2.className = "board";
  const boardHeader2 = document.createElement("div");
  boardHeader2.className = "boardHeader";
  const headerTitle2 = document.createElement("h3");
  headerTitle2.innerText = "Stuck";
  //count
  const countStuck = document.createElement("span");
  countStuck.className = "count";
  countStuck.innerText = taskStuck.length;
  boardHeader2.appendChild(headerTitle2);
  boardHeader2.appendChild(countStuck);
  board2.appendChild(boardHeader2);
  //cards
  const cards2 = document.createElement("div");
  cards2.className = "cards";
  cards2.setAttribute("id", "stuck");
  board2.appendChild(cards2);
  //addBtn
  const addBtn2 = document.createElement("div");
  addBtn2.className = "addBtn";
  const addCard2 = document.createElement("div");
  addBtn2.addEventListener("click", openModal);
  addCard2.innerText = `+ Add card`;
  addBtn2.appendChild(addCard2);
  board2.appendChild(addBtn2);

  taskStuck.map((task) => {
    const newTask = createTask(task);

    cards2.appendChild(newTask);
    boards.appendChild(board2);
  });

  const taskDone = list.filter((todo) => {
    return todo.status == "done";
  });
  // const doneStatusDiv = document.createElement("div");
  // doneStatusDiv.setAttribute("class", "board");
  const board3 = document.createElement("div");
  board3.className = "board";
  const boardHeader3 = document.createElement("div");
  boardHeader3.className = "boardHeader";
  const headerTitle3 = document.createElement("h3");
  headerTitle3.innerText = "Done";
  //count
  const countDone = document.createElement("span");
  countDone.className = "count";
  countDone.innerText = taskDone.length;
  boardHeader3.appendChild(headerTitle3);
  boardHeader3.appendChild(countDone);
  board3.appendChild(boardHeader3);
  //cards
  const cards3 = document.createElement("div");
  cards3.className = "cards";
  cards3.setAttribute("id", "done");
  board3.appendChild(cards3);
  //addBtn
  const addBtn3 = document.createElement("div");
  addBtn3.className = "addBtn";
  const addCard3 = document.createElement("div");
  addBtn3.addEventListener("click", openModal);
  addCard3.innerText = `+ Add card`;
  addBtn3.appendChild(addCard3);
  board3.appendChild(addBtn3);

  taskDone.map((task) => {
    const newTask = createTask(task);

    cards3.appendChild(newTask);
    boards.appendChild(board3);
  });
}
function createTask(task) {
  const card = document.createElement("div");
  // card.setAttribute("")
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
  // edit button eventlistener
  // editIcon.setAttribute("id", `${task.id}`);
  // editIcon.addEventListener("click", (edit) => {
  //   editTask(edit.target.id);
  // });

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
//   openModal();
//   taskArr = taskArr.map((task) => {
//     if (task.id == id) {
//       return {
//         ...task,
//         // title: title.value,
//         // description: description.value,
//         // status: selectStat.value,
//         // priority: selectPrio.value,
//       };
//     } else {
//       return task;
//     }
//   });
//   renderTasks(taskArr);
// }
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  title.value = "";
  description.value = "";
};

// modal creating
const modal = document.createElement("div");
modal.setAttribute("class", "modal hidden");
const h2 = document.createElement("h2");
h2.innerText = "Add Task";
const modalP = document.createElement("p");
modalP.innerText = "Title";
//title
const title = document.createElement("input");
title.setAttribute("id", "title");
const modalPa = document.createElement("p");
modalPa.innerText = "Description";
//description
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
statusArr.map((e) => {
  const option = document.createElement("option");
  option.setAttribute("value", e);
  option.innerText = e;
  selectStat.appendChild(option);
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
//overlay
const overlay = document.createElement("div");
overlay.setAttribute("class", "overlay hidden");
root.appendChild(overlay);
root.appendChild(boards);
overlay.addEventListener("click", closeModal);
//add task button
const addBtn5 = document.createElement("input");
addBtn5.setAttribute("type", "button");
addBtn5.value = "Add task";
modal.appendChild(addBtn5);
root.appendChild(modal);

addBtn5.addEventListener("click", () => {
  count = count + 1;
  if (title.value == "" && description.value == "") {
    null;
  } else {
    taskArr.push({
      title: title.value,
      description: description.value,
      status: selectStat.value,
      priority: selectPrio.value,
      id: count,
    });
  }
  closeModal();
  renderTasks(taskArr);
});

renderTasks(taskArr);

// 1. create boards-cardsDiv
// 2. create the main array or 4 arrays
// 3. addTask() - push to Array + render()()
// render() - boards-cardsDiv = "" (const allCards=using querySelectorAll)
// rednder() - array.map() -
