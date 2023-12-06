function season(x){
  if (2<=x && x<=5){
    return "Spring"
  } else if (6<=x && x<=8){
    return "Summer"
  } 
   else if (9<=x && x<=11){
    return "Autumn"
  } 
   else if (12==x || x==1){
    return "Winter"
  } 
}
let answer = season(12);
console.log (answer);