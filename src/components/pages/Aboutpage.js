import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
// import Image from 'react-bootstrap/Image';
import Footer from "../Footer";
import hunter from "../../images/hunter.jpg";
// import heather from "../../images/heather.jpeg";
import "../../App.css";

function Aboutpage() {
    return (
        <>
            <div className='hero-container'>
                <img
                    className="image"
                    src={hunter}
                    alt="hunter museum"
                />
                <h1 class="about-header">about</h1>
            
            <ListGroup className="list-group-about" horizontal>
                <row>
                    <ListGroup.Item className="list-group-item" variant="secondary">Heather (Newlin) Hern September 22, 1996</ListGroup.Item>
                    <ListGroup.Item className="list-group-item" variant="secondary">located in St. Elmo, Chattanooga</ListGroup.Item>
                </row>

                <row>
                    <ListGroup.Item className="list-group-item" variant="secondary">interests: reading, horseback riding, reality tv, dirty martinis</ListGroup.Item>
                    <ListGroup.Item className="list-group-item" variant="secondary">cat mom to jeans and rick hern <i class="fas fa-cat"></i> <i class="fas fa-cat"></i></ListGroup.Item>
                </row>

                <row>
                    <ListGroup.Item className="list-group-item" variant="secondary">marketing copywriter + account manager turned developer</ListGroup.Item>
                    <ListGroup.Item className="list-group-item" variant="secondary">enneagram 4, INFJ</ListGroup.Item>
                </row>
            </ListGroup>

            {/* <Image className="heather" src={heather} roundedCircle={true} ></Image>
            <p className="heather-p">hi!</p> */}

            </div>

            <Footer />

        </>
    )
}

export default Aboutpage