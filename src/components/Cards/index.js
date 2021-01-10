import React from 'react'
import CardItem from '../CardItems'
import "./style.css";

function Cards() {
    return (
        <div className='cards'>
            <h1>this is a title thing </h1>
            <div className='cards_container'>
                <div className='cards_wrapper'>
                    <ul className='cards_items'>
                        <CardItem />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
