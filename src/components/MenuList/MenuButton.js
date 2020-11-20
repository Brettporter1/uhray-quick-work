import React from 'react';

function MenuButton({ openMenu, handleMenu }) {
  return (
    <button
      className={`menu-btn ${openMenu ? 'btn-close' : 'btn-open'}`}
      onClick={handleMenu}
    >
      <span className='menu-line'></span>
      <span className='menu-line'></span>
      <span className='menu-line'></span>
    </button>
  );
}

export default MenuButton;
