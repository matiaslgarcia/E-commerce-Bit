import React from 'react'
import { Spinner, Row, Col, Container } from 'react-bootstrap';
import './spinner.css';

const SpinnerCharge = () => {
    return (
        <Container>
            <Row>
                <Col></Col>
                <Spinner animation="border" className="spinner" />
                <Col></Col>
            </Row>
        </Container>
    )
}
export default SpinnerCharge;

