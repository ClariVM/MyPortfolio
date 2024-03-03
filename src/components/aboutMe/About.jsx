import React from 'react';
import './about.css';
import TechnologyList from '../icons';




function About() {
  return (
    <div>
        <div className='container-about' id='about'>
          <h1>About me</h1>
          <div className='containerProfile col-6'>
            <p>Hello, my name is Claribel Merlo, I am 28 years old. Currently, I am studying to become a Software Development Technician. Driven by curiosity, I continuously seek opportunities to expand my knowledge. With each line of code, I am shaping my future and honing my skills to become a proficient programmer. </p>
            <img src="/assets/profile.jpeg" alt="" />
          </div>
        <div className='container-tec'>
          <h1>Technologies</h1>
          <TechnologyList/>
        </div>
        </div>
    </div>
  );
}

export default About;