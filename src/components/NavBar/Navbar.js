import React, {useState} from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    // set state for nav bar click styles //
    const [click, setClick] = useState(false);

// sets value to opposite of current click value //
    const handleClick = () => setClick(!click);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        HEATHER <i className="fas fa-seedling"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {/* toggles icons between menu styles */}
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar
