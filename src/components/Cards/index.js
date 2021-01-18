import React from 'react';
import readmegenerator from "../../images/readmegenerator.png";
import notetaker from "../../images/notetaker.png";
import burgerlogger from "../../images/burgerlogger.png";
import spacequiz from "../../images/spacequiz.png";
import devteamgenerator from "../../images/devteamgenerator.png";
import passwordgen from "../../images/passwordgen.png";
import reactemployeetracker from "../../images/reactemployeetracker.png";
import weatherdash from "../../images/weatherdash.jpg";
import CardItem from '../CardItems';
import './style.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Recent Projects</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src={reactemployeetracker}
                            header="React Employee Tracker"
                            text='This employee tracker and contact list will generate a list of employees from the randomuser.me api. 
                            The list can be searched by name with the input box or filtered alphabetically by name.'
                            label='React'
                            path='/employee-tracker'
                        />
                        <CardItem
                            src={readmegenerator}
                            header="Amazing README Generator"
                            text='This README Generator will automatically create a README 
                            for your project by prompting you with questions about your project in the terminal.'
                            label='JavaScript'
                            path='/readme-generator'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src={notetaker}
                            header="Note Saving App"
                            text='This app allows you to write, save, and delete notes to keep track of tasks, lists, and to-dos.'
                            label='JavaScript'
                            path='/note-taker'
                        />
                        <CardItem
                            src={burgerlogger}
                            header="Burger Logger"
                            text='A simpple + fun database tracker for burger eating.'
                            label='JavaScript'
                            path='/buger-logger'
                        />
                        <CardItem
                            src={spacequiz}
                            header="The Space Quiz"
                            text='This is a JavaScript quiz to test your knowledge of some fun space facts!'
                            label='JavaScript'
                            path='/space-quiz'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src={devteamgenerator}
                            header="Development Team Generator"
                            text='This is a software engineering team generator command line application built with Node CLI.'
                            label='JavaScript'
                            path='/dev-team-generator'
                        />
                        <CardItem
                            src={passwordgen}
                            header="Secure Password Generator"
                            text='This is a random password generator that can create a unique, secure password at the desired character length.'
                            label='JavaScript'
                            path='/password-gen'
                        />
                        <CardItem
                            src={weatherdash}
                            header="Weather API Dashboard"
                            text='Use this app to find a current and five-day weather forecast in cities you search.'
                            label='JavaScript'
                            path='/weather-dash'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;