import {Recipe} from './recipes.model';
import {Ingredient} from '../shared/ingredient.model';
import {Injectable} from '@angular/core';

import { Store } from '@ngrx/store';

import * as ShoppingActions from '../shopping-list/store/shopping-list.actions';
import * as fromApp from '../store/app.reducer';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [];

  constructor(private store: Store<fromApp.AppState>) {
  }

  getRecipes() {
    return this.recipes.slice(); // slice give a copy of the array
  }

  addIngToShopList(ingredients: Ingredient[]) {
    this.store.dispatch(new ShoppingActions.AddIngredients(ingredients));
  }
}


/*private recipes: Recipe[] = [
  new Recipe(
    'Tasty Schnitzel',
    'A super-tasty Schnitzel - just awesome!',
    'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
    [
      new Ingredient('Meat', 1),
      new Ingredient('French Fries', 20)
    ]),
  new Recipe('Big Fat Burger',
    'What else you need to say?',
    'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
    [
      new Ingredient('Buns', 2),
      new Ingredient('Meat', 1)
    ])
];*/
