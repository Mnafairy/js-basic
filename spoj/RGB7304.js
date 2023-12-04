function unitNumb(x) {
  let result = 0;
  if (((x - (x % 10000)) / 10000) % 2 > 0) result = result + 1;
  else result = result + 0;
  if ((((x % 10000) - (x % 1000)) / 1000) % 2 > 0) result = result + 1;
  else result = result + 0;
  if ((((x % 1000) - (x % 100)) / 100) % 2 > 0) result = result + 1;
  else result = result + 0;
  if ((((x % 100) - (x % 10)) / 10) % 2 > 0) result = result + 1;
  else result = result + 0;
  if ((x % 10) % 2 > 0) result = result + 1;
  else result = result + 0;
  console.log(result);
}
unitNumb(23457);

// function oddNumbChecker(a){
//         if(a%2>0){
//             return a;
//         } else return -1;
//     }
