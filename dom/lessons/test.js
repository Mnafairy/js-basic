const products = [
  {
    id: 1,
    name: "mac",
    price: 123,
    stock: 2,
  },
  {
    id: 2,
    name: "iphone",
    price: 1231,
    stock: 10,
  },
  {
    id: 3,
    name: "tv",
    price: 1232,
    stock: 4,
  },
  {
    id: 4,
    name: "samsung",
    price: 1234,
    stock: 6,
  },
];

function removeProd(a) {
  const newArr = products.filter((object) => {
    return object.id !== a;
  });
  for (let i = 0; i < newArr.length; i++) {
    newArr[i].id = i + 1;
  }
  console.log(newArr);
}

removeProd(3);

// using filter
function sellProd(prodName, stock) {
  // const newArr = products.map((object) => {
  //   if (object.name == prodName) {
  //     object.stock = object.stock - stock;
  //   }
  //   return object;
  // });
  // console.log(newArr);
    for (let i = 0; i < products.length; i++) {
      products[i].name == prod
        ? (products[i].stock = products[i].stock - stock)
        : null;
    } 
    console.log(products);
}
sellProd("iphone", 2);

// can use map

//if removed then give new ids
