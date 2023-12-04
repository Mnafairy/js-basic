//LOOP
// for(initiliaze; condition;update){body}
// initialize=works only 1 time before it loop starts
// initialize-> (condition-> body -> update)
for (let i = 0; i < 10; i = i + 1) {
  console.log(i);
}

for (let i = 5; i < 10; i = i + 1) {
  console.log(i);
}

for (let i = 0; i < 6; i = i + 1) {
  console.log("Hello world");
}

let num = 3;
for (; num < 7; ) {
  num = num + 1;
  console.log("body");
}
