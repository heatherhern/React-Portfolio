import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'; 
import Hero from "../Hero";
import Footer from "../Footer";
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
            <ListGroup className="list-group-contact" horizontal>
                {/* <row > */}
                        <ListGroup.Item className="list-group-item" variant="secondary">heathernewlin1@gmail.com</ListGroup.Item>
                        <ListGroup.Item className="list-group-item" variant="secondary">615.477.7223</ListGroup.Item>
                        <ListGroup.Item className="list-group-item" action href="/github" variant="secondary"><i class="fab fa-github"></i> @heatherhern</ListGroup.Item>
                {/* </row> */}
                    </ListGroup>
            <Footer />
        </>
    )
}

export default Contactpage