import React from 'react';

const Pagination = ({ pageCount, onPageClick }) => {
  return (
    <nav className='center'>
      <ul className='pagination'>
        {[...Array(pageCount)].map((e, index) => {
          return (
            <li className='page-item'>
              <button
                className='page-link space-gray custom-page-link'
                onClick={(e) => onPageClick(e, index + 1)}
              >
                {index + 1}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
