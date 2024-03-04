import React from 'react';
import './project.css';
import CardsList from '../cards';



function Project() {
  return (
      <div className='containerp' id='projects'>
        <h1>Projects</h1>
        <div className='containerCards'>
        <CardsList/>
        </div>
        
      </div>
  );
}

export default Project;