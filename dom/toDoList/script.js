/**
 * <div class="boards">
        <div class="board">
          <div class="boardHeader">
            <h3>To do</h3>
            <span class="count" id="toDoCount">0</span>
          </div>
          <div class="cards"></div>
          <div class="addBtn">
            <i>+</i>
            <div>Add card</div>
          </div>
          <div class="over"></div>
        </div>
        </div>
 */
const root = document.getElementById("root");
const boards = document.createElement("div");
boards.className = "boards";
root.appendChild(boards);
// const modal = document.createElement("div");
// modal.className = "modal";
// modal.className = "hidden";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
overlay.addEventListener("click", closeModal);

const boardTitle = [
  { title: "To do", id: "toDo" },
  { title: "In progress", id: "inProgress" },
  { title: "Stuck", id: "stuck" },
  { title: "Done", id: "done" },
];

const addBoard = () => {
  // let titleArr = ["To do", "In progress", "Stuck", "Done"];
  // for (let i = 0; i < 4; i++) {
  boardTitle.map((e) => {
    const board = document.createElement("div");
    board.className = "board";
    const boardHeader = document.createElement("div");
    boardHeader.className = "boardHeader";
    const headerTitle = document.createElement("h3");
    headerTitle.innerText = e.title;
    // headerTitle.innerText = `${titleArr[i]}`;
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
    addCard.innerText =`+ Add card`;
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
