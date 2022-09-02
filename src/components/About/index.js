import React from 'react';
import profileImage from "../../assets/JesseBeatles.jpg"

const About = () => {
    return (
        <section className="my-5 about">
            <h1 id="about">Who am I?</h1>
            <img src={profileImage} alt="Jesse wearing a Beatles t-shirt" className='profile' />
            <p>Welcome to my portfolio! I'm an HTML5 game producer by day, and full stack web and game developer by night. Despite setting out to become a screenwriter and working for several years in voiceover and animation production, I began working towards becoming a game designer in late 2019, by taking Playcrafting's "Learn Unity in 8 Weeks" course. Nearly an entire pandemic later, I've become a producer for HTML5 games, and have completed a full-stack coding bootcamp through Columbia University. As I add more skills to my repetoire, I plan to transition into creating my own video game studio to make independent games featuring stories about modern society - with some light web development on the side.</p>
        </section>
    )
}

export default About;