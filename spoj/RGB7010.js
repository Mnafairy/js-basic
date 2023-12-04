function sumUnit(x) {
  let a =
    evenNumbChecker((x - (x % 100)) / 100) +
    evenNumbChecker(((x % 100) - (x % 10)) / 10) +
    evenNumbChecker(x % 10);
  console.log(a);
  function evenNumbChecker(b) {
    if (b % 2 == 0) {
      return b;
    } else return 0;
  }
}
sumUnit(123);
