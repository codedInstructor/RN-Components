// array of Book Objects (image, author, price and title)

export interface Book {
  title: string;
  author: string;
  priceKWD: string;
  image: string;
}
const books: Book[] = [
  {
    image: "https://covers.openlibrary.org/b/id/10594765-L.jpg",
    title: "Atomic Habits",
    author: "James Clear",
    priceKWD: "6.5",
  },
  {
    image:
      "https://m.media-amazon.com/images/I/712P0p5cXIL._AC_UF1000,1000_QL80_.jpg",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    priceKWD: "5.75",
  },
  {
    image: "https://covers.openlibrary.org/b/id/11192508-L.jpg",
    title: "Educated",
    author: "Tara Westover",
    priceKWD: "7.25",
  },
  {
    image: "https://covers.openlibrary.org/b/id/10220408-L.jpg",
    title: "Sapiens: A Brief Hist",
    author: "Yuval Noah Harari",
    priceKWD: "8.0",
  },
  {
    image: "https://covers.openlibrary.org/b/id/10342534-L.jpg",
    title: "The Alchemist",
    author: "Paulo Coelho",
    priceKWD: "4.95",
  },
  {
    image: "https://covers.openlibrary.org/b/id/10342534-L.jpg",
    title: "Babel",
    author: "R.F Kuang",
    priceKWD: "14.95",
  },
];

export default books;
