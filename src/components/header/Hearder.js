import * as React from "react";
import './Header.css'; 
// importing material UI components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import logo from '../views/logo-cetys-educon.svg';
  
export default function Header() {
  return (
      <AppBar className="Header-Style" style={{ backgroundColor: '#f7c454' }}>
        <Toolbar>
        <img className="Header-image" href="#" src={logo} alt="logo" width="350" height="200"/>
        <p className="Header-text">  Maestría en Intervención Socioeducativa</p>
        </Toolbar>
      </AppBar>
  );
}