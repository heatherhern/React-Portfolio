import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css";

function CardItem() {
    return (
        <>
            <li className="cards_item">
                <Link className="cards_item_link">
                    <figure className='cards_item_pic_wrap'>
                        <img src="/" alt="portfolio image"
                            className='cards_item_img' />
                    </figure>
                    <div className='cards_item_info'>
                        <h5 className='cards_item_text' />
                    </div>
                </Link>
            </li>
        </>
    );
}

export default CardItem