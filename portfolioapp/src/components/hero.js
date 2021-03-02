import React from "react";
import profile from "../images/profile"
import {Col, Image, Container} from "react-bootstrap";
import Jumbotron from 'react-bootstrap/Jumbotron'


function Hero() {
    return (
        <Jumbotron fluid>
            <Container>
                <Col xs={6} md={4}>
                    <Image src={profile} roundedCircle />
                </Col>
            </Container>
        </Jumbotron>
        
    )
}

export default Hero;
