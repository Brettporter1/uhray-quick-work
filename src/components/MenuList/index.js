import React from 'react';
import './style.scss';

function MenuList({ handleMenu, openMenu, props }) {
  const {
    articlesPerPage,
    changePagination,
    totalArticles,
    currentPage,
  } = props;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={`menu-list ${openMenu ? 'open' : 'closed'}`}>
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => {
            handleMenu();
            changePagination(page);
          }}
          className={page === currentPage ? 'active' : null}
        >
          Page {page}
        </button>
      ))}
    </div>
  );
}

export default MenuList;
