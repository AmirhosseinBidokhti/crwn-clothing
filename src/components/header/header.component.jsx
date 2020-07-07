import React from 'react';
import { Link } from 'react-router-dom';

// Special syntax in React for importing SVG. Will explain how it works
import { ReactComponent as Logo } from '../../assets/4.3 crown.svg';

import './header.styles.scss';


const Header = () => (
    <div className="header">
        <Link to="/" className="logo-container">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link to="/shop" className="option">SHOP</Link>
            <Link to="/shop" className="option">CONTACT</Link>
        </div>
    </div>
);

export default Header;