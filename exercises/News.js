// niit buteegdhuunuudiin dundaj unees  deesheh une oldog filter
//date  title  pubDate author category
//filter ehnii 5 suullin 5 filterByDate   year.month.day
//filterByAuthor
// filterByCategory
// internationalization i18n js
// ASCII table decimal
let news = [
  {
    title: "The Secret Garden",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, provident!",
    pubDate: "15/8/1911",
    author: "Frances Hodgson Burnett",
    category: "Children's novel",
  },
  {
    title: "Treasure Island",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, provident!",
    pubDate: "14/11/1883",
    author: "Robert Louis Stevenson",
    category: "Adventure fiction",
  },
  {
    title: "The Secret Garden",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, provident!",
    pubDate: "15/8/1911",
    author: "Frances Hodgson Burnett",
    category: "Children's novel",
  },
  {
    title: "Gone girl",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, provident!",
    pubDate: "24/5/2012",
    author: "Gillian Flynn",
    category: "Thriller",
  },
  {
    title: "Game of thrones",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, provident!",
    pubDate: "1/8/1996",
    author: "George R. R. Martin",
    category: "Epic story",
  },
  {
    title: "Sea of monsters",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, provident!",
    pubDate: "1/4/2006",
    author: "Rick Riordan",
    category: "Fantasy",
  },
  {
    title: "LOTR:fellowship of the ring",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, provident!",
    pubDate: "29/7/1954",
    author: "J.R.R. Tolkien",
    category: "Fantasy",
  },
  {
    title: "LOTR:two tower",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, provident!",
    pubDate: "11/11/1954",
    author: "J.R.R. Tolkien",
    category: "Children's novel",
  },
  {
    title: "LOTR:Return of the king",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, provident!",
    pubDate: "20/10/1955",
    author: "J.R.R. Tolkien",
    category: "Fantasy",
  },
  {
    title: "Hobbit",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, provident!",
    pubDate: "21/9/1937",
    author: "J.R.R. Tolkien",
    category: "Fantasy",
  },
];






oldText = "12/5/2023";
const date = new Date().toLocaleDateString("en-MN");
console.log(date);
if (date >= oldText) {
  console.log("yes");
} else console.log("no");
