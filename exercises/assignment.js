//1
function down(x) {
  for (let i = x; i >= 0; i = i - 3) {
    console.log(i);
  }
}
down(10);

//2

function tillGreaterNumb(a, b) {
  for (i = b; i <= a; i = i + 1) {
    console.log(i);
  }
}
tillGreaterNumb(15, 9);
//3

let array = [];
let count = 0;
function incByTwo(a, b, c) {
  for (let i = a; i <= b; i = i + c) {
    array[count] = i;
    count = count + 1;
    // console.log(count)
    // console.log(i);
  }
  console.log(array);
}
incByTwo(10, 20, 2);

// let newArray = [];
// let count = 0;
// const incByTwo = (a, b, c) => {
//   for (let i = a; i < b; i = i + c) {
//     newArray[count] = i;
//     count = count + 1;
//   }
//   console.log(newArray);
// };
// incByTwo(10, 30, 3);
