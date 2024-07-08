import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../../css/navigationbar.css'

//  another  bootstap

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//Function  ----------------
function NavigationBar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
   <>
  
{/* -------------------------------------*/}

<div className="navbar bg-slate-800">
  <div className="navbar-start">
  <Button variant="primary" onClick={handleShow} className='bg-dark border-dark'>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-border-width" viewBox="0 0 16 16">
  <path d="M0 3.5A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5zm0 5A.5.5 0 0 1 .5 8h15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5"/>
</svg>
      </Button>
  </div>
  <div className="navbar-center">
    <a className="btn btn-ghost text-white">BDFOOD</a>
  </div>
  <div className="navbar-end">
   
   
  </div>
</div>


{/*  main toggle section --------------------------------------------  */ }
      <Offcanvas show={show} onHide={handleClose} backdrop="static" className="bg-base-200">
        <Offcanvas.Header closeButton className='bg-base-200'>
          <Offcanvas.Title className='bg-base-200'>Task Manager </Offcanvas.Title>
 
        </Offcanvas.Header >
        <Offcanvas.Body className='bg-base-200'>
{/*---------------------------------------------------------  */}


<Navbar collapseOnSelect expand="lg" className="bg-body-tertiary bg-base-200 ">
      <Container className='d-flex flex-column'>
        
      <Nav.Link href="/">Home Page </Nav.Link>
      <Nav.Link href="/create">Create Page </Nav.Link>
      <Nav.Link href="/update">Update Page </Nav.Link>
      <Nav.Link href="/read">Read Page </Nav.Link>
    
      </Container>
    </Navbar>


{/*---------------------------------------------------------  */}
        </Offcanvas.Body>
      </Offcanvas>
   

   </>
  )
}

export default NavigationBar