function equalFive(a, b, c) {
  let result = 0;
  if (a == 5) {
    result = result + 1;
  }
  if (b == 5) {
    result = result + 1;
  }
  if (c == 5) {
    result = result + 1;
  }
  return result;
}
let answer = equalFive(2, 5, 5);
console.log("Answer", answer);

function equalsFive(a, b, c) {
  let result = {
    a: "a=not equals five",
    b: "b=not equals five",
    c: "c=not equals five",
  };
  if (a == 5) {
    result.a = 5;
  }
  if (b == 5) {
    result.b = 5;
  }
  if (c == 5) {
    result.c = 5;
  }
  return result;
}
let answer = equalsFive(2, 5, 5);

console.log("Answer", answer.a, answer.b, answer.c);

// function kv(a){
//   let b;
//   b= a*a;
//   return b;
// }

// let c = kv(6);
// console.log(c);
