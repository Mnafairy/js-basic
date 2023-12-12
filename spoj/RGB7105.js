function sumNumbersGreaterThan80(a, b, c, d) {
  let result = 0;

  if (a > 80) result = result + a;
  if (b > 80) result = result + b;
  if (c > 80) result = result + c;
  if (d > 80) result = result + d;
  return result;
}
let answer = sumNumbersGreaterThan80(85, 75, 96, 69);
console.log("Answer", answer);

//5d huvaagddag toonuudin urjver
function numbersDividedBy5Product(a, b, c, d) {
  let product = 1;
  if (a / 5) product = product * a;
  if (b / 5) product = product * b;
  if (c / 5) product = product * c;
  if (d / 5) product = product * d;
  return product;
}
let answer = numbersDividedBy5Product(25, 23, 25, 10);
console.log("Answer", answer);

// 80 aas ih ba tegsh esvel 3t huvaagddag niilber

function moreThanEighty(a, b, c) {
  let result =0;
  if ((a>80)%2==0 || a%3==0) result=result+a;
  if ((b>80)%2==0 || b%3==0) result=result+b;
  if ((c>80)%2==0 || c%3==0) result=result+c;
  return result;
}
let answer = moreThanEighty(93, 85, 120);
console.log("Answer", answer);
