import React from 'react';
import {Link} from 'react-router-dom';
import './topRecipes.css';

export class TopRecipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    }
  }

  componentDidMount() {
    const key = 'c7fcae67031c776148b87313a1bca82f';

    fetch(`https://food2fork.com/api/search?key=${key}&q=gluten`)
      .then(response => {
        if (response.status !== 200) {
          console.log('Error: ' + response.status);
          return;
        }

        response.json().then(data => {
          const recipes = data.recipes;
          this.setState({ recipes });
        });

      })
      .catch(err => {
        console.log('Fetch Error', err);
      })
  }

  render() {
    return(
      <section>
        <h2>New recipes</h2>
        <div className="topRecipes">
          {this.state.recipes.map((recipe, index) => {
            return (
              <Link to={`/recipe/${this.state.recipes[index].recipe_id}`} key={index} className="recipeLink">
                <img src={this.state.recipes[index].image_url === null ? 'http://via.placeholder.com/640x960' : `${this.state.recipes[index].image_url}`} alt={`${this.state.recipes.title} title`} className="imgResponsive" />

                <div className="recipeInfo">
                  <h3>{this.state.recipes[index].title}</h3>
                  <p>{this.state.recipes[index].publisher}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </section>
    );
  }
}
