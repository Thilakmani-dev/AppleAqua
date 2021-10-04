import React from 'react';
import BigScreen from '../components/BigScreen';
import InfoContainer from '../components/InfoContainer';
import Products from '../components/Products';

const HomePage = () => {
  return (
    <>
      <BigScreen />
      <Products />
      <InfoContainer />
    </>
  );
};

export default HomePage;
