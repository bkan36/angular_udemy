import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('some',
      'body',
      'https://s2.qwant.com/thumbr/0x380/f/2/4c26f1b93ab62383fc893d0b97378f554c36d88d3382b6da67c2189f1e8cc1/Recipe_logo.jpeg?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F1%2F15%2FRecipe_logo.jpeg&q=0&b=1&p=0&a=1'
    )
  ];

  constructor() { }

  ngOnInit() {
  }

}
