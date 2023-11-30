function toMin(x) {
  let a = (x - (x % 60)) / 60;
  console.log(a);
}
let c = toMin(200);
// console.log(c);
function toSec(x) {
  let second = x % 60;
  console.log(second);
}
toSec(200);
// let minute = min(200);

// let second = sec(200);
// console.log("Second=", second);
