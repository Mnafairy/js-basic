function floorNumb(floor, door, number) {
  let numberResult = 0;
  if (number % door == 0) {
    numberResult = door;
    floor = number / door;
  } else {
    numberResult = number % door;
    floor = (number - (number % door)) / door + 1;
  }
  console.log(floor + " Давхарын " + numberResult + " дэх айл");
}
floorNumb(5, 4, 10);

// a*b=20 //niit heden ail baigaa ni
// a b c
// (c/b)
// (c-c%b)/b= davhar
// c%b = uldegdel
// (20-20%4)/4=5+1
