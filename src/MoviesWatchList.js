import "./styles.css";

const movies = [
  { id: 1, title: "Black Panther-Wakanda Forever", director: " Ryan Coogler" },
  {
    id: 2,
    title: "Once Upon a Time in Hollywood",
    director: "Quentin Tarantino"
  },
  { id: 3, title: "The Martian", director: "Ridley Scott" },
  { id: 4, title: "Black Bear", director: " Lawrence Michael Levine" },
  { id: 5, title: " A Charlie Brown Christmas", director: "Bill Melendez" }
];

export default function MoviesWatchlist() {
  return (
    <div>
      <h2>Movies To Watch</h2>
      <ul>
        {movies.map((elem) => (
          <li>
            {elem.title}:{elem.director}
          </li>
        ))}
      </ul>
    </div>
  );
}
