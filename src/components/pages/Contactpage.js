import React from 'react';
import Hero from "../Hero";
import Footer from "../Footer";
import "../../App.css";
import software from "../../images/software.jpg";
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

function Contactpage() {
    return (
        <>
            <Hero
                header="contact me"
                src={software}
                alt="software image"
                message="let's work together!"
            />

            <ListGroup>
                <ListGroup.Item>heathernewlin1@gmail.com</ListGroup.Item>
                <ListGroup.Item>615.477.7223</ListGroup.Item>
            </ListGroup>


            <Footer />
        </>
    )
}

export default Contactpage