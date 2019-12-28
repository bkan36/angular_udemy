import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipes.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import {map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router,
              private store: Store<fromApp.AppState>) {
  }

  ngOnInit() {
    /* work with the first observable 'params' then transform params id in number then
      use switchMap to manipulate another observable that 'this.store.select' will return then
      search th@e recipe via RecipesState and return the good recipe in subscribe */
    this.route.params
      .pipe(
        map(params => +params.id),
        switchMap(id => {
          this.id = id;
          return this.store.select('recipes');
        }),
        map(recipesState => {
          return recipesState.recipes.find((recipe, index) => {
            return index === this.id;
          });
        }))
      .subscribe(recipe => this.recipe = recipe);

  }

  onAddToShopList() {
    this.recipeService.addIngToShopList(this.recipe.ingredients);
  }

  onEditRecipe() {
    // this.router.navigate(['../' + this.id + '/edit'], {relativeTo: this.route}); both works
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
