import React from 'react';
import './Header.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { Button, Image, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaUser, FaChalkboardTeacher, FaToggleOn } from 'react-icons/fa';



const Header = () => {

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            {user?.displayName}
        </Tooltip>
    );

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (

        <div className='d-flex justify-content-between align-items-center header px-5'>
            <div>
                <h2 className='title fw-bolder'><span className='mx-2'><FaChalkboardTeacher></FaChalkboardTeacher></span>Learning Hour</h2>
            </div>
            <div>
                <nav className='text-center links p-5'>
                    <Link to="/category">Courses</Link>
                    <Link to="/faq">FAQ</Link>
                    <Link to="/blog">Blog</Link>
                    <FaToggleOn className='text-white mx-3'></FaToggleOn>

                    {
                        user?.uid ?
                            <>
                                <Button variant="light" onClick={handleLogOut} className='mx-2'>Log out</Button>
                            </>
                            :
                            <>
                                <Link to='/login'>Login</Link>
                                <Link to='/register'>Register</Link>
                            </>
                    }

                    {user?.photoURL ?
                        <OverlayTrigger
                            placement="bottom"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltip}>
                            <Image
                                className='m-2'
                                style={{ height: '30px' }}
                                roundedCircle
                                src={user?.photoURL}>
                            </Image>
                        </OverlayTrigger>
                        : <FaUser className='text-white'></FaUser>
                    }

                </nav>
            </div>
        </div>
    );
};

export default Header;