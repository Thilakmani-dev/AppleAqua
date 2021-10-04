import React from 'react';
import { Container } from 'react-bootstrap';
import Image from '../assets/images/zhanhui.jpg';

const EventContainer = (props) => {
  return (
    <Container
      style={{ backgroundColor: '#000', color: '#ffffff', height: '400px' }}
      className='p-auto text-center'
    >
      <h4>{props.title}</h4>
      <h5>{props.subtitle}</h5>
      <h6>{props.subtitle2}</h6>
      <img
        className='mt-5'
        src={Image}
        alt={props.img}
        width='50%'
        height='50%'
      />
    </Container>
  );
};

export default EventContainer;
