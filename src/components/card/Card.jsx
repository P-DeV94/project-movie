import './card.css';
import MovieRating from "../movieRating/MovieRaiting";

const Card = ({title, image, voteAverage}) => {
  return (
    <article className="card" style={{backgroundImage: `url(${import.meta.env.VITE_IMAGE_BASE_URL + image})`}}>
      <header>
        <h4>{title}</h4>
        <MovieRating voteAverage={voteAverage}/>
      </header>
    </article>
  )
}

export default Card;