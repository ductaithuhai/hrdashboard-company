import React from 'react';
import './styles.css';

const Pagination = ({ currentPage, totalPages, goToNextPage, goToPrevPage, goToFirstPage, goToLastPage }) => {
  return (
    <nav>
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button className="page-link" onClick={goToFirstPage}>
          <i className="fa-solid fa-angles-left"></i>
          </button>
        </li>
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button className="page-link" onClick={goToPrevPage}>
          <i className="fa-solid fa-angle-left"></i>
          </button>
        </li>
        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <button className="page-link" onClick={goToNextPage}>
          <i className="fa-solid fa-angle-right"></i>
          </button>
        </li>
        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <button className="page-link" onClick={goToLastPage}>
          <i className="fa-solid fa-angles-right"></i>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
