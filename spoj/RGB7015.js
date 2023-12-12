function toDay(x) {
  let answer = (x - (x % 24)) / 24;
  console.log("Day=", answer);
}
function toHour(x) {
  let answer = x % 24;
  console.log("Hour=", answer);
}
toDay(44);
toHour(44);

function toDay(x) {
  let answer = (x - (x % 24)) / 24;
  let answer1 = x % 24;
  console.log("Hour", answer);
  console.log("Minute", answer1);
}
toDay(44);
