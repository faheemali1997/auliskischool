import React, { Component } from 'react';
import './Header.css';
class Header extends Component {
    render () {
      return (
        <div className="header">
            <image src="src/resources/logo.png"/>
            <h1 className="logo">Auli Skiing School</h1>
        </div>
      );
    }
  }

export default Header;