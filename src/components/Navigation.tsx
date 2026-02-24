import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';

import {ROUTES, SECONDARY_ROUTES, EXPAND_NAV} from '../routes/routes';
import { useWindowContext } from '../contexts/WindowContext';


const LOGO = "Logo_localisation-gouv-nc-vecto.svg"



function Navigation() {


  const {widthBreak, width} = useWindowContext();

  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

  return (
      <Navbar expand={EXPAND_NAV} className="bg-body-tertiary nav">
        <Container fluid>
          <Navbar.Brand as={Link} to="/"> 
            <img alt="Logo" src={LOGO}/> 
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleShow}/>
          <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${EXPAND_NAV}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${EXPAND_NAV}`}
              placement="end"
              show={showOffcanvas}
              onHide={handleClose}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${EXPAND_NAV}`}>
                  Navigation
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav variant="tabs" className="me-auto">
                  {ROUTES.map((route, index) => (
                    <Nav.Link 
                      key={index} 
                      as={Link} 
                      to={route.path}
                      onClick={handleClose}
                    >
                      {route.header}
                    </Nav.Link>
                  ))}
                </Nav>
                {width <= widthBreak && 
                  <Nav className="justify-content-end">
                    {SECONDARY_ROUTES.map((route, index) => (
                      <Nav.Link 
                        key={index}
                        as={Link}
                        to={route.path}
                        onClick={handleClose}
                      >
                        {route.header}
                      </Nav.Link>
                    ))}
                  </Nav> 
                }
              </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
  )
}

export default Navigation;
