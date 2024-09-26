import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const MovieRating = ({ voteAverage }) => {
  const starsTotal = 5; // Numero totale di stelle su una scala da 5
  
  // Converte il voto su una scala da 0 a 5 e aggiunge un punto in più
  const rating = (voteAverage / 2) + 1;

  // Calcolo delle stelle piene, mezze stelle e stelle vuote
  let fullStars = Math.floor(rating); // Stelle piene
  let halfStar = rating % 1 >= 0.5 ? 1 : 0; // Verifica se c'è una mezza stella
  let emptyStars = starsTotal - fullStars - halfStar; // Calcola le stelle vuote

  const stars = [];

  // Aggiungi stelle piene
  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`full-${i}`} style={{ color: '#FFD700' }} />);
  }

  // Aggiungi mezza stella
  if (halfStar) {
    stars.push(<FaStarHalfAlt key="half" style={{ color: '#FFD700' }} />);
  }

  // Aggiungi stelle vuote
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<FaRegStar key={`empty-${i}`} style={{ color: '#FFD700' }} />);
  }

  return (
    <div>
      {stars}
    </div>
  );
};

export default MovieRating;
