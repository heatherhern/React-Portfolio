import React from 'react'
import '../../../src/App.css'
import { Button } from '../Button'
import "./style.css"
import desk from "../../images/desk.jpg"

function Hero() {
    return (
        <div className='hero-container'>
            <image src={desk}></image>
            <h1>heather hern</h1>
            <p>let's work together!</p>
            <div className="hero-btns">

                <Button 
                className="btns" 
                buttonStyle="btn--primary"
                buttonSize="btn--large"
                to="/contact"
                >CONTACT ME</Button>
            </div>
        </div>
    )
}

export default Hero
