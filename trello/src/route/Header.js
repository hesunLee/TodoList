import React from 'react';
import '../css/Header.css';
import { Link } from 'react-router-dom';

const MenuItem = ({active, children, to}) => (
    <Link to={to} className="menu-item">
        {children}
    </Link>
);

const Header = () => {
    return (
        <div>
            <div className="logo">
                TodoList
            </div>
            <div className="menu">
                <MenuItem to={'/'}>Home</MenuItem>
                <MenuItem to={'/Hs_Board'}>Heesun</MenuItem>
            </div>
        </div>
    );
};

export default Header;