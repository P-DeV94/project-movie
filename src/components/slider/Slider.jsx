import { useState } from 'react';
import './slider.css';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Slider = ({ props: castItems }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = Math.ceil(castItems.cast.length / 4); // Mostriamo 4 elementi per slide

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="carousel">
      <ul className="slide-wrapper no-style-list">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <li
            key={index}
            className="slide"
            style={{
              transform: `translateX(${(index - currentSlide) * 100}%)`,
              transition: 'transform 0.5s ease-in-out',
            }}
          >
            {/* Genera i contenuti dentro <article> */}
            {castItems.cast.slice(index * 4, index * 4 + 4).map((castMember, idx) => (
              <article key={idx} className="cast-item">
                <img
                  src={`${import.meta.env.VITE_IMAGE_BASE_URL}${castMember.profile_path}`}
                  alt={castMember.name}
                  draggable="false"
                />
                <div className="content-cast">
                  <p className="name">{castMember.name}</p>
                  <p className="character">{castMember.character}</p>
                </div>
              </article>
            ))}
          </li>
        ))}
        <button className="btn btn-prev" onClick={handlePrev}><FaChevronLeft fill="242424"/></button>
        <button className="btn btn-next" onClick={handleNext}><FaChevronRight fill="242424"/></button>
      </ul>
    </section>
  );
};

export default Slider;
