function lesserThanFiveYes(num) {
  if (num < 5) {
    return "YES";
  } else if (num > 5) {
    return "NO";
  }
}
let answer = lesserThanFiveYes(4);
console.log("Answer", answer);