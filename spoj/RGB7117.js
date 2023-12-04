function grade(x) {
  if (x > 89) {
    return "A";
  } else if (x > 79) {
    return "B";
  } else if (x > 69) {
    return "C";
  } else if (x > 59) {
    return "D";
  } else return "F";
}
let answer = grade(70);
console.log("Answer", answer);
