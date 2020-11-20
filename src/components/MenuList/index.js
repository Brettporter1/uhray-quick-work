import React from 'react';
import { NavLink, BrowserRouter as Router } from 'react-router-dom';
import './style.scss';

function MenuList({ handleMenu, openMenu }) {
  return (
    <div className={`menu-list ${openMenu ? 'open' : 'closed'}`}>
      <Router>
        <NavLink to='/' onClick={handleMenu}>
          Home
        </NavLink>
        <NavLink to='/page-one' onClick={handleMenu}>
          Page 1
        </NavLink>
      </Router>
    </div>
  );
}

export default MenuList;
