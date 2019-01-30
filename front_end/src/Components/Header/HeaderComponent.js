import React, { Component } from 'react';
import logo from '../../logo.png';
import '../../App.css';
import {Navbar } from 'reactstrap';

class Header extends Component {
  render() {
    return (
        <div>
            <Navbar  color="light" light expand="md">
                <div  className="navHeader">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Fintech</h2>
                </div>
            </Navbar>
        </div>
    );
  }
}

export default Header;