import React from 'react'
import "./style.css"
import { Button } from '../Button';
import { Link } from 'react-router-dom';

function index() {
    return (
        <div className='footer-container'>
            <section className='footer-email'>
                <p className='footer-email-heading'>
                    Let's work together!
            </p>
                <Button buttonStyle='btn--outline'>CONTACT ME</Button>
            </section>



            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <Link to='/'>Home</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/projects'>Projects</Link>
                    </div>
                </div>
            </div>

            <section class='social-media'>
                <div class='social-media-wrap'>
                    <div class='footer-logo'>
                        <Link to='/' className='social-logo'>
                            heather hern
                        </Link>
                    </div>
                    <small class='website-rights'>heather hern © 2021</small>
                    <div class='social-icons'>

                        <Link
                            class='social-icon-link facebook'
                            to='https://www.facebook.com/heather.newlin.1/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i class='fab fa-facebook-f' />
                        </Link>

                        <Link
                            class='social-icon-link instagram'
                            to='https://www.instagram.com/heaterhorn/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i class='fab fa-instagram' />
                        </Link>

                        <Link
                            class='social-icon-link linkedin'
                            to='https://www.linkedin.com/in/heather-hern-828539155/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i class='fab fa-linkedin' />
                        </Link>

                        <Link
                            class='social-icon-link github'
                            to='https://github.com/heatherhern'
                            target='_blank'
                            aria-label='Github'
                        >
                            <i class='fab fa-github' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default index