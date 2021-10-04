import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { FiSearch } from 'react-icons/fi';

function NavigationBar() {
  return (
    <Navbar
      bg='light'
      expand='lg'
      className='p-2'
      style={{ height: '10vh', maxHeight: '25vh' }}
    >
      <Navbar.Brand href='#'>Apple Aqua</Navbar.Brand>
      <Navbar.Toggle aria-controls='navbarScroll' />
      <Navbar.Collapse id='navbarScroll'>
        <Nav className='m-auto' navbarScroll>
          <Nav.Link href='/'>Products</Nav.Link>
          <Nav.Link href='/'>Our Strength</Nav.Link>
          <Nav.Link href='/'>Media Center</Nav.Link>
          <Nav.Link href='/'>About Us</Nav.Link>
          <Nav.Link href='/'>Inquiry</Nav.Link>
        </Nav>
        <Form className='d-flex'>
          <FormControl type='search' placeholder='Search' aria-label='Search' />
          <Button style={{ backgroundColor: '#82A7CC' }}>
            <FiSearch />
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
