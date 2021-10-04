import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import EventContainer from './EventContainer';
import SmallProduct from './SmallProduct';
import Jiqi from '../assets/images/jiqi.png';

const InfoContainer = () => {
  return (
    <Jumbotron fluid className='text-center m-2'>
      <h3>One Stop Water Treatment Partner</h3>
      <h6>A large water treatment products manufacturer in China</h6>
      <p>World-Class Quality Ensured</p>
      <Link to='/' style={{ textDecoration: 'none' }}>
        Learn More
      </Link>
      <Container fluid className='p-2'>
        <Row className='m-1'>
          <Col xs={12} md={4}>
            <SmallProduct
              title='2019 CATALOG'
              subtitle='Download PDF'
              img='catalog'
            />
          </Col>
          <Col xs={12} md={8}>
            <EventContainer
              title='Canature Special Event'
              subtitle='Aquatech Amsterdam 2017'
              subtitle2='RAI Amsterdam Europaplein 1078 GZ Amsterdam The Netherlands 31 October-3 November 2017'
              img='Zhanhui'
            ></EventContainer>
          </Col>
          <Col xs={12} md={12}>
            <Container className='linear-bg m-1'>
              <Row>
                <Col>
                  <h4>Intelligent Factory</h4>
                  <h6>Your One Stop Water Treatment Partner</h6>
                </Col>
                <Col>
                  <img src={Jiqi} alt='Jiqi' />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default InfoContainer;
