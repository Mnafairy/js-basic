// let age = 10;
// let name = "orgil";
// let intro = `My name is ${name} my age is ${age}`;
// root.appendChild();

// const cards = document.getElementsByClassName("card");
// //array butsaan HTML collection
// console.log(cards);
// html iin array ondoo haragddg
const oneCard = document.querySelector(".card");

oneCard.addEventListener("click", () => {
  console.log("clicked");
});
// reference hayag
// addEventListener == onclick tei adilhan
// mouseEnter mouseLeave =>hover

//target.value google it
localStorage.setItem("item", [1, 2, 3]);
console.log(localStorage.getItem("item"));
