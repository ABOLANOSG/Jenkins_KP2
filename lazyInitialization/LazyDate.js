export default class LazyDate {
  constructor() {
    this.date = null;
  }

 async delay(ms) {
  console.log("Loading heavy data...");
return new Promise(resolve => setTimeout(resolve, ms));
}

   async getValue() {
    if (!this.date) {
      console.log("Initializing resource...");
      await this.delay(2000);
      this.date = new Date();
    }
    return this.date;
  }
}
