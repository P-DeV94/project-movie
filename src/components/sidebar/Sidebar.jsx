
import { useState } from "react";
import { useFetch } from "../../hook/useFetch";
import { LuChevronDown } from "react-icons/lu";
import './sidebar.css';

const Sidebar = ({ query, setQuery, numberGenres, setNumberGenres }) => {

  const { data: genres } = useFetch(import.meta.env.VITE_END_POINT_GENRES_MOVIE);

  const handleChange = (event) => {
    const target = event.target.value;
    setQuery(target)
  }

  // Funzione per gestire la selezione delle checkbox
  const handleCheckboxChange = (genreId) => {
    setNumberGenres((prevGenres) => {
      if (prevGenres && prevGenres.includes(genreId)) {
        // Se il genere è già selezionato, lo rimuoviamo
        return prevGenres.filter((id) => id !== genreId);
      } else {
        // Se il genere non è selezionato, lo aggiungiamo
        return prevGenres ? [...prevGenres, genreId] : [genreId];
      }
    });
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="sidebar">
      <form>
        <div className="sidebar-input">
          <label htmlFor="search">Cerca film</label>
          <input type="search" name="search" id="search" value={query} onChange={handleChange} />
        </div>
        <div>
          <div onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <h2>Filtra per genere (mostra tutti)</h2>
            <LuChevronDown fontSize={'24px'} />
          </div>
          <ul className={isOpen ? 'no-style-list check-list show' : 'no-style-list check-list'}>
            {
              genres && genres.genres.map((genre) => {
                return (
                  <li key={genre.id} style={{ marginBottom: '1rem' }}>
                    <div>
                      <input
                        type="checkbox"
                        name={genre.name}
                        id={genre.id}
                        checked={numberGenres && numberGenres.includes(genre.id)}
                        onChange={() => handleCheckboxChange(genre.id)}
                      />
                      <label htmlFor={genre.id}>{genre.name}</label>
                    </div>
                  </li>
                );
              })
            }
          </ul>
        </div>
      </form>
    </aside>
  )
};

export default Sidebar;