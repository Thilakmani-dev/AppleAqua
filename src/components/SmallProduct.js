import React from 'react';
import { Container } from 'react-bootstrap';
import Other from '../assets/images/other.png';
import Ro from '../assets/images/ro.png';
import Tank from '../assets/images/tank.png';
import Valve from '../assets/images/valve.png';

const SmallProduct = (props) => {
  return (
    <Container
      style={{ backgroundColor: '#f2f2f2', height: '400px' }}
      className='p-auto text-center'
    >
      <img
        className='mt-5'
        src={
          props.img === 'ro'
            ? Ro
            : props.img === 'tank'
            ? Tank
            : props.img === 'valve'
            ? Valve
            : Other
        }
        alt={props.img}
        width='50%'
        height='50%'
      />
      <h5>{props.title}</h5>
      <h6>{props.subtitle}</h6>
    </Container>
  );
};

export default SmallProduct;
