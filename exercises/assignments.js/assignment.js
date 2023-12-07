//1
function down(x) {
  for (let i = x; i >= 0; i = i - 3) {
    console.log(i);
  }
}
console.log(i);
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

for (let i = 10; i <= 20; i = i + 2) {
  array[count] = i;
  count = count + 1;
}
