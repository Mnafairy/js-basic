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
let filterByBrand = products.filter((a) => {
  //   console.log(a);
  //   console.log(products);
  return a.brand == "Apple";
});
console.log("filterByBrand", filterByBrand);
products.sort((a, b) => a.price - b.price);
// products.sort((a, b) => {
//   return a.price - b.price;
// });
console.log(products);

let onlyPrices = products.map((a) => a.price);
console.log("Prices", onlyPrices);
// let onlyPrices = products.map((a) => {
//   return a.price;
// });
// console.log("Price", onlyPrices);

// let onlyName = products.map((a) => a.name);
// console.log(onlyName);

onlyPrices.sort((a, b) => a - b);
console.log("sort by price", onlyPrices);