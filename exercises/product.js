// 10 buteegdhuun zohoi
// 10 buteegdehuunee array dotor oruul
// functon bichne buh buteegdhuunee 10% buuruulna
// filter function  elecktron baranudiig zuvhun oldog
let products = [
  {
    name: "Playstation",
    price: 200,
    stock: 40,
    category: "Electronics",
    brand: "Sony",
  },
  {
    name: "Bedsheet",
    price: 300,
    stock: 10,
    category: "Household",
    brand: "Erdenet",
  },
  {
    name: "Imac",
    price: 640,
    stock: 5,
    category: "Electronics",
    brand: "Apple",
  },
  {
    name: "Iphone",
    price: 450,
    stock: 12,
    category: "Electronics",
    brand: "Apple",
  },
  {
    name: "Galaxy-fold",
    price: 700,
    stock: 10,
    category: "Electronics",
    brand: "Samsung",
  },
  {
    name: "Lip Glowy Balm",
    price: 40,
    stock: 30,
    category: "Beauty",
    brand: "LANEIGE",
  },
  {
    name: "OLED tv",
    price: 750,
    stock: 40,
    category: "Electronics",
    brand: "Sony",
  },
  {
    name: "Laptop ",
    price: 800,
    stock: 12,
    category: "Electronics",
    brand: "MSI",
  },
  {
    name: "Body scrub",
    price: 230,
    stock: 15,
    category: "Beauty",
    brand: "GOO",
  },
  {
    name: "Body soap",
    price: 40,
    stock: 11,
    category: "Beauty",
    brand: "GOO",
  },
];
// find most expensive
// find one with less stock

let mostExpensive = products[0].price;
function findMostExpensive() {
  for (let i = 0; i < 10; i = i + 1) {
    if (products[i].price > mostExpensive) {
      mostExpensive = products[i].price;
    }
  }
  console.log(mostExpensive);
}
findMostExpensive();

let leastStock = products[0].stock;
for (let i = 0; i < 10; i = i + 1) {
  if (products[i].stock < leastStock) {
    leastStock = products[i].stock;
  }
}
console.log(leastStock);

let leastExpensive = products[0].price;
for (let i = 0; i < 10; i++) {
  if (products[i].price < leastExpensive) {
    leastExpensive = products[i].price;
  }
}
console.log(leastExpensive);

function setSale(saleAmount) {
  for (let i = 0; i < 10; i = i + 1) {
    console.log(i);
    products[i].price = products[i].price * (1 - saleAmount / 100);
  }
}
setSale(20);
console.log(products);

for (let i = 0; i < products.length; i = i + 1) {
  let changePrices = products[i].price * 0.9;
  console.log(changePrices);
}
for (let i = 0; i < products.length; i = i + 1) {
  if (products[i].category == "Electronics") {
    console.log(products[i]);
  }
}
function findByCategory(input) {
  for (let i = 0; i < products.length; i = i + 1) {
    if (products[i].category == input) {
      console.log(products[i]);
    }
  }
}
findByCategory("Electronics");

for (let i = 0; i < 10; i = i + 1) {
  console.log(i, "=>", products[i]);
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

let competition = [
  {
    name: "Orgil",
    age: 25,
    scores: [10, 20, 30, 40],
  },
  {
    name: "Enkhee",
    age: 25,
    scores: [40, 30, 30, 40],
  },
  {
    name: "Bilguun",
    age: 25,
    scores: [10, 20, 30, 40],
  },
  {
    name: "Unubold",
    age: 25,
    scores: [10, 20, 30, 40],
  },
  {
    name: "Tsendayushi",
    age: 25,
    scores: [10, 20, 30, 40],
  },
  {
    name: "Uyanga",
    age: 21,
    scores: [10, 20, 30, 40],
  },
  {
    name: "Rengar",
    age: 25,
    scores: [10, 20, 30, 40],
  },
  {
    name: "Rammus",
    age: 25,
    scores: [10, 20, 30, 40],
  },
  {
    name: "Sona",
    age: 25,
    scores: [10, 20, 30, 40],
  },
  {
    name: "Ahri",
    age: 25,
    scores: [10, 20, 30, 40],
  },
];
let youngest = competition[0].age;
for (let i = 0; i < 10; i = i + 1) {
  if (competition[i].age < youngest) {
    youngest = competition[i].age;
  }
}
console.log(youngest);

// let sum =
//   (competition[0].scores[0] +
//   competition[0].scores[1] +
//   competition[0].scores[2] +
//   competition[0].scores[3] )/4;
// console.log(sum);
// let first = avgNumbFinder(competition[i].scores[0],competition[i].scores[1],competition[i].scores[2],competition[i].scores[3]);
// console.log(first);
function avgNumbFinder(a, b, c, d) {
  return (a + b + c + d) / 4;
}

function avgN() {
  for (let i = 0; i < 10; i = i + 1) {
    console.log(
      avgNumbFinder(
        competition[i].scores[0],
        competition[i].scores[1],
        competition[i].scores[2],
        competition[i].scores[3]
      )
    );
  }
}
avgN();

let sportsmanAverage = avgN();
console.log(sportsmanAverage);

// for (i=0;i<10;i++){
// }
