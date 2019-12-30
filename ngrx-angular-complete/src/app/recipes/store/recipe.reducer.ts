import {Recipe} from '../recipes.model';

import * as RecipeListActions from './recipe.actions';
import {ADD_RECIPE, DELETE_RECIPE, SET_RECIPES, UPDATE_RECIPE} from './recipe.actions';

export interface State {
  recipes: Recipe[];
}

const initialState: State = {
  recipes: []
};

export function recipeReducer(state = initialState, action: RecipeListActions.RecipesActions) {
  switch (action.type) {
    case SET_RECIPES:
      return {
        ...state,
        recipes: [...action.payload]
      };
    case ADD_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, action.payload]
      };
    case UPDATE_RECIPE:
      const upRcp = {
        ...state.recipes[action.payload.index],
        ...action.payload.newRecipe
      };

      const updatedRcps = [...state.recipes];
      updatedRcps[action.payload.index] = upRcp;

      return {
        ...state,
        recipes: updatedRcps
        /* or more shorter
        recipes: state.recipes.map((recipe, index) =>
             index === action.payload.index
              ? { ...action.payload.newRecipe }
              : recipe
            )
        *  */
      };
    case DELETE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.filter((recipe, index) => {
          return index !== action.payload;
        })
      };
    default:
      return state;
  }
}
