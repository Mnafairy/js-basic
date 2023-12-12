function greaterNum(a, b, c) {
  if (b > a && b > c) {
    return b;
  } else if (a > b && a > c) {
    return a;
  } else if (c > a && c > b) {
    return c;
  } 
}
let answer = greaterNum(1, 3, 2);
console.log("GreaterNum", answer);
