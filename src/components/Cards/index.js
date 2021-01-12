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
                        <CardItem 
                        src='../../images/warehouse.jpg'
                        text="this is som eshitty text from line 14 of cards index js"
                        label="idfk a portfolio category"
                        path="/something"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
