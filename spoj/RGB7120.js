function triangle(a, b, c) {
  if (a + b > c && b + c > a && c + a > b) {
    return "Can make triangle";
  } else "Cannot make triangle";
}
let a = triangle(3, 4, 5);
console.log(a);
