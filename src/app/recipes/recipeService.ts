import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shoppingListService';

@Injectable()
export class RecipeService {

  receipeSelected = new  EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Chat Masala', 'Chat Recipe from heaven', 'http://www.indianfoodforever.com/images/rainy-recipes.jpg',
      [new Ingredient('peas', 3),new Ingredient('chips',5)]),
    new Recipe('Pav Bhaji', 'Mom Ka pav', 'https://i.ytimg.com/vi/rSLiOqJ2egU/maxresdefault.jpg',
      [new Ingredient('greens',7),new Ingredient('spice',8)])

  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipeById(id: number) {
    return this.recipes[id];
  }

  addIngredients(ingredients: Ingredient[]) {
    this.shoppingListService.addShoppingIngredients(ingredients);
  }
}
