function hollowSqr(input) {
  let sqrStr = "";
  for (let i = 0; i < input; i++) {
    for (let j = 0; j < input; j++) {
      if (i == 0 || i == input - 1 || j == 0 || j == input - 1) {
        sqrStr += "*";
      } else {
        sqrStr += " ";
      }
    }
    sqrStr += "\n";
  }
  console.log(sqrStr);
}
hollowSqr(5);
