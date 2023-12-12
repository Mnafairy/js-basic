function lesserNumb(a, b, c, d) {
  if (a > b && a > c && a > d) {
    return a;
  } else if (b > c && b > d) {
    return b;
  } else if (c > d) {
    return c;
  } else {
    return d;
  }
}
let answer = lesserNumb(3, 2, 1, 4);
console.log("lesserNumb", answer);

function findBig(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
findBig(a, b);
findBig(c, d);
console.log(findBig(a, b), findBig(c, d));
