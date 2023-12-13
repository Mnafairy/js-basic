// `` - template literal

// let text = ` i'm sdwe"uj`;
// console.log(text);

let sentence = `Answer misery adieus add wooded how nay men before though.
Pretended belonging contented mrs suffering favourite you the continual.
Mrs civil nay least means tried drift. Natural end law whether but and towards 
certain. Furnished unfeeling his sometimes see day promotion. Quitting informed 
concerns can men now. Projection to or up conviction uncommonly delightful 
continuing. In appetite ecstatic opinions hastened by handsome admitted.`;

function findAlph(input) {
  let count = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] == input || sentence[i] == "A" ) {
      count++;
    }
  }
}
findAlph("a");

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
let count=0;
for (i = 0; i < sentence.length; i++) {
  for(let j=0 ;j<alphabets.length; j++) {
    if(sentence.charAt(i)==alphabets.charAt(j))
    count++;
  }
}
console.log(count);


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
