function productOddNumb(a, b, c) {
  let result = 1;
  if (a % 2 > 0) result = result * a;
  if (b % 2 > 0) result = result * b;
  if (c % 2 > 0) result = result * c;
}
let answer = productOddNumb(5, 2, 3);
console.log("Answer", answer);

