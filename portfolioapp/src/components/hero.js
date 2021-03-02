import React from "react";
import profile from "../images/profile"
import {Col, Image, Container} from "react-bootstrap";
import Jumbotron from 'react-bootstrap/Jumbotron';
import facebook from "../images/facebook.png";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";


function Hero() {
    return (
        <Jumbotron fluid>
            <Container>
                <Col xs={6} md={4}>
                    <Image src={profile} roundedCircle />
                </Col>
                <a href="https://www.facebook.com/janaejazmin/" target="_blank" rel="noreferrer"><img src={facebook} className="social-icon" alt="facebook logo"/></a>
                <a href="https://www.linkedin.com/in/janae-clark/" target="_blank" rel="noreferrer"><img src={linkedin} className="social-icon" alt="linkedin logo"/></a>
                <a href="https://github.com/janaec" target="_blank" rel="noreferrer"><img src={github} className="social-icon" alt="github logo"/></a>
            </Container>
        </Jumbotron>
        
    )
}

export default Hero;
