import React from 'react';
import { Container } from 'react-bootstrap';
import WaterSoftner from '../assets/images/watersoftener.png';

const LargeProduct = (props) => {
  return (
    <Container
      style={{ backgroundColor: '#f2f2f2', height: '600px' }}
      className='p-2 text-center'
    >
      <h5>{props.title}</h5>
      <h6>{props.subtitle}</h6>
      <img src={WaterSoftner} alt={props.img} width='50%' height='400px' />
    </Container>
  );
};

export default LargeProduct;
