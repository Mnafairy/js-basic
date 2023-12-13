function rhomb(input) {
  let starStr = "";
  for (let i = 0; i < input; i++) {
    for (let j = 0; j < input; j++) {
      starStr += "*";
    }
    starStr += "\n";
  }
  console.log(starStr);
}
rhomb(9);
