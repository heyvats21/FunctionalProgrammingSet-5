import MoviesWatchlist from "./MoviesWatchList";
import "./styles.css";
import OnlineStore from "./OnlineStore";
import RecipesApp from "./RecipieApp";
import BookLibrary from "./BookLibrary";

export default function App() {
  return (
    <div>
      <OnlineStore /> {/* Ques 1  */}
      <MoviesWatchlist /> {/* Ques 2 */}
      <BookLibrary />
      {/* Ques 3 */}
      <RecipesApp />
      {/* Ques 10  */}
    </div>
  );
}
