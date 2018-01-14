import React from 'react';
import {Header} from '../header/header';
import {Form} from '../form/form';
import './recipe.css';

export class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: {
        ingredients: []
      }
    }
    this.getData = this.getData.bind(this);
  }

  getData() {
    const key = 'c7fcae67031c776148b87313a1bca82f';
    const id = window.location.pathname.substring(8);

    fetch(`http://food2fork.com/api/get?key=${key}&rId=${id}`)
      .then(response => {
        if (response.status !== 200) {
          console.log('Error: ' + response.status);
          return;
        }

        response.json().then(data => {
          const recipe = data.recipe;
          this.setState({ recipe });
        });

      })
      .catch(err => {
        console.log('Fetch Error', err);
      })
  }

  componentDidMount() {
    this.getData();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.recipe !== this.state.recipe) {
      this.getData();
    }
  }

  render() {
    return(
      <div className="container">
        <Header />
        <Form id="form" />

        <div className="recipePage">
          <div className="recipeImage">
            <img src={this.state.recipe.image_url === null ? 'http://via.placeholder.com/640x960' : `${this.state.recipe.image_url}`} alt={`${this.state.recipe.title} recipe`} />
          </div>

          <section className="recipeDetails">
            <h2 className="sectionTitle">{this.state.recipe.title}</h2>
            <p className="publisher">{this.state.recipe.publisher}</p>
            <ul className="detailsList">
              {this.state.recipe.ingredients.map((element, index) => {
                if (index < this.state.recipe.ingredients.length - 1) {
                  return(
                    <li key={index}><span className="bold">{this.state.recipe.ingredients[index] + ', '}</span></li>
                  )
                } else {
                  return(
                    <li key={index}><span className="bold">{this.state.recipe.ingredients[index]}</span></li>
                  )
                }
              })}
            </ul>
            <p>{this.state.recipe.source_url}</p>
          </section>
        </div>

      </div>
    );
  }
}
