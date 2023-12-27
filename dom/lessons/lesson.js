let rightNow = new Date("2023-12-27");
// date gedeg ugugdliin turul bdg
let myArr = new Array(1, 2, 3);

console.log(rightNow);
console.log(new Date());
console.log(myArr);

setTimeout(() => {
  console.log("Hello");
}, 5000);

setInterval(() => {
  console.log("hello");
}, 1000);

function doSomething() {
  let count = 1;
  const myInterval = setInterval(() => {
    if (count > 3) {
      clearInterval(myIn    terval);
      location.reload();
    }
    console.log(count);
    count++;
  }, 1000);
}

doSomething();
