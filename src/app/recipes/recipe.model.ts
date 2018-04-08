import {Ingredient} from '../shared/ingredient.model';

export class Recipe {
  private _name: String;
  private _desc: String;
  private _imagePath: String;
  private _ingregients: Ingredient[];

  constructor(name: String, desc: String, imagePath: String, ingregients: Ingredient[]) {
    this._name = name;
    this._desc = desc;
    this._imagePath = imagePath;
    this._ingregients = ingregients;
  }


  get name(): String {
    return this._name;
  }

  set name(value: String) {
    this._name = value;
  }

  get desc(): String {
    return this._desc;
  }

  set desc(value: String) {
    this._desc = value;
  }

  get imagePath(): String {
    return this._imagePath;
  }

  set imagePath(value: String) {
    this._imagePath = value;
  }


  get ingregients(): Ingredient[] {
    return this._ingregients;
  }

  set ingregients(value: Ingredient[]) {
    this._ingregients = value;
  }
}
