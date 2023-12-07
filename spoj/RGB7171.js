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
