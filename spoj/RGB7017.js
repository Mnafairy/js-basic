function toYear(Month){
  let answer= (Month-Month%12)/12; 
  console.log ("Year =",answer)
}
function toMonth(Month){
  let answer= (Month%12);
  console.log("Month =",answer)
}
toYear(27);
toMonth(27);
