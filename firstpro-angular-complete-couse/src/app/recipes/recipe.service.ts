import {Recipe} from './recipes.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('some',
      'body',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('Meat', 2),
        new Ingredient('French Fries', 20)
      ]
    ),
    new Recipe('another',
      'recipe yeah',
      'https://3.bp.blogspot.com/-f1bgW7OKqY4/VX8Vwv2b2xI/AAAAAAAAEMg/NnryHYkO3c0/s640/burgers%2B2.jpg',
      []
    )
  ];

  constructor(private slService: ShoppingListService) {
  }


  getRecipes() {
    return this.recipes.slice(); // slice give a copy of the array
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngToShopList(ingredient: Ingredient[]) {
    this.slService.addIngredients(ingredient);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice())
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice())
  }
}
