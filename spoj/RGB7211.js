function product(a, b) {
  let numb = 1;
  for (let i = 1; i <= b; i = i + 1) {
    numb = numb * a;
    console.log(a, "^", i, "=", numb);
  }
}
product(3, 5);