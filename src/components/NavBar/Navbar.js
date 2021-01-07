import React, {useState} from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        HEATHER <i className="fas fa-seedling"></i>
                    </Link>
                </div>
            </nav>

        </>
    )
}

export default Navbar
