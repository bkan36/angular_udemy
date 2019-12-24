import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';
import {Observable, Subscription} from 'rxjs';

import {Store} from '@ngrx/store';
import * as fromShoppingList from './store/shopping-list.reducer';
import * as ShoppingActions from './store/shopping-list.actions';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Observable<{ ingredients: Ingredient[] }>;
  private subscription: Subscription;

  constructor(private shoppinglistService: ShoppingListService,
              private store: Store<fromShoppingList.AppState>) {
  }

  ngOnInit() {
    this.ingredients = this.store.select('shoppingList');

/*    this.ingredients = this.shoppinglistService.getIngredients();
    this.subscription = this.shoppinglistService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        });*/
  }

  onEditItem(index: number) {
    /*this.shoppinglistService.startedEditing.next(index);*/
    this.store.dispatch(new ShoppingActions.StartEdit(index));
  }

  ngOnDestroy(): void {
   /* this.subscription.unsubscribe();*/
  }
}
