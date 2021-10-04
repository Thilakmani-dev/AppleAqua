import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import EmptyProduct from './EmptyProduct';
import LargeProduct from './LargeProduct';
import SmallProduct from './SmallProduct';

const Products = () => {
  return (
    <Container fluid className='my-5'>
      <Row>
        <Col xs={12} lg={4} className='p-1'>
          <EmptyProduct title='Products & Components & More' />
        </Col>
        <Col xs={12} lg={8} className='p-1'>
          <LargeProduct
            title='Water Softeners'
            subtitle='Design . Inspired by nature.'
          />
        </Col>
        <Col xs={12} lg={4} className='p-1'>
          <SmallProduct
            img='valve'
            title='Control Valves'
            subtitle='User-friendly, reliable, powerful function and cost saving'
          />
        </Col>
        <Col xs={12} lg={4} className='p-1'>
          <SmallProduct
            img='tank'
            title='Pressure Tanks'
            subtitle='Why Canature Water Filters？'
          />
        </Col>
        <Col xs={12} lg={4} className='p-1'>
          <SmallProduct
            img='ro'
            title='Reverse Osmosis & Membranes'
            subtitle='high quality and reasonable prices.'
          />
        </Col>
        <Col xs={12} lg={4} className='p-1'>
          <SmallProduct
            img='other'
            title='Other Products'
            subtitle='User-friendly, reliable, powerful function and cost saving'
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Products;
