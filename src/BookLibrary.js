import "./styles.css";

const books = [
  { id: 1, title: "2 States", author: "Chetan Bhagat", rating: "4" },
  { id: 2, title: "It ends with us", author: "Colleen Hoover", rating: "4.5" },
  { id: 3, title: "It Starts with us", author: "Colleen Hoover", rating: "4" },
  { id: 4, title: "Do Epic SHit", author: "Ankoor Waariko", rating: "3" },
  { id: 5, title: "crush it on linkedin ", author: "Ishan Sharma", rating: "3" }
];

export default function BookLibrary() {
  return (
    <>
      <h1>Book Library </h1>
      <ul>
        {books.map(({ title, author, rating }) => (
          <li>
            Book Title={title}
            <br />
            Book Author={author}
            <br />
            Book Rating={rating}
          </li>
        ))}
      </ul>
    </>
  );
}
