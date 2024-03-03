import React from 'react';
import './contact.css'
import { IoMdClose } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";




function Contact({isOpen, closeModal}) {

  return (
    <div>
      {isOpen &&
        <div className='modal-background 'id='contact'>
          <div className='contactModal'>
            <div className='title'>
            <h1>SOCIAL NETWORKS</h1>
            <button onClick={closeModal} className='btnClose'><IoMdClose /></button>
            </div>
            <div className='iconContact'>
            <a href="https://github.com/ClariVM" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/claribel-merlo/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="mailto:claribelmerlo@hotmail.com" target="_blank" rel="noopener noreferrer"><IoMailOutline /></a>
            </div>
            </div>
        </div>
      }
    </div>
      
  );
}

export default Contact;