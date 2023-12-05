// 10 buteegdhuun zohoi
// 10 buteegdehuunee array dotor oruul
// functon bichne buh buteegdhuunee 10% buuruulna
// filter function  elecktron baranudiig zuvhun oldog
let products = [
  {
    name: "Playstation",
    price: 200,
    category: "Electronics",
    brand: "Sony",
  },
  {
    name: "Bedsheet",
    price: 30,
    category: "Household",
    brand: "Erdenet",
  },
  {
    name: "Imac",
    price: 640,
    category: "Electronics",
    brand: "Apple",
  },
  {
    name: "Iphone",
    price: 450,
    category: "Electronics",
    brand: "Apple",
  },
  {
    name: "Galaxy-fold",
    price: 700,
    category: "Electronics",
    brand: "Samsung",
  },
  {
    name: "Lip Glowy Balm",
    price: 40,
    category: "Beauty",
    brand: "LANEIGE",
  },
  {
    name: "OLED tv",
    price: 750,
    category: "Electronics",
    brand: "Sony",
  },
  {
    name: "Laptop ",
    price: 800,
    category: "Electronics",
    brand: "MSI",
  },
  {
    name: "Body scrub",
    price: 230,
    category: "Beauty",
    brand: "GOO",
  },
  {
    name: "Body soap",
    price: 40,
    category: "Beauty",
    brand: "GOO",
  },
];

// for (let i = 0; i < products.length; i = i + 1) {
//   let changePrices = products[i].price * 0.9;
//   console.log(changePrices);
// }

for (let i = 0; i < products.length; i = i + 1) {
  if (products[i].category == "Electronics") {
    console.log(products[i]);
  }
}

// Exercise
// Dor hayj 10 objecttei array zohio. 10 tamirchdiin onoog tootsoh program bichne.
// example object:
// {
//   name:"boldoo",
//   age:20,
//   scores:[10,20,30,40]
// }

// 1.Ehnii tamirchni dundaj onoog ol
// 2. 2 dahi tamirchnii dundaj onoog ol 
// 3. hamgiin zaluu tamirchniig ol

let competition =[
  {
    name:"Orgil",
    age:25,
    scores:[10,20,30,40],
  },
  {
    name:"Enkhee",
    age:25,
    scores:[40,30,30,40],
  },
  {
    name:"Bilguun",
    age:25,
    scores:[10,20,30,40],
  },
  {
    name:"Unubold",
    age:25,
    scores:[10,20,30,40],
  },
  {
    name:"Tsendayushi",
    age:25,
    scores:[10,20,30,40],
  },
  {
    name:"Uyanga",
    age:21,
    scores:[10,20,30,40],
  },
  {
    name:"Rengar",
    age:25,
    scores:[10,20,30,40],
  },
  {
    name:"Rammus",
    age:25,
    scores:[10,20,30,40],
  },
  {
    name:"Sona",
    age:25,
    scores:[10,20,30,40],
  },
  {
    name:"Ahri",
    age:25,
    scores:[10,20,30,40],
  },
];

let first= avgNumbFinder(competition[0].scores[0,1,2,3])
console.log (first)
function avgNumbFinder(a,b,c,d){
  return (a+b+c+d)/2
}