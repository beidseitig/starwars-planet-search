import React from 'react';
import intro from '../projectIntro.gif';

function Header() {
  return (
    <img src={ intro } alt="StarWars Logo" className="center" />
  );
}

export default Header;
