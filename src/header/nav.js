import React from 'react';

export class Nav extends React.Component {
  render() {
    return(
      <nav>
        <ul className="navbar">
          <li><a href="/about" rel="noopener noreferrer">About</a></li>
        </ul>
      </nav>
    );
  }
}
