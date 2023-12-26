// function changeColor() {
//   document.getElementById("container").style.backgroundColor =
//     "rgb(255,125,131)";
// }

function changeColor() {
  document.getElementById("color").innerText = document.getElementById(
    "container"
  ).style.backgroundColor =
    "rgb(" +
    Math.floor(Math.random() * 255) +
    "," +
    Math.floor(Math.random() * 255) +
    "," +
    Math.floor(Math.random() * 255) +
    ")";
  // color.innerText = "";
}
// const setBg = () => {
//   const randomColor = Math.floor(Math.random()*16777215).toString(16);
//   document.body.style.backgroundColor = "#" + randomColor;
//   // color.innerHTML = "#" + randomColor;
// }
// genNew.addEventListener("click", setBg);
// setBg();
