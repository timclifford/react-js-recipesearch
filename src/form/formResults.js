import React from 'react';
import {Link} from 'react-router-dom';
import './formResults.css';

export class FormResults extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    document.getElementById('results').className = 'noDisplay';
    document.getElementById('searchInput').value = '';
  }

  render() {
    return(
      <ul id="results" onClick={this.handleClick}>
        {this.props.results.map((element, index) => {
          return(
            <li key={index} onClick={this.handleClick}>
              <Link to={`/recipe/${this.props.results[index].recipe_id}`} >
                <img src={this.props.results[index].image_url === null ? 'http://via.placeholder.com/640x960' : `${this.props.results[index].image_url}`} alt={`${this.props.results[index].title} poster`} className="recipeResult" />
                <div>
                  <p>{this.props.results[index].title}</p>
                  <p>{this.props.results[index].publisher}</p>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    );
  }
}
