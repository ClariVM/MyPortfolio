import React from 'react';
import './home.css'



function Home() {
  return (
    <div>
        <div className='container-home' id='home'>
        <video className='video' src="assets/clari.mp4" autoPlay loop muted></video>
        </div>
    </div>
  );
}

export default Home;
