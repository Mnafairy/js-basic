function sum(numb) {
  let a = 0;
  for (let i = 1; i < numb; i = i + 2) {
    a = a + i;
  }
  console.log(a);
} 
sum(10);


// function fact(a) {
//   if (a == 1) return 1;
//   else fact(a - 1) * a;
// }
// let b = fact(2);
// console.log(b);