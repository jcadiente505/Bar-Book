import React from 'react';
import "./navbar.css";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";


const Navbar = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="display2" color="inherit">
        Bar Book
      </Typography>
      <Button className="loginButton" color="inherit">Login</Button>
    </Toolbar>
  </AppBar>
);


export default Navbar;