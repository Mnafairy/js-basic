function square(input) {
  let sqrStr = "";
  for (let i = 0; i < input; i++) {
    for (let j = 0; j < input; j++) {
      sqrStr += "*";
    }
    sqrStr += "\n";
  }
  console.log(sqrStr);
}
square(5);
