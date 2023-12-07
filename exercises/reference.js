//array bolhoor hayga adress aar ni yavuulna
//
let nums = [1, 2, 3, 4, 5];
function test(nums) {
  nums[0] = 10;
  console.log("Local:", nums);
}
test(nums);
console.log("Global:", nums);