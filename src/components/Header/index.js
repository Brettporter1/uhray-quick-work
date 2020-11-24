import React, { useState, Fragment } from 'react';
import './style.scss';
import MenuList from '../MenuList';
import MenuButton from '../MenuList/MenuButton';

function Header(props) {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => {
    setOpenMenu((state) => !state);
  };
  return (
    <Fragment>
      <MenuList openMenu={openMenu} handleMenu={handleMenu} props={props} />
      <MenuButton openMenu={openMenu} handleMenu={handleMenu} />
      <header>
        <h3>Home</h3>
      </header>
    </Fragment>
  );
}

export default Header;
