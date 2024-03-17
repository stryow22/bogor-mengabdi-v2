import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/router';
import { styled } from '@mui/system';

const Navbar = styled(AppBar)({
  '& .nav-link': {
    marginRight: '20px',
    textDecoration: 'none',
    color: 'inherit',
    borderBottom: '2px solid transparent',
    transition: 'border-color 0.3s',
    '&:hover': {
      borderColor: 'red',
    },
    '&.active': {
      fontWeight: 'bold',
    },
  },
});

const CustomToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const DrawerContainer = styled('div')({
  width: '200px',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
});

const NavbarComponent: React.FC = () => {
  const router = useRouter();
  const [openDrawer, setOpenDrawer] = useState(false);

  const isLinkActive = (href: string) => {
    return router.pathname === href ? 'active' : '';
  };

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <div>
      <Navbar position="static" className='py-2'>
        <CustomToolbar>
          <Typography variant="h6" component="div">
            <img style={{ width: '50%' }} src="/logo-bm.png" alt="Bogor Mengabdi" />
          </Typography>
          
          <nav className='invisible md:visible'>
            <Link href="/" className={`nav-link ${isLinkActive('/')}`} underline="none">
              Home
            </Link>
            <Link href="/program" className={`nav-link ${isLinkActive('/program')}`} underline="none">
              Program
            </Link>
            <Link href="/contact" className={`nav-link ${isLinkActive('/contact')}`} underline="none">
              Contact
            </Link>
          </nav>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </CustomToolbar>
      </Navbar>

      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={handleDrawerClose}
      >
        <DrawerContainer>
          <Link href="/" className={`nav-link ${isLinkActive('/')}`} underline="none">
            Home
          </Link>
          <Link href="/program" className={`nav-link ${isLinkActive('/program')}`} underline="none">
            Program
          </Link>
          <Link href="/contact" className={`nav-link ${isLinkActive('/contact')}`} underline="none">
            Contact
          </Link>
        </DrawerContainer>
      </Drawer>
    </div>
  );
};

export default NavbarComponent;