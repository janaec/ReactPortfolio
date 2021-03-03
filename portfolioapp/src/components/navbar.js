import React from "react";
import {navbar,Form, Nav,FormControl,Button} from 'react-bootstrap'

function Navbar(props) {
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Janae J. Clark</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#Portfolio">Portfolio</Nav.Link>
        <Nav.Link href="#Contact">Contact Me</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
    )
}
export default Navbar;
