import React from 'react';
import Cards from "../Cards";
import Footer from "../Footer";
import software from "../../images/software.jpg";
import "../../App.css";

function Projects() {
    return (
        <>
            <div className='hero-container'>
                <img
                    className="image"
                    src={software}
                    alt="desktop"
                />
                <h1 class="about-header">projects</h1>
            </div>
            <Cards />
            <Footer />
        </>
    )
}

export default Projects;