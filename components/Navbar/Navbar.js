import React from 'react';
import {AppBar, Typography, Toolbar} from '@material-ui/core'
import NavbarStyle from './Navbar.module.css';

const Navbar = () => {
return <AppBar className={NavbarStyle.appNavbarOuter}>
  <Toolbar className={NavbarStyle.appNavbarInner}>
    <Typography variant="h6">
      Tensorflow Js Knn Dashboard
    </Typography>
  </Toolbar>
</AppBar>
}

export default Navbar;