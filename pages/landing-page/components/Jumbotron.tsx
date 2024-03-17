// components/Jumbotron.tsx
import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Jumbotron: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h2" align="center" color="primary" gutterBottom>
        Welcome to Our Website
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary">
        Learn more about what we do and how we can help you.
      </Typography>
    </Container>
  );
};

export default Jumbotron;
