import React from 'react';
import { Container } from 'react-bootstrap';
import '../App.css';

const BigScreen = () => {
  return (
    <Container fluid className='p-2 bigContainer' style={{ height: '35rem' }}>
      {/* <div className='mt-5 text-black-50 text-center'>
        <h1>Apple Aqua</h1>
        <h2>New RO System</h2>
      </div> */}
    </Container>
  );
};

export default BigScreen;
