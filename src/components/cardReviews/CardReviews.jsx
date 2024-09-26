import { useEffect, useState } from "react";
import './cardRevievs.css';
import { FaUserCircle } from "react-icons/fa";

const CardReviews = ({ props: movieReviews }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlide = movieReviews.results.length;

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlide);
    }, 6000);

    return () => clearInterval(slideInterval);
  }, [totalSlide]);

  return (
    <>
      <h2>Reivews</h2>
      {
        movieReviews.results <= 0 ? (
          <p>Non ci sono recensioni</p>
        ) : (
          <section className="reviews">
            <ul className="reviews-wrapper no-style-list">
              {
                Array.from({ length: totalSlide }).map((_, index) => {
                  const review = movieReviews.results[index]; // Accedi all'elemento corrente dell'array
                  return (
                    <li
                      key={review.id} // Usa l'ID specifico di ogni recensione
                      style={{ transform: `translateX(${(index - currentSlide) * 100}%)`, transition: 'transform 0.5s ease-in-out', }}
                    >
                      <article>
                        {
                          !review.author_details.avatar_path ? (
                            <div>
                              <FaUserCircle size={50} />
                              <p><strong>{review.author}</strong></p>
                            </div>
                          ) : (
                            <div>
                              <img src={import.meta.env.VITE_IMAGE_BASE_URL + review.author_details.avatar_path} alt={review.author} />
                              <p><strong>{review.author}</strong></p>
                            </div>
                          )
                        }
                        <p>{review.content.slice(0, 200)}</p> {/* Stampa il contenuto della recensione */}
                      </article>
                    </li>
                  )
                })
              }
            </ul>
          </section>
        )
      }
    </>
  );
}

export default CardReviews;
