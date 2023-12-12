x % 2 == 0;

function evenNumberSum(a, b, c) {
  let result = 0;
  if (a % 2 == 0) result = result + a;
  if (b % 2 == 0) result = result + b;
  if (c % 2 == 0) result = result + c;
  return result;
}
let answer = evenNumberSum(10, 3, 5);
console.log("Answer", answer);
