import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div>
            <div>
            <nav>
                <Link to='/home'>HOME</Link>
                <Link to='/reviews'>REVIEWS</Link>
                <Link to='/chart'>CHART</Link>
                <Link to='/blogs'>BLOGS</Link>
                <Link to='/about'>ABOUT</Link>
            </nav>
        </div>
        </div>
    );
};

export default Header;