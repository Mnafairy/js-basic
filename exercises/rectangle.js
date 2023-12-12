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

