import React from 'react';
import './Header.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { Button, Image } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';



const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
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


                    {
                        user?.uid ?
                            <>
                                <span className='text-white'>{user?.displayName}</span>
                                <Button variant="light" onClick={handleLogOut} className='mx-2'>Log out</Button>
                            </>
                            :
                            <>
                                <Link to='/login'>Login</Link>
                                <Link to='/register'>Register</Link>
                            </>
                    }

                    {user?.photoURL ?
                        <Image
                            className='m-2'
                            style={{ height: '30px' }}
                            roundedCircle
                            src={user?.photoURL}>
                        </Image>
                        : <FaUser></FaUser>
                    }

                </nav>
            </div>
        </div>
    );
};

export default Header;