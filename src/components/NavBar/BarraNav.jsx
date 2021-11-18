import React, { Fragment } from 'react';
import { CartWidget } from '../CartWidget/CartWidget';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import logo from './img/iconBit.svg';
import './index.css'
import { Link} from 'react-router-dom';

const BarraNav = () => {
  return (
    <Fragment>
        <Row className="container-navBar">
          <Col fluid >
            <Container>
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
              <Link to="/">BIT 3D</Link>
              <Nav className="ms-auto navbar-nav ml-auto my-2 my-lg-0" >
                <Nav.Link as={ Link } to="#home"> Conocenos </Nav.Link>
                <Nav.Link as={ Link } to="#features">Servicios</Nav.Link>
                <Nav.Link as={ Link } to="#pricing">Catalogo</Nav.Link>
                <Nav.Link as={ Link } to="#home">Contacto</Nav.Link>
                <Nav.Link as={ Link } to="#features">Tienda</Nav.Link>
                <CartWidget ></CartWidget>
              </Nav>
            </Navbar>
            </Container>
          </Col>
        </Row>
    </Fragment >
  )
}
export default BarraNav;