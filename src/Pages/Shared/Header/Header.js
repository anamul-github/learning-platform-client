import React from 'react';
import './Header.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


const Header = () => {
    const { user } = useContext(AuthContext);
    return (

        <div className='d-flex justify-content-between align-items-center header px-5'>
            <div>
                <h2 className='title fw-bolder'>Learning Hour</h2>
            </div>
            <div>
                <nav className='text-center links p-5'>
                    <Link to="/category">Courses</Link>
                    <Link to="/faq">FAQ</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/login">Login: {user?.displayName}</Link>
                    <Link to="/register">Register</Link>
                </nav>
            </div>
        </div>
    );
};

export default Header;