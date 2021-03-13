import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function TopNav() {
  return (
  <>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#portfolio">My Portfolio</Nav.Link>
        <Nav.Link href="#wallet">My Wallet</Nav.Link>
        <Nav.Link href="#search">Search</Nav.Link>
        <Nav.Link href="#login">Log In</Nav.Link>
        <Nav.Link href="#signin">Sign In</Nav.Link>
      </Nav>
  </Navbar>
  </>
  )
}