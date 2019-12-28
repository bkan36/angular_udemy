import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {RecipeService} from '../recipe.service';

import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService,
              private router: Router,
              private store: Store<fromApp.AppState>) {
  }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.id = +params.id;
        this.editMode = params['id'] != null; // params['id'] works too
        this.initForm();
      });
  }

  onSubmit() {
    /*    const newRecipe = new Recipe(
          this.recipeForm.value.name,
          this.recipeForm.value.description,
          this.recipeForm.value.imgPath,
          this.recipeForm.value.ingredients
        ); equivalent of this.recipeForm.value */

    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    this.onCancel();
  }

  onAddIngredient() {
    (this.recipeForm.get('ingredients') as FormArray).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onDeleteIngredient(index: number) {
    (this.recipeForm.get('ingredients') as FormArray).removeAt(index);
  }

  private initForm() {
    let recipeName = '';
    let recipeImgPath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      this.store.select('recipes')
        .pipe(
          map((recipesState => {
            return recipesState.recipes.find((recipe, index) => {
              return index === this.id;
            });
          }))
        ).subscribe(recipe => {
        recipeName = recipe.name;
        recipeImgPath = recipe.imagePath;
        recipeDescription = recipe.description;
        if (recipe.ingredients) {
          for (let ig of recipe.ingredients) {
            recipeIngredients.push(new FormGroup({
              name: new FormControl(ig.name, Validators.required),
              amount: new FormControl(ig.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            }));
          }
        }
      });
    }
    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      imagePath: new FormControl(recipeImgPath, Validators.required),
      description: new FormControl(recipeDescription, Validators.required),
      ingredients: recipeIngredients
    });
  }

  get controls() {
    return (this.recipeForm.get('ingredients') as FormArray).controls;
  }
}
