import React from 'react';
import {Link} from 'react-router-dom';
import {Nav} from './nav';
import logo from '../logo.svg';
import './header.css';

export class Header extends React.Component {
  render() {
    return(
      <header>
        <Link to={'/'}><h1><img src={logo} className="logo" alt="logo" />FODMAP Recipes</h1></Link>
        <Nav />
      </header>
    );
  }
}
