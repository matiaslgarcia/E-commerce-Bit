import React, { Fragment } from 'react';
import { CartWidget } from '../CartWidget/CartWidget';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import logo from './img/iconBit.svg';
import './index.css'
import { Link } from 'react-router-dom';

const BarraNav = () => {
  return (
    <Fragment>
      <Row className="container-navBar">
        <Col fluid >
          <Container>
            <Navbar className="navbar-toggler-right" >
              <Navbar.Brand as={Link} to="/" className="text-center">
                <img
                  alt=""
                  src={logo}
                  width="50"
                  height="50"
                  className="d-inline-block align-top"
                />{' '}
              </Navbar.Brand>
              <Link to="/">BIT 3D</Link>
              <Nav className="ms-auto navbar-nav ml-auto my-2 my-lg-0" >
                <Nav.Link as={Link} to="/catalogue">Catalogo</Nav.Link>
                <Nav.Link as={Link} to="/us"> Conocenos </Nav.Link>
                <Nav.Link as={Link} to="/services">Servicios</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contacto</Nav.Link>
                <Nav.Link as={Link} to="/cart"><CartWidget /></Nav.Link>
              </Nav>
            </Navbar>
          </Container>
        </Col>
      </Row>
    </Fragment >
  )
}
export default BarraNav;