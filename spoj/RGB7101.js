function greaterNum(a, b) {
  if (a > b) {
    return a;
  } else if (a < b) {
    return b;
  }
}
let answer = greaterNum(16, 14);
console.log("GreaterNum", answer);