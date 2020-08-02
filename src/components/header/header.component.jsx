import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

// Special syntax in React for importing SVG. Will explain how it works
import { ReactComponent as Logo } from '../../assets/4.3 crown.svg';

import './header.styles.scss';

const Header = ({ currentUser }) => (
    <div className="header">
        <Link to="/" className="logo-container">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link to="/shop" className="option">SHOP</Link>
            <Link to="/contact" className="option">CONTACT</Link>
            {
                currentUser ? (<div onClick={()=> auth.signOut()} className='option'>SIGN OUT</div>)

                : (<Link to="/signin" className='option'>SIGN IN</Link>)
            }
        </div>
    </div>
);

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);