import React from 'react';
import header from '../Images/starwarsheaderApi.png';

const Header = () => {
  return (
    <header className='header mt-3'>
      <img src={header} alt='Star Wars API' />
    </header>
  );
};

export default Header;
