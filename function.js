//function declaration
function doSomething(input) {
  console.log(input);
  return input * input;
}
//function calling
let result = doSomething(15);
console.log(result);

function printHello() {
  console.log("Hello world");
}
function getSomething(input) {
  console.log("Input:", input);
}
function returnSomething() {
  return "Hello World";
}
function getMultiInput(num1, num2) {
  console.log("num1 =", num1);
  console.log("num2 =", num2);
  let sum = num1 + num2;
  return sum;
}
let result = getMultiInput(20, 30);
console.log("sum", result);
getSomething("My text");

function findDay(num) {
  if (num == 1) {
    return "Monday";
  } else if (num == 2) {
    return "Tuesday";
  }
}
let dayInText = findDay(2);
console.log(dayInText);

//find month
function findMonth(day) {
  if (day >= 1 && day <= 31) {
    return "January";
  } else if (day <= 59) {
    return "February";
  } else if (day <= 90) {
    return "March";
  } else if (day <= 120) {
    return "April";
  } else if (day <= 151) {
    return "May";
  } else if (day <= 181) {
    return "June";
  } else if (day <= 212) {
    return "July";
  } else if (day <= 243) {
    return "August";
  } else if (day <= 273) {
    return "September";
  } else if (day <= 304) {
    return "October";
  } else if (day <= 334) {
    return "November";
  } else if (day <= 365) {
    return "December";
  }
}

let month = findMonth(235);
console.log(month);

function avg(midterm1, midterm2, final) {
  let sum = (midterm1 + midterm2 + final * 2) / 4;
  if (60 > sum) {
    return "F";
  } else if (70 > sum) {
    return "D";
  } else if (80 > sum) {
    return "C";
  } else if (90 > sum) {
    return "B";
  } else if (100 >= sum) {
    return "A";
  }
}
let result = avg(100, 100, 100);
console.log(result);

// == string number hamaagu shalgan 11=="11"
// === torloor ni shalgan
//!= tentsehgui baih yum bol
//>= tentsuu buyu ers ih
//<=
// && 2 zuil asuuhad hereglen gehdee hoyulaa unen baival true
//! NOT if its true -false  false-true
// || return  "or"

//ugugldiin turul primitive bolon non primitive gej 2 angilj bga
//primitive
// string= ''
let counter = false;
let string = 11;
console.log(typeof string); //"boolean"
// undefined utga onooj ogoogui baina
// null -hooson

// function definition
// function(parameter1,parameter2)

//non-primitive
//object type    let person = {}
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 12,
  email: "@gmail.com",
  address: "",
};
console.log(person.email);

//array indexeer damjuulj handana
let array = ['car', 'apple', 'pen', ['orange']];
console.log(array[0]); //car
console.log(array[1]); //apple
console.log(array[2]); //pen
console.log(array[3][0]),array[0]l;

//city gedeg nertei array zarl
// city ni dotroo 8 hotiin ner aguulna
// hot bolgoniig console.log ashiglasd hevlej haruulna
let city=['Tokyo','New York',"Beijing",'Seoul','Sydney','Paris','Los Angeles','Wellington'];
console.log(city[0]);
console.log(city[1]);
console.log(city[2]);
console.log(city[3]);
console.log(city[4]);
console.log(city[5]);
console.log(city[6]);
console.log(city[7]);
// usa object uusgene
// state uudeer ni variable uusgene
// state bolgonoor ni population number 
// state dotroo object uusgene
// object dotroo city name,city population
let usa = {
  alabama:{
    capital:"Montgomery",
    cityPopulation:200603,
  },
  alaska:{
    capital:"Juneau",
    cityPopulation:32255,
  },
  arizona:{
    capital:"Phoenix",
    cityPopulation:1608139,
  },
  arkansas:{
    capital:"Little rock",
    cityPopulation:204405,
  },	
  california:{
    capital:"Sacramento",
    cityPopulation:524943,
  },
  colorado:{
    capital:"Denver",
    cityPopulation:715522,
  },
  connecticut:{
    capital:"Hartford",
    cityPopulation:121054,
  },
  delaware:{
    capital:"Dover",
    cityPopulation:39403,
  },
  florida:{
    capital:"Tallahassee",
    cityPopulation:196169,
  },
  georgia:{
    capital:"Atlanta",
    cityPopulation:498715,
  },
  hawaii:{
    capital:"Honolulu",
    cityPopulation:350964,
  },
  idaho:{
    capital:"Boise",
    cityPopulation:235684,
  },
  illinois:{
    capital:"Springfield",
    cityPopulation:114394,
  },
  indiana:{
    capital:"Indianapolis",
    cityPopulation:887642,
  },
  iowa:{
    capital:"Des Moines",
    cityPopulation:214133,
  },
}
console.log (usa.iowa);

// salary ni 2 sayaas ih
// niigmiin daatgaliin shimtgel toldog baih
// passaporttoi esvel identity cardtai baih
// bas in person bh esvel itegmjelheer baih
// dept ni 1 sayas baga bwal zeel garna

let loan={
  salary:2000000,
  socialInsurance:260000,
  passport:false,
  identityCard:true,
  person:true,
  credential:false,
  dept:400000,
}
if (loan.salary>=2000000 && loan.socialInsurance>0 && (loan.passport || loan.identityCard) && (loan.person || loan.credential) && loan.dept<1000000){
  console.log ("I GIFF U LOAN")
} else console.log ("I DO NOT GIFF U LOAN") 

// if its raining today, take umbrella
// if its snowing today, take umbrella
// if its too sunny today take umbrella

// ogogodson toog 5 bolon 11t hubaagddag eshiig tootsoh function bich
// too 5d huvaagdan gehdee 11th huvaagdahgui

let todayForecast ={
  raining:true
  snowing:false
  sunny:true
}
if (todayForecast.raining ||todayForecast.snowing){
  console.log("Take umbrella")
};

