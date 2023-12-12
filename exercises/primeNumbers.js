function isPrime(numb) {
  for (let i = 2; i < numb; i = i + 1) {
    if (numb % i == 0) {x
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
function primeNumber(x) {
  // 1 анхны тоо биш тул шууд false буцаана
  if (x == 1) return false;
  // Зөвхөн 1 болон өөртөө хуваагддаг тоог анхны тоо гэнэ
  // Дээрхи тодорхойлолтоос 2-с х-1 хүртэл дурын нэг тоонд
  // хуваагдвал тухайн тоо анхны тоо биш гэсэн үг
  // for дотор энэ зарчмыг ашиглаж аль нэг тоонд нь хуваагдчихвал False буцаана
  for (let i = 2; i < x; i++) {
    if (x % i == 0) return false;
  }
  return true;
}

function rangePrime(mn, mx) {
  let arr = [];
  let count = 0;
  for (let i = mn; i <= mx; i++) {
    // primeNumber function boolean utga butsaaj baigaa tul
    //shuud if dotor bichiv. Prime too true utga butsaah tul
    //if true tohioldold array.d nemne
    if (primeNumber(i)) {
      arr[count] = i;
      count++;
    }
  }
  return arr;
}

console.log(rangePrime(1, 10));
