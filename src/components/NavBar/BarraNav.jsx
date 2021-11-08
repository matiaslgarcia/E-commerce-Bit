import React, { Fragment } from 'react';
import { CartWidget } from '../CartWidget/CartWidget';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from './img/iconBit.svg';
import './index.css'

const BarraNav = () => {
  return (
    <Fragment>
      <Container className="container-navBar">
        <Navbar className="navbar-toggler-right" >
            <Navbar.Brand href="#home" className="text-center">
              <img
                alt=""
                src={logo}
                width="50"
                height="50"
                className="d-inline-block align-top"
              />{' '}
            </Navbar.Brand>
            <a href="#home">BIT 3D</a>
            <Nav className="ms-auto navbar-nav ml-auto my-2 my-lg-0" >
              <Nav.Link href="#home">Conocenos</Nav.Link>
              <Nav.Link href="#features">Servicios</Nav.Link>
              <Nav.Link href="#pricing">Catalogo</Nav.Link>
              <Nav.Link href="#home">Contacto</Nav.Link>
              <Nav.Link href="#features">Tienda</Nav.Link>
              <CartWidget ></CartWidget>
            </Nav>
        </Navbar>
      </Container>
    </Fragment>
  )
}
export default BarraNav;