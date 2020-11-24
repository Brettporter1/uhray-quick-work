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
    console.log(pageNumbers);
  }

  return (
    <div className={`menu-list ${openMenu ? 'open' : 'closed'}`}>
      {pageNumbers.map((page) => (
        <a
          key={page}
          onClick={() => {
            handleMenu();
            changePagination(page);
          }}
          href='!#'
          className={page === currentPage ? 'active' : null}
        >
          Page {page}
        </a>
      ))}
    </div>
  );
}

export default MenuList;
