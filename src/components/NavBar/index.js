import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './style.css'
import { Button } from '../Button'

function Navbar() {
    // set state for nav bar click styles //
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    // sets value to opposite of current click value //
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick= {closeMobileMenu} style={{ textDecoration: 'none' }}>
                        heather hern
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {/* toggles icons between menu styles */}
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu} style={{ textDecoration: 'none' }}>
                                home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/projects' className='nav-links' onClick={closeMobileMenu} style={{ textDecoration: 'none' }}>
                                projects</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-links' onClick={closeMobileMenu} style={{ textDecoration: 'none' }}>
                                about</Link>
                        </li>
                        </ul>
                        {button && <Button buttonStyle='btn--outline'>contact</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar
