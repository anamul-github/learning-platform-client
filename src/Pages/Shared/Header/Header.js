import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


const Header = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <Link to="/category">Courses</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/login">Login: {user?.displayName}</Link>
            <Link to="/register">Register</Link>
        </div>
    );
};

export default Header;