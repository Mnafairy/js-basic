// \n - white space new line
// \t - tab
// +=
function drawSqr(size) {
  let sqrStr = "";
  for (let j = 0; j < size; j++) {
    for (let i = 0; i < size; i++) {
      sqrStr += "*";
      //   sqrStr = _sqrStr + "*";
    }
    sqrStr += "\n";
  }
  console.log(sqrStr);
}
drawSqr(5);

function hollowSqr(size) {
  let sqrStr = "";
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (i == 0 || i == size - 1 || j == 0 || j == size - 1) {
        sqrStr += "*";
      } else {
        sqrStr += " ";
      }
    }
    sqrStr += "\n";
  }
  console.log(sqrStr);
}
hollowSqr(5);

function drawLeftTri(size) {
  let triSqr = "";
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (i >= j) {
        triSqr += "*";
      }
    }
    triSqr += "\n";
  }
  console.log(triSqr);
}
function drawRightTri(size) {
  let triSqr = "";
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size - i - 1; j++) {
      triSqr += "-";
    }
    for (let j = 0; j <= i; j++) {
      triSqr += "*";
    }
    triSqr += "\n";
  }
  console.log(triSqr);
}
drawRightTri(5);

let num = 1234;
let numStr = num + "";
// let numStr = num.toString();

let strNum = "123";
let numFromStr = Number(strNum);

let word = "hello world";
for (let i = 0; i < word.length; i++) {
  console.log(word[i]);
  console.log(word.charAt(i));
}
// `` - template literal

// let text = ` i'm sdwe"uj`;
// console.log(text);

let sentence = `Answer misery adieus add wooded how nay men before though. 
Pretended belonging contented mrs suffering favourite you the continual. 
Mrs civil nay least means tried drift. Natural end law whether but and towards 
certain. Furnished unfeeling his sometimes see day promotion. Quitting informed 
concerns can men now. Projection to or up conviction uncommonly delightful 
continuing. In appetite ecstatic opinions hastened by handsome admitted.`;
let counta = 0;
for (let i = 0; i < sentence.length; i++) {
  if (sentence[i] == "a" || sentence[i] == "A") {
    counta++;
  }
}
console.log(counta);

let arr = [];
let str = "";
let c = 0;
for (let i = 0; i < sentence.length; i++) {
  if (sentence[i] == " ") {
    arr[c] = str;
    c++;
    str = "";
  } else {
    str = str + sentence[i];
  }
}
console.log(arr);
// count how many a's in this text
// toolson usegnuude heden shirheg baigaag haruulah

let alphabets = `abcdefghijklmnopqrstuwxyz`;
let chars = [4, 5, 6, 9];

//multidimensional array
//google space lmfao
let multiArr = [["Answer", "misery", "adieus"], ["add", "wooded"], 4];
// ehnii uguulberiin ehnii
let lines = 1;
for (let i = 0; i < sentence.length; i++) {
  if (sentence.charAt(i) == "\n") {
    lines++;
  }
}
console.log(lines);
