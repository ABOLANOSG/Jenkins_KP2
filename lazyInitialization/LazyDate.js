export default class LazyDate {
  constructor() {
    this._date = null;
  }

  get value() {
    if (!this._date) {
      this._date = new Date();
    }
    return this._date;
  }
}
