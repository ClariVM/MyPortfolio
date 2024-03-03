import React from 'react';
import './education.css'
import Certificates from '../certificate';



function Education() {
  return (
    <div>
        <div className='containered' id='education'>
          <h1>Education</h1>
          <div className='containerCertif'>
            <Certificates/>
          </div>
          
        </div>
      
    </div>
  );
}

export default Education;