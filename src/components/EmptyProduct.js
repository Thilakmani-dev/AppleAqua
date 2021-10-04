import React from 'react';
import { Container } from 'react-bootstrap';

const EmptyProduct = (props) => {
  return (
    <Container
      style={{ backgroundColor: '#fff', height: '200px' }}
      className='px-5 pt-5 text-center'
    >
      <h5>{props.title}</h5>
    </Container>
  );
};

export default EmptyProduct;
