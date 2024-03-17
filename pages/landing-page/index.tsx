// pages/index.tsx
import React from 'react';
import Container from '@mui/material/Container';
import Jumbotron from './components/Jumbotron';

const Home: React.FC = () => {
  return (
    <div>
      {/* <Container> */}
        <Jumbotron />
      {/* </Container> */}
    </div>
  );
};

export default Home;
