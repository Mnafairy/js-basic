function sqr(input) {
  let sqrStr = "";
  for (let i = 0; i < input; i++) {
    for (let j = 0; j < input; j++) {
      if (
        (i == 1 && j == 2) ||
        (i == 2 && j == 1) ||
        (i == 2 && j == 3) ||
        (i == 3 && j == 2)
      ) {
        sqrStr += " ";
      } else {
        sqrStr += "*";
      }
    }
    sqrStr += "\n";
  }
  console.log(sqrStr);
}
sqr(5);
// only works when i and j are lesserthan and equal to input
// if (
//         i == 1 ||
//         i == input ||
//         j == 1 ||
//         j == input ||
//         i == j ||
//         j == input - i + 1
//       ) {
//         sqrStr += "*";
//       } else {
//         sqrStr += " ";
//       }
