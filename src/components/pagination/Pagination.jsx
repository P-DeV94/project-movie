import './pagination.css';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
const Pagination = ({ currentPage, totalPages, setPage }) => {

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setPage(currentPage + 1);
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setPage(currentPage - 1);
    }
  }

  return (
    <nav className="pagination">
    <ul className="no-style-list pagination-wrap">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="pagination-button"
        >
          <FaAngleLeft/>
        </button>
        <span className="pagination-info">
          Pagina {currentPage} di {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="pagination-button"
        >
          <FaAngleRight />
        </button>
    </ul>
    </nav>
  )
}

export default Pagination;