import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {

  ingredientsChanges = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient [] = [
    new Ingredient('Apples', 5),
    new Ingredient('Oranges', 5)
  ];

  getIngredients() {
    return this.ingredients.slice();

  }

  addIngredients(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanges.emit(this.ingredients.slice());
  }

  addShoppingIngredients(ingredients: Ingredient[]) {
    // for (let ingredient of ingredients) {
    //   this.ingredients.push(ingredient);
    //   this.ingredientsChanges.emit(this.ingredients.slice());
    // }

    this.ingredients.push(...ingredients);
    this.ingredientsChanges.emit(this.ingredients.slice());
  }

}
