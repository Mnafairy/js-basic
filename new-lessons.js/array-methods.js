let nums = [2, 5, 3, 7, 1];
//bubble sort
// sort to higher numb
nums.sort((a, b) => a - b); // u can write sort right after array and it's function itself
let myFunction = (a, b) => {
  return a - b;
}; //exact same meaning as top function nums.sort
//array methods
console.log(nums);

nums[nums.length] = 100;
// array shifting
//u can declare object and array by `const`
// string uudig hoorond ni jishej bolno  from ascii table decimal

// products.sort((prod1, prod2) => {
//   return prod1.price - prod2.price;
// });
// console.log(products);

//products.sort((prod1,prod2)=>{return 1})

// products.map(); !! cannot change main variable  returns new array
let nums = [1, 2, 3, 4, 5, 1, 3, 1, 3];
let newNums = nums.map((a) => {
  if (a % 2 == 0) return a;
});
console.log(newNums);
console.log(nums);

// products.filter(); !! checks if its true or false and returns true into array
let evenArr = nums.filter((a) => {
  //must be boolean
  return a % 2 == 0;
});
console.log("evenArr:", evenArr);

filterByBrand("");
filterByPrice(max, min);
// collect only prices and make an array
// make an array that only contains products name


// .reduce  //can only return one 