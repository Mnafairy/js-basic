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
