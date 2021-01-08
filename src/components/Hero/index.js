import React from 'react'
import '../App.css'
import { Button } from '../Button'
import "./style.css"

function Hero() {
    return (
        <div className='hero-container'>
            <image src="../public/images/desk.jpg" />
            <h1>welcome to my site this is the hero text</h1>
            <p> a pee tag </p>

            <div className="hero-btns">


                <Button className="btns" buttonStyle="btn--outline"
                    buttonSize="btn--large">VIEW PROJECTS</Button>



                <Button className="btns" buttonStyle="btn--primary"
                    buttonSize="btn--large">CONTACT ME</Button>
            </div>


        </div>

    )
}

export default Hero
