function toSec(h, min, sec) {
  let answer = h * 60 ** 2 + min * 60 + sec;
  console.log("Answer", answer);
}
toSec(1, 2, 3);
