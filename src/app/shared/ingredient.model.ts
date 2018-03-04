export class Ingredient{

  constructor(private _name: String, private _amount: Number) {}

  get name(): String {
    return this._name;
  }

  set name(value: String) {
    this._name = value;
  }

  get amount(): Number {
    return this._amount;
  }

  set amount(value: Number) {
    this._amount = value;
  }
}
