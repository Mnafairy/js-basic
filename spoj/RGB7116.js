function grade(input) {
  if (input == 5) {
    return "Excellent";
  } else if (input == 4) {
    return "Good";
  } else if (input == 3) {
    return "Average";
  } else if (input == 2) {
    return "Bad";
  } else return "FFFFFF";
}
let answer = grade(5);
console.log("Answer", answer);
