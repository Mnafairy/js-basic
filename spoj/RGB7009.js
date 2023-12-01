function product(x) {
  // return ((x % 10) * (x - 7)) / 10;
  return ((x - (x % 10)) / 10) * (x % 10);
}
let answer = product(27);
console.log("Answer", answer);
(x-x%10)/10=2 * 27%10=7