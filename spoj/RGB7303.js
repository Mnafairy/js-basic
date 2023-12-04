function sumUnits(x) {
  let result =
    evenNumbChecker((x - (x % 10000)) / 10000) +
    evenNumbChecker(((x % 10000) - (x % 1000)) / 1000) +
    evenNumbChecker(((x % 1000) - (x % 100)) / 100) +
    evenNumbChecker(((x % 100) - (x % 10)) / 10) +
    evenNumbChecker(x % 10);
  console.log(result);
  function evenNumbChecker(a) {
    if (a % 2 == 0) {
      return a;
    } else return 0;
  }
}
sumUnits(34567);
