import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './../../Images/logo.png';

import './Header.scss';

const Header = () => {
  const [header, setHeader] = useState('HeaderComponent');

  const listenScrollEvent = (event) => {
    if (window.scrollY < 73) {
      return setHeader('HeaderComponent');
    } else if (window.scrollY > 73) {
      return setHeader('HeaderComponentShrink');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <header className={header}>
      <Link to="/main">
        <img src={logo} alt="easyBudget Logo" />
      </Link>
    </header>
  );
};

export default Header;
