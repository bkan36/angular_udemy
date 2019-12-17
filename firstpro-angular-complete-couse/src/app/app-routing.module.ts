import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {AuthComponent} from './auth/auth.component';



const routes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'},
  {path: 'shopping-list', loadChildren: './shopping-list/shopping.module#ShoppingModule'},
  {path: 'auth', loadChildren: './auth/auth.module#AuthModule'},

  /*angular 8+ version -> loadChildren: () => import('./your-module-path/module-name.module').then(m => m.ModuleName)*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
