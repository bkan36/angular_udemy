import {NgModule} from '@angular/core';
import {ShoppingListComponent} from './shopping-list.component';
import {ShoppingEditComponent} from './shopping-edit/shopping-edit.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ShoppingRoutingModel} from './shopping-routing.model';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ShoppingRoutingModel
  ]
})
export class ShoppingModule {

}
