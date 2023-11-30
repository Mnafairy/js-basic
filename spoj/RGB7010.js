function sumUnit(x) {
  let a = (x - (x % 100)) / 100 + ((x % 100) - (x % 10)) / 10 + (x % 10);
  console.log(a);
}
sumUnit(123);
