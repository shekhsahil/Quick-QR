import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="success" data-bs-theme="dark" style={{paddingRight:"10px"}}>
        <Container className="justifyContent-center">
          <Navbar.Brand href="/">Quick QR</Navbar.Brand>
        </Container>
        {/*  */}
        <Nav className="justify-content-center" >
          <Nav.Item   >
            <Nav.Link href="/" style={{color:"white"}}>Create</Nav.Link>
          </Nav.Item>
          <Nav.Item >
            <Nav.Link href="/read" style={{color:"white", marginLeft:"10px"}}>Read</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
