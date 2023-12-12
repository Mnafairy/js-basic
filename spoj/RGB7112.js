function greaterThanTenYes(num) {
  if (num > 10) {
    return "YES";
  } else if (num < 10) {
    return "NO";
  }
}
let answer = greaterThanTenYes(11);
console.log("Answer", answer); 
