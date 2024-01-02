const root = document.getElementById("root");
const boards = document.createElement("div");
boards.className = "boards";

let todo = [];
let inProgress = [];
let stuck = [];
let done = [];

const boardTitle = [
  { title: "To do", id: "todo" },
  { title: "In progress", id: "inProgress" },
  { title: "Stuck", id: "stuck" },
  { title: "Done", id: "done" },
];
// creating modal for add task

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

root.appendChild(modal);
modal.appendChild(h2);
modal.appendChild(modalP);
modal.appendChild(title);
modal.appendChild(modalPa);
modal.appendChild(description);
modal.appendChild(labelStat);
modal.appendChild(selectStat);

//map for option dropdown
boardTitle.map((e) => {
  const option = document.createElement("option");
  option.setAttribute("value", e.id);
  option.innerText = e.title;
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
//add task button
const submitBtn = document.createElement("input");
// submitBtn.setAttribute("type", "submit");
submitBtn.setAttribute("type", "button");
submitBtn.value = "Add task";
modal.appendChild(submitBtn);

submitBtn.addEventListener("click", () => {
  let cards = document.querySelector("#todo");
  cards.innerHTML = "";
  todo.push({
    title: title.value,
    description: description.value,
    priority: selectPrio.value,
  });
  document.querySelector(".count").innerText = `${todo.length}`;

  console.log(todo);
  todo.map((e) => {
    const card = document.createElement("div");
    card.className = "card";
    const checkmark = document.createElement("div");
    checkmark.className = "checkmark";
    const checkIcon = document.createElement("i");
    checkIcon.setAttribute("class", "fa-solid fa-check fa-sm");
    checkmark.appendChild(checkIcon);
    const cardTxt = document.createElement("div");
    cardTxt.className = "cardText";
    const cardStatus = document.createElement("h4");
    cardStatus.innerText = e.title;
    const cardDesc = document.createElement("p");
    cardDesc.innerText = e.description;
    const rightDiv = document.createElement("div");
    rightDiv.className = "rightBtn";
    const deleteBtn = document.createElement("div");
    deleteBtn.setAttribute("class", "deleteBtn");
    const deleteIcon = document.createElement("i");
    deleteIcon.setAttribute("class", "fa-regular fa-x fa-xs");
    deleteBtn.appendChild(deleteIcon);
    const editBtn = document.createElement("div");
    editBtn.setAttribute("class", "editBtn");
    const editIcon = document.createElement("i");
    editIcon.setAttribute("class", "fa-solid fa-pen-to-square fa-sm");
    editBtn.appendChild(editIcon);
    const prio = document.createElement("div");
    prio.setAttribute("class", "prio");
    prio.innerText = e.priority;
    card.appendChild(checkmark);
    cardTxt.appendChild(cardStatus);
    cardTxt.appendChild(cardDesc);
    cardTxt.appendChild(prio);
    card.appendChild(cardTxt);
    rightDiv.appendChild(deleteBtn);
    rightDiv.appendChild(editBtn);
    card.appendChild(rightDiv);
    cards.appendChild(card);
  });
  closeModal();
});

//overlay
const overlay = document.createElement("div");
overlay.setAttribute("class", "overlay hidden");
root.appendChild(overlay);
root.appendChild(boards);

//OpenModal function
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
//CloseModal function
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  title.value = "";
  description.value = "";
};
overlay.addEventListener("click", closeModal);

// creating 4 board
const addBoard = () => {
  boardTitle.map((e) => {
    const board = document.createElement("div");
    board.className = "board";
    const boardHeader = document.createElement("div");
    boardHeader.className = "boardHeader";
    const headerTitle = document.createElement("h3");
    headerTitle.innerText = e.title;
    //count
    const count = document.createElement("span");
    count.className = "count";
    count.innerText = "0";
    boardHeader.appendChild(headerTitle);
    boardHeader.appendChild(count);
    board.appendChild(boardHeader);
    //cards
    const cards = document.createElement("div");
    cards.className = "cards";
    cards.setAttribute("id", e.id);
    board.appendChild(cards);
    //addBtn
    const addBtn = document.createElement("div");
    addBtn.className = "addBtn";
    const addCard = document.createElement("div");
    addBtn.addEventListener("click", openModal);
    addCard.innerText = `+ Add card`;
    addBtn.appendChild(addCard);
    board.appendChild(addBtn);
    //over
    const over = document.createElement("div", openModal);
    over.className = "over";
    board.appendChild(over);

    boards.appendChild(board);
  });
};
addBoard();
