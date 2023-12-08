function isPrime(numb) {
  for (let i = 2; i < numb; i = i + 1) {
    if (numb % i == 0) {
      return false;
    }
  }
  return true;
}

let answer = isPrime(23);
console.log("Answer =", answer);

// let array = [];
// let count = 0;
// function primeNumbFinder(min, max) {
//   for (let i = min; i < max; i++) {
//     if (isPrime(i) == true) count++;
//     array[count] = i;
//   }
//   return array;
// }
// console.log(primeNumbFinder(40, 80));
// for (let i = 40; i < 80; i = i + 1) {}
