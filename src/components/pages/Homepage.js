import React from 'react';
import Hero from "../Hero";
import "../../App.css";
import Cards from "../Cards";
import Footer from "../Footer";
import desk from "../../images/desk.jpg";

function Home() {
    return (
        <>
            <Hero 
            header="heather hern"
            src={desk}
            alt="desk image"
            message="let's work together!"
            />
            <Cards />
            <Footer />
        </>
    );
}

export default Home;
