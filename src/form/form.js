import React from 'react';
import {FormResults} from './formResults';
import search from './search.svg';
import './form.css';

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleKeyUp() {
    document.getElementById('results').className = 'formResults';
    let val = document.getElementById('searchInput').value;

    if (val === '') {
      document.getElementById('results').className = 'noDisplay';
    }

    const key = 'c7fcae67031c776148b87313a1bca82f';

    fetch(`http://food2fork.com/api/search?key=${key}&q=${val}`)
      .then(response => {
        if (response.status !== 200) {
          console.log('Error: ' + response.status);
          return;
        }

        response.json().then(data => {
          const results = data.recipes;
          this.setState({ results });
        });
      })

      .catch(err => {
        console.log('Fetch Error', err);
      })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit} id="form">
        <img src={search} alt="search icon" className="searchIcon" />
        <input onKeyUp={this.handleKeyUp} id="searchInput" className="searchBar" type="text" placeholder="Search for a recipe" required />
        <FormResults results={this.state.results} />
      </form>
    );
  }
}
