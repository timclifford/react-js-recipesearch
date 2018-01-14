import React from 'react';
import {Header} from '../header/header';

export class About extends React.Component {
  render() {
    return(
      <div className="container">
        <Header />
        <div>
          <h3>About</h3>
        </div>
      </div>
    );
  }
}
