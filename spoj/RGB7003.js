function findArea(width, height) {
  let area = width * height;
  return area;
}
function findPer(width, height) {
  let per = 2 * (width + height);
  return per;
}
let area = findArea(4, 6);
console.log("Area=", area);
let per = findPer(4, 6);
console.log("Per=", per);
