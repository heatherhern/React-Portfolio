import React from 'react';
import Hero from "../Hero";
import Footer from "../Footer";
import ListGroup from "../ListGroup";
import warehouse from "../../images/warehouse.jpg";
import "../../App.css";


function Contactpage() {
    return (
        <>
            <Hero
                header="contact"
                src={warehouse}
                alt="chattanooga"
                message="let's work together!"                
            />
            <ListGroup />
            <Footer />
        </>
    )
}

export default Contactpage