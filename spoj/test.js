function a(x) {
  let minute = 0;
  let second = 0;
  minute = minute + (x - (x % 60)) / 60;
  console.log("minute =",minute);
  second = second + (x % 60);
  console.log("second =",second);
}
a(200);

let b = 0;
function a(x, y) {
  while (x > 0 && x % 10 == y) {
    b = b + 1;
    x = (x - (x % 10)) / 10;
  }
  return a;
}
console.log(a(11234532, 3));
