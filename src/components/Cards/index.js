import React from 'react';
import warehouse from "../../images/warehouse.jpg";
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
                            src={warehouse}
                            text='Explore the hidden waterfall deep inside the Amazon Jungle'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem
                            src={warehouse}
                            text='Travel through the Islands of Bali in a Private Cruise'
                            label='Luxury'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src={warehouse}
                            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                            label='Mystery'
                            path='/services'
                        />
                        <CardItem
                            src={warehouse}
                            text='Experience Football on Top of the Himilayan Mountains'
                            label='Adventure'
                            path='/products'
                        />
                        <CardItem
                            src={warehouse}
                            text='Ride through the Sahara Desert on a guided camel tour'
                            label='Adrenaline'
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;