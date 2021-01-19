import React from 'react'
import '../../../src/App.css'
import { Button } from '../Button'
import "./style.css"

function Hero(props) {
    return (
        <>
            <div className='hero-container'>
                <img
                    className="image"
                    src={props.src}
                    alt={props.alt}
                />
                <h1>{props.header}</h1>
                <p>{props.message}</p>
                <div className="hero-btns">

                    <Button
                        className="btns"
                        buttonStyle="btn--primary"
                        buttonSize="btn--large"
                        to="/contact"
                    >CONTACT ME</Button>
                </div>
            </div>
        </>
    )
}

export default Hero
