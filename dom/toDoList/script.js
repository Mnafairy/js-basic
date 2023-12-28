// const root = document.getElementById("root");
// const title = document.createElement("h1");
// title.innerText = "To-Do-List";
// const taskContainer = document.createElement("div");
// const input = document.createElement("input");
// input.setAttribute("placeholder", "Enter task here...");
// input.setAttribute("id", "");

// const addButton = document.createElement("button");
// addButton.innerText = "Add Task";
// const botContainer = document.createElement("div");
// botContainer.className = "botContainer";
// root.appendChild(title);
// root.appendChild(taskContainer);
// root.appendChild(botContainer);
// taskContainer.appendChild(input);
// taskContainer.appendChild(addButton);
// addButton.addEventListener("click", addTask);

// function addTask() {
//   const task = document.createElement("div");
//   task.innerText = input.value;
//   const deleteButton = document.createElement("button");
//   deleteButton.innerText = "Delete";

//   botContainer.appendChild(task);
//   task.appendChild(deleteButton);
//   deleteButton.addEventListener("click", deleted);

//   function deleted() {
//     task.remove();
//   }
// }

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

const boardTitle = [
  { title: "To do", id: "toDo" },
  { title: "In progress", id: "inProgress" },
  { title: "Stuck", id: "stuck" },
  { title: "Done", id: "done" },
];
const addBoard = () => {
  // let titleArr = ["To do", "In progress", "Stuck", "Done"];
  // for (let i = 0; i < 4; i++) {
  boardTitle.map((title) => {
    const board = document.createElement("div");
    board.className = "board";
    board.setAttribute("id", title.id);

    const boardHeader = document.createElement("div");
    boardHeader.className = "boardHeader";
    const headerTitle = document.createElement("h3");
    // headerTitle.innerText = `${titleArr[i]}`;
    headerTitle.innerText = title.title;

    const count = document.createElement("span");
    count.className = "count";
    count.innerText = "0  ";
    boardHeader.appendChild(headerTitle);
    boardHeader.appendChild(count);
    board.appendChild(boardHeader);

    const cards = document.createElement("div");
    cards.className = "cards";
    board.appendChild(cards);

    const addBtn = document.createElement("div");
    addBtn.className = "addBtn";
    const addCard = document.createElement("div");
    addCard.innerText = "+ Add card";
    addBtn.appendChild(addCard);
    board.appendChild(addBtn);

    const over = document.createElement("div");
    over.className = "over";
    board.appendChild(over);

    boards.appendChild(board);
  });
  // }
};
addBoard();

addBtn("click");
