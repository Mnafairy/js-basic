function secondNumb(x) {
  return ((x % 100) - (x % 10)) / 10;
}
let answer = secondNumb(423);
console.log("Answer", answer);
