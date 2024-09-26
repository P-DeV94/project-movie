import Sidebar from "../components/sidebar/Sidebar";
import Card from "../components/card/Card";
import { useFetch } from "../hook/useFetch";
import { useState } from "react";
import Spinner from "../components/spinner/Spinner";
import Pagination from "../components/pagination/Pagination";
import { Link } from "react-router-dom";

const Movie = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [numberGenres, setNumberGenres] = useState(null);

  const { data: movies, error: moviesError, isLoading: isMoviesLoading } = useFetch(
    query ? (`${import.meta.env.END_POINT_SEARCH_MOVIE}?query=${query}&page=${page}&language=it-IT`) :
      numberGenres ? (`${import.meta.env.END_POINT_MOVIE}?page=${page}&with_genres=${numberGenres}&language=it-IT`) :
        `${import.meta.env.END_POINT_MOVIE}?page=${page}&language=it-IT`
  );

  return (
    <>
      <div id="dashboard-movie">
        <main className="main">
          {isMoviesLoading ? (
            <Spinner />
          ) : moviesError ? (
            <div>{moviesError}</div>
          ) : (
            <ul className="no-style-list card-list">
              {movies && movies.results.map((movie) => (
                <li key={movie.id}>
                  <Link to={`/${movie.id}`} style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    padding: 0,
                    margin: 0,
                    background: 'none',
                    border: 'none',
                    outline: 'none',
                    font: 'inherit',
                  }}>
                    <Card
                      title={movie.title}
                      image={movie.poster_path}
                      voteAverage={movie.vote_average}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          )}
          {movies && movies.total_pages > 0 && (
            <Pagination currentPage={page} totalPages={movies.total_pages} setPage={setPage} />
          )}
        </main>
        <Sidebar query={query} setQuery={setQuery} numberGenres={numberGenres} setNumberGenres={setNumberGenres} />
      </div>
    </>
  );
};

export default Movie;
