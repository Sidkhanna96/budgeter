import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.scss';

const Footer = () => {
  return (
    <footer className="FooterComponent">
      <Link
        to="/legal"
        style={{
          textDecoration: 'none',
          color: 'white',
        }}
      >
        LEGAL
      </Link>
    </footer>
  );
};

export default Footer;
