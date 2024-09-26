import { useParams } from 'react-router-dom';
import { useFetch } from '../../hook/useFetch';
import Spinner from '../../components/spinner/Spinner';
import { translateTime } from "../../utilities/functions";
import MovieRating from "../../components/movieRating/MovieRaiting";
import Slider from "../../components/slider/Slider";
import CardReviews from "../../components/cardReviews/CardReviews";
import './singlePage.css';

const SinglePage = () => {
  const { id } = useParams();
  const { data: movieID, error, isLoading } = useFetch(`${import.meta.env.VITE_END_POINT_MOVIE_BY_ID}/${id}&language=it-IT`);
  const { data: castItems, isLoading: isCastLoading } = useFetch(`${import.meta.env.VITE_END_POINT_MOVIE_BY_ID}/${id}/credits`);
  const { data: movieVideo, isLoading: isVideoLoading } = useFetch(`${import.meta.env.VITE_END_POINT_MOVIE_BY_ID}/${id}/videos`);
  const { data: movieReviews, isLoading: isReviewsLoading } = useFetch(`${import.meta.env.VITE_END_POINT_MOVIE_BY_ID}/${id}/reviews`);

  if (isLoading || isCastLoading || isVideoLoading || isReviewsLoading ) return <Spinner />;
  if (error) return <p>Errore: {error}</p>;

  return (
    <article id="single-page">
      <header>
        <section style={{ backgroundImage: `url(${import.meta.env.VITE_IMAGE_FULL_BASE_URL + movieID.backdrop_path})` }} className="hero">
          <div className="hero-thumbnail">
            <img src={import.meta.env.VITE_IMAGE_BASE_URL + movieID.poster_path} alt={movieID.title} draggable='false' />
          </div>
          <div className="hero-content">
            <h1>{movieID.title}</h1>
            <div className="hero-content-details">
              <ul className="no-style-list container-genres">
                {
                  movieID.genres.map((genre) => {
                    return (
                      <li key={genre.id} className="chip">{genre.name}</li>
                    )
                  })
                }
              </ul>
              <span>|</span>
              <p className="date-release">{new Date(movieID.release_date).toLocaleDateString()}</p>
              <span>|</span>
              <p className="runtime">{translateTime(movieID.runtime)}</p>
            </div>
            <div>
              <MovieRating voteAverage={movieID.vote_average} />
            </div>
            <div className="titles">
              <h3>{movieID.tagline}</h3>
              <h2>Descrizione</h2>
            </div>
            <p>{movieID.overview}</p>
            <div className="hero-content-cast">
              <h3>Cast:</h3>
              <Slider props={castItems} />
            </div>
          </div>
        </section>
      </header>
      <section className="container">
        <h2>Videos</h2>
        <ul className="no-style-list video-list">
          {movieVideo.results.map((video) => {
            return (
              <li key={video.id}>
                <iframe width="560" height="315" src={`https://www.youtube-nocookie.com/embed/${video.key}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen type={video.type}></iframe>
              </li>
            )
          })}
        </ul>
        <CardReviews props={movieReviews}/>

      </section>
    </article>
  );
};

export default SinglePage;
