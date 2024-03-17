// components/Footer.tsx
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer: React.FC = () => {
  return (
    <Box bgcolor="primary.main" color="white" p={2} mt={8}>
      <Typography variant="body1" align="center">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
