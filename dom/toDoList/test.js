// const root = document.getElementById("root");
const todos = [
  { title: "Shopping", desc: "To buy grocery", status: "todo" },
  { title: "Cleaning", desc: "Bedroom", status: "inprogress" },
  { title: "Studying", desc: "English", status: "stuck" },
  { title: "Reading", desc: "Book", status: "done" },
  { title: "Shopping", desc: "To buy tv", status: "todo" },
  { title: "Cleaning", desc: "Livingroom", status: "inprogress" },
  { title: "Studying", desc: "Math", status: "stuck" },
  { title: "Reading", desc: "Manga", status: "done" },
  { title: "Shopping", desc: "To buy book", status: "todo" },
  { title: "Cleaning", desc: "Kitchen", status: "inprogress" },
  { title: "Studying", desc: "Geometery", status: "stuck" },
  { title: "Reading", desc: "News", status: "done" },
  { title: "Shopping", desc: "To buy phone", status: "todo" },
  { title: "Cleaning", desc: "Restroom", status: "inprogress" },
  { title: "Studying", desc: "Mongolian", status: "stuck" },
  { title: "Reading", desc: "Lightnovel", status: "done" },
];
let filteredtodo = todos.filter((e) => {
  return e.status == "todo";
});
let filteredInprogress = todos.filter((e) => {
  return e.status == "inprogress";
});
let filteredStuck = todos.filter((e) => {
  return e.status == "stuck";
});
let filteredDone = todos.filter((e) => {
  return e.status == "done";
});

console.log(filteredtodo);
console.log(filteredInprogress);
console.log(filteredStuck);
console.log(filteredDone);
