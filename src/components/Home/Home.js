import React, { Component } from "react";
import { Link } from "react-router-dom";
import RecipeCard from "./../RecipeCard/RecipeCard";
import store, {DELETE_CARD} from "./../../store.js"
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    const reduxState = store.getState();
    this.state = {
      recipes: reduxState.recipes
    };
    this.deleteCard = this.deleteCard.bind(this)
  }

  deleteCard(key){
    // const reduxState = store.getState();
    store.dispatch({
      type: DELETE_CARD,
      payload: this.state.recipes.slice
    });
  }

  render() {
    console.log("this.state:", this.state.recipes)
    const recipes = this.state.recipes.map((recipe, i) => {
      return (
        <RecipeCard
          deleteCard={this.deleteCard}
          key={i}
          index={i}
          name={recipe.name}
          category={recipe.category}
          authorFirst={recipe.authorFirst}
          authorLast={recipe.authorLast}
          ingredients={recipe.ingredients}
          instructions={recipe.instructions}
        />
      );
    });
    return (
      <div className="Home">
        <Link to="/add/name">
          <button>Create New Recipe</button>
        </Link>
        <div className="card_container">{recipes}</div>
      </div>
    );
  }
}

export default Home;
