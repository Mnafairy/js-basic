const root = document.getElementById("root");
const boards = document.createElement("div");
boards.className = "boards";

const boardTitle = [
  { title: "To do", id: "toDo" },
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

const arrPrio = ["low", "medium", "high"];
for (let i = 0; i < arrPrio.length; i++) {
  const option = document.createElement("option");
  option.setAttribute("value", `${arrPrio[i]}`);
  option.innerText = arrPrio[i];
  selectPrio.appendChild(option);
}
const submitBtn = document.createElement("button");
submitBtn.setAttribute("type", "submit");
submitBtn.innerText = "Add task";
modal.appendChild(submitBtn);

const overlay = document.createElement("div");
overlay.setAttribute("class", "overlay hidden");
root.appendChild(overlay);
root.appendChild(boards);

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  title.value = "";
  description.value = "";
};
overlay.addEventListener("click", closeModal);

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
    count.innerText = "0  ";
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
  // }
};
addBoard();
