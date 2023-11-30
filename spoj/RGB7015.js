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

