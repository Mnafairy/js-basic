// // const root = document.getElementById("root");
// const todos = [
//   { title: "Shopping", desc: "To buy grocery", status: "todo" },
//   { title: "Cleaning", desc: "Bedroom", status: "inprogress" },
//   { title: "Studying", desc: "English", status: "stuck" },
//   { title: "Reading", desc: "Book", status: "done" },
//   { title: "Shopping", desc: "To buy tv", status: "todo" },
//   { title: "Cleaning", desc: "Livingroom", status: "inprogress" },
//   { title: "Studying", desc: "Math", status: "stuck" },
//   { title: "Reading", desc: "Manga", status: "done" },
//   { title: "Shopping", desc: "To buy book", status: "todo" },
//   { title: "Cleaning", desc: "Kitchen", status: "inprogress" },
//   { title: "Studying", desc: "Geometery", status: "stuck" },
//   { title: "Reading", desc: "News", status: "done" },
//   { title: "Shopping", desc: "To buy phone", status: "todo" },
//   { title: "Cleaning", desc: "Restroom", status: "inprogress" },
//   { title: "Studying", desc: "Mongolian", status: "stuck" },
//   { title: "Reading", desc: "Lightnovel", status: "done" },
// ];
// let filteredtodo = todos.filter((e) => {
//   return e.status == "todo";
// });
// let filteredInprogress = todos.filter((e) => {
//   return e.status == "inprogress";
// });
// let filteredStuck = todos.filter((e) => {
//   return e.status == "stuck";
// });
// let filteredDone = todos.filter((e) => {
//   return e.status == "done";
// });

// console.log(filteredtodo);
// console.log(filteredInprogress);
// console.log(filteredStuck);
// console.log(filteredDone);

let tasksArr = [
  {
    title: "Task1",
    description: "task1",
    priority: "high",
    status: "To Do",
    id: 1,
  },
  {
    title: "Task2",
    description: "task2",
    priority: "low",
    status: "In Progress",
    id: 2,
  },
  {
    title: "Task3",
    description: "task3",
    priority: "medium",
    status: "Stuck",
    id: 3,
  },
  {
    title: "Task4",
    description: "task4",
    priority: "low",
    status: "Done",
    id: 4,
  },
  {
    title: "Task5",
    description: "task1",
    priority: "high",
    status: "To Do",
    id: 5,
  },
  {
    title: "Task6",
    description: "task2",
    priority: "low",
    status: "In Progress",
    id: 6,
  },
  {
    title: "Task7",
    description: "task3",
    priority: "medium",
    status: "Stuck",
    id: 7,
  },
  {
    title: "Task8",
    description: "task4",
    priority: "low",
    status: "Done",
    id: 8,
  },
  {
    title: "Task9",
    description: "task1",
    priority: "high",
    status: "To Do",
    id: 9,
  },
  {
    title: "Task10",
    description: "task2",
    priority: "low",
    status: "In Progress",
    id: 10,
  },
  {
    title: "Task11",
    description: "task3",
    priority: "medium",
    status: "Stuck",
    id: 11,
  },
  {
    title: "Task12",
    description: "task4",
    priority: "low",
    status: "Done",
    id: 12,
  },
  {
    title: "Task13",
    description: "task1",
    priority: "high",
    status: "To Do",
    id: 13,
  },
  {
    title: "Task14",
    description: "task2",
    priority: "low",
    status: "In Progress",
    id: 14,
  },
  {
    title: "Task15",
    description: "task3",
    priority: "medium",
    status: "Stuck",
    id: 15,
  },
  {
    title: "Task16",
    description: "task4",
    priority: "low",
    status: "Done",
    id: 16,
  },
];

const root = document.getElementById("root");

const container = document.createElement("div");
container.setAttribute("class", "container");
root.appendChild(container);

function renderTasks(list) {
  container.innerHTML = "";
  const taskTodo = list.filter((todo) => {
    return todo.status == "To Do";
  });
  const todoStatusDiv = document.createElement("div");
  todoStatusDiv.setAttribute("class", "status_column");

  taskTodo.map((task) => {
    const newTask = createTask(task);

    todoStatusDiv.appendChild(newTask);
    container.appendChild(todoStatusDiv);
  });

  const taskInProgress = list.filter((todo) => {
    return todo.status == "In Progress";
  });
  const InProgressStatusDiv = document.createElement("div");
  InProgressStatusDiv.setAttribute("class", "status_column");

  taskInProgress.map((task) => {
    const newTask = createTask(task);

    InProgressStatusDiv.appendChild(newTask);
    container.appendChild(InProgressStatusDiv);
  });

  const taskStuck = list.filter((todo) => {
    return todo.status == "Stuck";
  });
  const stuckStatusDiv = document.createElement("div");
  stuckStatusDiv.setAttribute("class", "status_column");

  taskStuck.map((task) => {
    const newTask = createTask(task);

    stuckStatusDiv.appendChild(newTask);
    container.appendChild(stuckStatusDiv);
  });

  const taskDone = list.filter((todo) => {
    return todo.status == "Done";
  });
  const doneStatusDiv = document.createElement("div");
  doneStatusDiv.setAttribute("class", "status_column");

  taskDone.map((task) => {
    const newTask = createTask(task);

    doneStatusDiv.appendChild(newTask);
    container.appendChild(doneStatusDiv);
  });
}

function createTask(task) {
  const taskCard = document.createElement("div");
  const todoTitle = document.createElement("h1");
  const todoDescription = document.createElement("span");
  const todoPriority = document.createElement("div");
  const deleteBtn = document.createElement("button");
  const editBtn = document.createElement("button");

  deleteBtn.setAttribute("id", `${task.id}`);
  deleteBtn.innerText = "Delete";

  deleteBtn.addEventListener("click", (event) => {
    deleteTask(event.target.id);
  });

  editBtn.setAttribute("id", `${task.id}`);
  editBtn.innerText = "Edit";

  editBtn.addEventListener("click", (editOper) => {
    editTask(editOper.target.id);
  });

  todoTitle.innerText = task.title;
  todoDescription.innerText = task.description;
  todoPriority.innerHTML = task.priority;

  taskCard.setAttribute("class", "task_card");
  taskCard.appendChild(todoTitle);
  taskCard.appendChild(todoDescription);
  taskCard.appendChild(todoPriority);
  taskCard.appendChild(deleteBtn);
  taskCard.appendChild(editBtn);
  return taskCard;
}

function deleteTask(id) {
  console.log(id);
  tasksArr = tasksArr.filter((task) => {
    return task.id != id;
  });
  console.log(tasksArr);
  renderTasks(tasksArr);
}

function editTask(id) {
  tasksArr = tasksArr.map((task) => {
    if (task.id == id) {
      return {
        ...task,
        title: "New Title",
      };
    } else {
      return task;
    }
  });
  renderTasks(tasksArr);
}

renderTasks(tasksArr);