import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>

            <section class='social-media'>
                <div class='social-media-wrap'>
                    <div class='footer-logo'>
                        <Link to='/' className='social-logo' style={{ textDecoration: 'none' }}>
                            heather hern
                        </Link>
                    </div>
                    <small class='website-rights'>heather hern © 2021</small>
                    <div class='social-icons'>

                        <Link
                            class='social-icon-link facebook'
                            to='/facebook'
                            target='_blank'
                            aria-label='Facebook'
                            style={{ textDecoration: 'none' }}
                        >
                            <i class='fab fa-facebook-f' />
                        </Link>

                        <Link
                            class='social-icon-link instagram'
                            to='./instagram'
                            target='_blank'
                            aria-label='Instagram'
                            style={{ textDecoration: 'none' }}
                        >
                            <i class='fab fa-instagram' />
                        </Link>

                        <Link
                            class='social-icon-link linkedin'
                            to='/linkedin'
                            target='_blank'
                            aria-label='LinkedIn'
                            style={{ textDecoration: 'none' }}
                        >
                            <i class='fab fa-linkedin' />
                        </Link>

                        <Link
                            class='social-icon-link github'
                            to='/github'
                            target='_blank'
                            aria-label='Github'
                            style={{ textDecoration: 'none' }}
                        >
                            <i class='fab fa-github' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;