export class Recipe {
  private _name: String;
  private _desc: String;
  private _imagePath: String;

  constructor(name: String, desc: String, imagePath: String) {
    this._name = name;
    this._desc = desc;
    this._imagePath = imagePath;
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

}
