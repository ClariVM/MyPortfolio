import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css'
import Contact from '../contact/Contact';
import { useState } from 'react';


function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = ()=>{
    setIsOpen(true)
  }
  const closeModal = ()=>{
    setIsOpen(false)
  }

  return (
    <>
    <Navbar expand="lg" className="bg-navbar fixed-top">
      <Container>
        <Navbar.Brand>
        <img src="assets/ClarivM.png" alt="logo" style={{ maxHeight: '80px' }}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='menu-link' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="links">
            <a href="#home" className='link-nav'>Home</a>
            <a href="#about" className='link-nav'>About me</a>
            <a href="#projects" className='link-nav'>Projects</a>
            <a href="#education" className='link-nav'>Education</a>
            <a className='link-nav' onClick={openModal} style={{ cursor: 'pointer' }}>Contact</a>
            <Contact isOpen={isOpen} openModal={openModal} closeModal={closeModal}/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavBar;