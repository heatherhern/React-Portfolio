import React from 'react'
import '../../../src/App.css'
import { Button } from '../Button'
import "./style.css"
import desk from "../../images/desk.jpg"

function Hero() {
    return (
        <div className='hero-container'>
            <image src={desk}> 

            </image>
            <h1>hero text</h1>
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
