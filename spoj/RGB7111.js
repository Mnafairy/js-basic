function notDividedByEleven(a, b, c, d) {
  result = 0;
  if (a % 11 > 0) {
    result = result + a;
  }
  if (b % 11 > 0) {
    result = result + b;
  }
  if (c % 11 > 0) {
    result = result + c;
  }
  if (d % 11 > 0) {
    result = result + d;
  }
  return result;
}
let answer = notDividedByEleven(3, 12, 8, 9);
console.log("Answer", answer);
